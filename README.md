This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🤖 Antigravity AI Chat Backup

This repository includes a fully preserved conversation history with the Antigravity AI assistant in the `gemini_chat_backup` folder. This allows you to instantly resume development on any machine exactly where you left off.

### How to Restore the AI Chat:
1. Clone this repository to your local machine.
2. Inside the project root, locate the `gemini_chat_backup` folder.
3. Copy the **contents** of that folder (or the folder itself if you renamed it to its Conversation ID).
4. Navigate to your local Antigravity memory directory: 
   `C:\Users\YOUR_USERNAME\.gemini\antigravity\brain\`
5. Paste the folder inside `brain\`. *(Note: The original Conversation ID for this chat is `b03f6d8e-0965-488d-8893-b08fc3d295e4`)*.
6. Open your Gemini interface, check your conversation history, and the AI will instantly have full memory and context of this entire project!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
