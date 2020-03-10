# Linting and Formatting Module

Inside this module you will find a few things you may not have encountered before

`eslintrc.js` - a file for configuring the npm package/vs-code integration `eslint`
`.prettierrc` - a file for configuring the npm pacakge/vs-code integration `prettier`

## Installation

First, you will need to clone the repository and install the npm dependencies:

`git clone git@github.com:willbenmitch/linting.git`

`cd linting && npm install`

Once the project is cloned and the npm packages are installed, you will need ot install the vs-code extensions for es-lint and prettier.

[es-lint vs-code installation](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - note that you have already installed the `es-lint` dependencies through npm above, and you just want to follow the instructions to install the vs-code extension.

[prettier vs-code installation](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - note that you have already installed the `prettier` dependencies through npm above, and you just want to follow the instructions to install the vs-code extension.

Once the integrations are installed, you should restart vs-code, and open up `src/app.js`. You should notice a few lines that have been highlighted with either red (error) or yellow (warning). Hover over these lines to see what the issues are, and if you can correct them.

Feel free to play around with the rule sets, and think about why these rules may or may not be important. Keep in mind that some rules are purely stylistic, and it can be beneficial to limit rules to the ones that drive the most value for you (or your team).

## [Eslint](https://eslint.org/)

es-lint is an npm package that allows for configuring a set of rules that your team can use to assist with programming in ECMAscript. Through this use of this tool, your team can align on best practices, and choose whether to ignore, warn, or error if these practices are not followed. Examples included in this module are listed below, but you can check out the full rule set [here](https://eslint.org/docs/rules/).

```js
{
    "rules": {
        "no-var": 2, // error if var is used (use let or const instead)
        "strict": 2, //  use-strict enabled
        "camelcase": 1, // warn if objects are not named using camelcase
        "prefer-const": 1 // warn if let is used where const would work (ie. if you use let, but do not reassign)
    }
}
```

## [Prettier](https://prettier.io/)

Prettier is an npm package that allows for configuring a set of formatting rules for your team, so that everyone's code looks similar (reducing changes solely due to formatting). This module uses the options outlined below, but you can check out a full set of rules [here]().

```js
{
    "tabWidth": 4, // force tabWidth to 4 spaces
    "semi": false, // remove unnecessary semi-colons
    "printWidth": 160, // specify a max line width (160 chars)
    "trailingComma": "all", // place a trailing comma on lines that will support it
    "singleQuote": true // use single quotes instead of double quotes
}
```

In order to enforce these rules, we use the vs-code integration (or a different IDE if your team uses it). And specify the worksapces settings inside `.vscode/settings.json`

```js
{
    "editor.defaultFormatter": "esbenp.prettier-vscode", // tell the editor which formatter to use
    "editor.formatOnSave": true // auto-format on file save
}
```

# Inherited Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
