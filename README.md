This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🤖 Antigravity AI Chat Backup

This repository includes a fully preserved conversation history with the Antigravity AI assistant in the `gemini_chat_backup` folder. This allows you to instantly resume development on **any machine** exactly where you left off — with full AI memory intact.

### How to Restore the AI Chat on a New Machine:

**Step 1:** Clone this repository:
```bash
git clone https://github.com/RafiDevAI/Portfolioer.git
```

**Step 2:** Copy the main `.pb` memory file to the Antigravity conversations folder:
```
gemini_chat_backup/b03f6d8e-0965-488d-8893-b08fc3d295e4.pb
  → C:\Users\YOUR_USERNAME\.gemini\antigravity\conversations\
```

**Step 3:** Copy the rest of the chat backup to the Antigravity brain folder:
```
gemini_chat_backup/  (all contents EXCEPT the .pb file)
  → C:\Users\YOUR_USERNAME\.gemini\antigravity\brain\b03f6d8e-0965-488d-8893-b08fc3d295e4\
```

**Step 4:** Open the Antigravity (Gemini) interface. The conversation `b03f6d8e-0965-488d-8893-b08fc3d295e4` will appear in your history with full memory of everything we built together!

> **Note:** Replace `YOUR_USERNAME` with your actual Windows username (e.g. `ksa`).

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
