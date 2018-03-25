# zimlet-default-template

## Documentation
- This is the default template for [zimlet-cli](https://github.com/zimbra/zimlet-cli).

## Usage

``` bash
$ npm install -g zimlet-cli
$ zimlet create zimbra/zm-x-zimlet-template-default my-zimlet
$ cd my-zimlet
$ npm install
$ npm start
```

Development server runs on port `8081`

## Commands

- `npm start`: Run a development, HMR server

- `npm run build`: Production-ready build

- `npm run package`: Pass JavaScript files using ESLint

- `npm run package`: Package the zimlet deployment to a zimbra server

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `zimlet-cli`:

``` bash
zimlet create username/repo my-project
```