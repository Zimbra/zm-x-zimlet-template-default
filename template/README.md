# {{ name }}

A Zimbra Modern UI Zimlet. It adds a tab to the Email section that opens a "Hello World" page.

## Project structure

- `src/index.js`: Zimlet entry point; registers the tab and its page in the Modern UI.
- `src/components/`: UI components (`EmailTabItem` is the tab, `App` is the page).
- `src/intl/en_US.json`: Zimlet label, description and the translated texts.
- `src/constants/`, `src/enhancers/`: shared constant and the translation wrapper used by components.

## CLI Commands

- `npm start`: Start the development server with hot reload at `https://localhost:8081`

- `npm run watch`: Same as `npm start`

- `npm run build`: Create the production build (minified) in `build/`

- `npm run package`: Zip the contents of `build/` for deployment to a Zimbra server (`pkg/{{ name }}.zip`). Run `npm run build` first

- `npm run lint`: Check the code in `src/` with ESLint

- `npm run lint:fix`: Run `lint` and automatically fix what it can

- `npm run security:audit`: Fail if installed dependencies have known vulnerabilities of moderate severity or higher. Used by CI

Run `npm install` first to install the dependencies.

If the project is a git repository, `npm install` also sets up commit hooks (husky). They lint the staged files in `src/` and block the commit if there are errors. They also add the branch name, for example a Jira key, to the start of each commit message.

The development server uses a self-signed certificate, so open `https://localhost:8081/index.js` once in your browser and accept it.

For detailed explanation on how things work, checkout read our [documentation](https://zimbra.github.io/zimlet-cli).
