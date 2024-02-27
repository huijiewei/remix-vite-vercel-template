# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode at local:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

## Deployment to vercel

Document: [vercel-serverless-adapter](https://github.com/huijiewei/resolid-remix-plugins?tab=readme-ov-file#vercel-serverless-adapter)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhuijiewei%2Fremix-vite-vercel-template&project-name=remix-vite-vercel-template&repository-name=remix-vite-vercel)



### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`