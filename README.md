# Welcome to Remix + Vite + Vercel!

```shell
npx create-remix@latest --template https://github.com/huijiewei/remix-vite-vercel-template
```

or

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhuijiewei%2Fremix-vite-vercel-template&project-name=remix-vite-vercel-template&repository-name=remix-vite-vercel)

---

## Vercel Project Settings

Change `Build and Output Settings`

override `Output Directory`

```
build/client
```

> init deploy will be fail, because vercel default use nodejs 18.x, you can goto project settings to set node.js version to 20.x, then goto Deployments tab choose fail deploy and redeploy it.

Document: [vercel-serverless-adapter](https://github.com/huijiewei/resolid-remix-plugins?tab=readme-ov-file#vercel-serverless-adapter)

---

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

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
