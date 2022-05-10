# Vite Resolve Bug

Minimal reproduction of [resolving issue](https://github.com/vitejs/vite/discussions/8082) when running vite.

To create this project, I used the following & then modified it for vue2:

```
npm create vite@latest vite-app -- --template vue-ts
```

## Reproduction

Run:

```bash
npm run dev
```

Result:

```
  vite v2.9.8 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 273ms.

The following dependencies are imported but could not be resolved:

  buefy/types/components (imported by [...]/vite-resolve-bug/src/components/HelloWorld.vue?id=0)

Are they installed?
```

It did work at least once before I added the `resolve.alias` section in _vite.config.ts_, but even when I remove it now it fails. I tried using `--force` to clear any cache, but that didn't seem to affect it.

So if you run it the first time and it works, try uncommenting the `resolve.alias` section in _vite.config.ts_ and running again.
