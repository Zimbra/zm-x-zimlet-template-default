# {{ name }}

A Zimbra Modern UI Zimlet. It adds a tab to the Email section that opens a "Hello World" page.

## Project structure

- `src/index.js`: Zimlet entry point; registers the tab and its page in the Modern UI.
- `src/components/`: UI components (`EmailTabItem` is the tab, `App` is the page).
- `src/intl/`: Zimlet label, description and the translated texts, one JSON file per language (see below).
- `src/constants/`, `src/enhancers/`: shared constant and the translation wrapper used by components.

### `src/intl/en_US.json`

- `zimlet.label` and `zimlet.description`: the Zimlet's display name and description. `npm run package` writes them into the Zimlet descriptor, so they are required. Users see them in Settings under Add-ons (Zimlets), and administrators see them in the admin console.
- `{{ name }}.*`: texts used by the components through `<Text id="{{ name }}.key" />`. `menuItem` is the label of the tab in the Email section and `helloWorld` is the text on the page it opens. Add your own keys here.

### Adding other languages

To translate the Zimlet, add one file per language to `src/intl/`, named after the language's locale code, for example `de.json`, `fr_FR.json` or `ja.json`. Use the same keys as `en_US.json` with translated values. `npm run package` includes every `.json` file in that folder. A file whose name does not match a locale code is not loaded.

To get the locale codes for the languages your server offers, an administrator can run the commands below. If you don't have access to the server, ask your administrator for the codes.

```bash
su - zimbra
zmsoap -z -t account -m admin@$(zmhostname) GetAvailableLocalesRequest
```

The `id` of each language in the output is its locale code. Use it as the file name, for example `ja` gives `src/intl/ja.json`.

Add `zimlet.label` and `zimlet.description` to each translated file as well. The admin console reads them from the packaged files, and a language without them shows no usable label or description.

## CLI Commands

- `npm start`: Start the development server with hot reload at `https://localhost:8081`

- `npm run watch`: Same as `npm start`

- `npm run build`: Create the production build (minified) in `build/`

- `npm run package`: Zip the contents of `build/` for deployment to a Zimbra server (`pkg/{{ name }}.zip`). Run `npm run build` first

- `npm run lint`: Check the code in `src/` with ESLint

- `npm run lint:fix`: Run `lint` and automatically fix what it can

Run `npm install` first to install the dependencies.

If the project is a git repository, `npm install` also sets up commit hooks (husky). They lint the staged files in `src/` and block the commit if there are errors. They also add the branch name, for example a Jira key, to the start of each commit message.

The development server uses a self-signed certificate, so open `https://localhost:8081/index.js` once in your browser and accept it.

For detailed explanation on how things work, checkout read our [documentation](https://zimbra.github.io/zimlet-cli).
