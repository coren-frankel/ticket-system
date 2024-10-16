This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The particular template configuration was created with:

```bash
npx create-next-app ticket-system --app --src-dir --use-pnpm --eslint --ts
✔ Would you like to use Tailwind CSS? … No / Yes # Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes # No
```

Upon completion add the supabase CLI as a Dev Dependency:

```bash
cd ticket-system
pnpm add -D supabase
```

Then we initiated a local supabase instance:

```bash
npx supabase init
Generate VS Code settings for Deno? [y/N] y
Generated VS Code settings in .vscode/settings.json. Please install the recommended extension!
Finished supabase init.
```

## Starting (or restarting) a local Supabase instance

Initiate the local docker network of supabase services from the newly created `supabase` directory within the project root:

```bash
cd supabase
npx supabase start
```

From the same directory you can put the local supabase instance in sleep mode use:

```bash
npx supabase stop
```

## Reseting the local Supabase instance

Starting with the accomponaying repository at Chapter 4, the `package.json` now contains a supabase reset script:

```bash
pnpm reset
```

## Post-Template Packages

The supabase js client library and complementary packages are added:

```bash
cd ..
pnpm install @supabase/supabase-js @supabase/ssr
```

## Generating Types for TypeScript

You only need to run the following command in
your project folder (this is where we ran npx supabase init previously):
```bash
npx supabase gen types --local --schema public > supabase.ts
```

If you want types for a project based on supabase.com, follow these steps to get a supabase.ts file:
> I. Go to [https://supabase.com/dashboard/account/tokens](https://supabase.com/dashboard/account/tokens) and create
an access token.
II. Run npx supabase login. You’ll be asked for the access token you just generated.
After pressing Enter, it will tell you that the login process has succeeded.
III. Now, open your project via supabase.com; you’ll see a link in your browser that
looks like `https://supabase.com/dashboard/project/YOUR_PROJECT_
ID/...`. You’ll also find the same project ID as part of your API URL in the Settings |
API section. Copy this project ID.
IV. Generate your custom supabase.ts file by running `npx supabase gen types --schema public --project-id YOUR_PROJECT_ID > supabase.ts`

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
