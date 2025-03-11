This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### 1. Environment Variables Setup

To run this project, you need to configure environment variables for Clerk authentication.

1. Create a `.env` file in the root directory.
2. Copy the contents of `env.sample` into `.env`.
3. Add your Clerk API keys to the `.env` file.

#### **Where to Find API Keys**

-   **For Project Owner & Collaborators:**  
    Go to [Clerk Dashboard](https://clerk.com/)
    -   Select the **Schedulrr** app
    -   Navigate to **Configure → Developers → API Keys**
    Go to [NeonDB Dashboard](https://neon.tech/)
    -   Select the **Schedulrr** Project 
    -   Click on connect DB
    -   Select the **Schedulrr** DB & **Dev Role**
    -   Copy connection string

-   **For Forked Projects:**
    -   Create your own app on [Clerk.com](https://clerk.com/)
    -   Navigate to **Configure → Developers → API Keys**

    -   Create your own app on [Neon.tech](https://neon.tech/)
    -   Create Database & Role
    -   Copy connection string

---

### 2. Run the Development Server

Once the `.env` file is set up, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
