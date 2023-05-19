# EPTI4ABOT Web Controller (Frontend)

[![.github/workflows/publish.yml](https://github.com/truc0/epti4abot-webcontroller-fronter/actions/workflows/publish.yml/badge.svg?branch=main&event=push)](https://github.com/truc0/epti4abot-webcontroller-fronter/actions/workflows/publish.yml)

This project aims at providing a easy-to-use controller interface to user.

## Usage

### Build

Configure `.env` file

```bash
cp .env.example .env
# setup your environment variables
```

Build the project

```bash
pnpm install  # install dependencies
pnpm run build
```

The result files will be saved to `dist/` folder.

### Development

Configure `.env` file

```bash
cp .env.example .env
# setup your environment variables
```

```bash
pnpm install  # install dependencies
pnpm run dev
```

## Roadmap

- [x] Manual Mode
  - [x] Simple Controller
  - [x] Joystick Controller
- [ ] Auto Navigation Mode
- [ ] About Page

## Demo

![Screenshot of index page of this app](./screenshot.png)

## Related Projects

- [EPTI4BOT project](https://github.com/hongfanmeng/epti4abot)
- [EPTI4ABOT Backend](TBA)
