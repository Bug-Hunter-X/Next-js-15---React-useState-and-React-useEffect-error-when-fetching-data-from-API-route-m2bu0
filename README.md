# Next.js 15 - React.useState and React.useEffect error when fetching data from API route

This repository demonstrates a bug in Next.js 15 where using `React.useState` and `React.useEffect` in a page component that fetches data from an API route can throw an error. The error message is often unhelpful and may be misleading.  This issue seems to only appear in specific scenarios involving data fetching and component lifecycle.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.

You should see an error in your browser's console, and the page may not render correctly.

## Solution

The solution involves using the `Suspense` component which allows you to handle loading states gracefully.