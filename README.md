This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[Launch in OpenFin](https://openfin.github.io/start/?manifest=https%3A%2F%2Flucid-ritchie-4ce046.netlify.app%2Fpublic.json)

It has been built to experiment optimizing performance in an OpenFin Platform.
## Getting Started

### Dev Mode
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Then run
```bash
openfin -l -c https://next-platform-omega.vercel.app/app.json
```
to launch the platform

The content runs from /pages/index.js

The custom window runs from /pages/platform-window.ts

the custom provider runs from /pages/platform-provider.ts

### To Test Performance

Dev mode is not optimized.

Generate a production build with

```bash
npm run build
npx http-server out -p 3000
```
Then launch with the openfin-cli

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Notes on OpenFin Platform optimizations.

- Only uses `next export` for static builds so windows are pre-rendered
- Leverages `next-pwa` to inject a caching service worker
- Has links from the platform provider to the platform window page so that it can start in "headless" mode and pre-fetch the window
- Not performance related, but uses `use-persisted-state` to keep state synchronized across multiple instances of platform windows
