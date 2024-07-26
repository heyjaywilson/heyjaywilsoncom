# HeyJayWilson.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/9224fd16-1a0c-4da8-acd2-d2fa06123dc0/deploy-status)](https://app.netlify.com/sites/lucent-dieffenbachia-7af5bb/deploys)

## Built With

- [11ty](https://www.11ty.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Netlify](https://netlify.com)

## Commands

| Command             | Action             |
| :------------------ | :----------------- |
| `npm run dev` | Builds and runs 11ty server and recompiles Tailwind file |
| `npm run dev:tailwind` | Builds tailwind file |
| `npm run dev:11ty` | Builds and runs an 11ty server to hot reload |
| `npm run build` | Builds tailwind and site |
| `npm run build:tailwind` | Recompiles tailwind file |
| `npm run build:11ty` | Builds site |

## Useful things to know

- Template language is [Liquid](https://liquidjs.com/tutorials/intro-to-liquid.html)

## File structure

```text
├── _data/
├── _includes/
│   └── layouts/
├── _scripts/
├── src/
│   ├── archive/
│   ├── assets/
│   │   ├── css/
│   │   └── images/
│   ├── blog/ #contains posts
│   └── work/ #contains work experience
├── .eleventy.js
├── README.md
├── netlify.toml
├── package.json
└── tailwind.config.json
```