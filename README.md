# zm-x-zimlet-template-default

The default starter template for [zimlet-cli](https://github.com/zimbra/zimlet-cli). It creates a Zimlet for the Zimbra Modern UI that adds a tab to the Email section, which opens a "Hello World" page.

## Requirements

- Node.js 24 (the version used by the template's CI)

## Usage

```bash
$ npm install -g @zimbra/zimlet-cli
$ zimlet create default my-zimlet
$ cd my-zimlet
$ npm install
$ npm start
```

`default` is a shortcut for `zimbra/zm-x-zimlet-template-default`. Only the contents of the `template/` folder are copied into the new project. Every `{{name}}` placeholder in them is replaced with the Zimlet name you pass to `zimlet create` (`my-zimlet` above).

Development server runs on port `8081`

## Commands

- `npm start`: Run a development, HMR server (`npm run watch` does the same)

- `npm run build`: Production-ready build

- `npm run lint`: Check JavaScript files using ESLint (`npm run lint:fix` also fixes what it can)

- `npm run package`: Package the zimlet for deployment to a Zimbra server. Run `npm run build` first

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `zimlet-cli`:

```bash
zimlet create username/repo my-project
```
