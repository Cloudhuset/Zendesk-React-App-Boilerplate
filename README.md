# Boilerplate for Zendesk App Framework v2 using React

## Includes

* React
* Webpack
* Babel
* SASS compiler
* CSS modules
* Jest
* zafClient

## How to use it

Start by cloning this repository with `git clone https://github.com/Cloudhuset/Zendesk-React-App-Boilerplate.git`

### Commands

Install all node modules before running any commands since some commands might require a specific node module.
Note that yarn can be replaced with npm by writing `npm run` instead.

#### yarn build

This command can be used to build to build the application to the `dist/` folder using the production env.

#### yarn build-dev

This command can be used to build to build the application to the `dist/` folder using the development env.

#### yarn dev

This command watches for file changes and when a file is changed builds to the `dist/` folder using the development env.

#### yarn package

This command packages the `dist/` folder for upload to Zendesk in a `.zip` file.
Note you must run `yarn build` at least once before using this command.

#### yarn build:package

This command uses npm-run-all to run both the `yarn build` and the `yarn package` command with one command.

#### yarn serve

This command uses [ZCLI](https://developer.zendesk.com/documentation/apps/getting-started/using-zcli/) to serve the content to your Zendesk directly from your computer

Read more about ZCLI Here: <https://developer.zendesk.com/documentation/apps/getting-started/using-zcli/>

#### yarn clean

This command uses rimraf to remove the last `.zip` from the `dist/` folder.

#### yarn test

This command uses Jest to run tests. All tests are placed in the `src/__tests__` folder.

## Do you have any ideas

Please let us know by making an issue here on github. Also feel free to contribute to the development, by making a pull request.

License: MIT
