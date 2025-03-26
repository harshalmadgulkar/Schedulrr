import { clerkClient, currentUser } from '@clerk/nextjs/server';
import { db } from './prisma';

export const checkUser = async () => {
	// Find current user from clerkDB
	const user = await currentUser();

	// return nulll if no user found
	if (!user) {
		return null;
	}

	try {
		// Checking if the user exists in NeonDB before creating a new one.
		const loggedInUser = await db?.user.findUnique({
			where: {
				clerkUserId: user.id,
			},
		});

		// return loggedInUser if it's there
		if (loggedInUser) {
			return loggedInUser;
		}

		// If user not found in NeonDB, create a username
		const name = `${user.firstName || 'New'} ${user.lastName || 'User'}`;
		const username = name.split(' ').join('-') + user.id.slice(-6);

		// Try updating the Clerk user profile with the generated username
		try {
			await clerkClient.users.updateUser(user.id, {
				username,
			});
		} catch (err) {
			console.error('Failed to update Clerk username:', err);
		}

		// Create and add user in NeonDB
		const newUser = await db.user.create({
			data: {
				clerkUserId: user.id,
				name,
				imageUrl: user.imageUrl,
				email: user.emailAddresses[0].emailAddress,
				username,
			},
		});

		// Return newUser which is already added in NeonDB
		return newUser;
	} catch (error) {
		console.error('Error in checkUser function:', error);
		return null; // Prevents breaking the app
	}
};
