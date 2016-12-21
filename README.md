This repo is all you need to develop web and mobile applications. We found the original repo was difficult and confusing when it came to adding support for more platforms. This structure will make it easier for you to reuse code and stay organized. 


## Quick Start

### Prerequisites
* `git` [Download git](https://git-scm.com/downloads)
* `node` and `npm` ([Nodejs.org/download/current](https://nodejs.org/en/download/current/) includes npm 3.10.3)
* `ionic-cli` and `cordova`
**Make sure you have Node version >= 6.0 and NPM >= 3**

> Clone this Repo, install frontend and backend applications with npm

> Start backend api service in one window

> Start frontend dev-server in separate window

```bash
# clone this repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/strictd/angular2-ionic2-webpack.git

# change directory to this repo
cd angular2-ionic2-webpack

# install the frontend repo with npm
npm install

# change to backend repo
cd backend

# install the backend repo with npm
npm install

# start backend node service
node server.js

# if you're in China use cnpm
# https://github.com/cnpm/cnpm
```

> Open second cmd window

```bash
# change directory to this repo
cd angular2-ionic2-webpack

# start the server
npm start
```
go to [http://0.0.0.0:8080](http://0.0.0.0:8080) or [http://localhost:8080](http://localhost:8080) in your browser



# Table of Contents
* [How to Initialize App](#how-to-initialize-app)
    * [Setup Dependencies](#setup-dependencies)
    * [Node Server Startup](#node-server-startup)
    * [Angular2 Startup](#angular2-startup)
    * [Ionic2 Startup](#ionic2-startup)
    * [Development Startup](#development-setup)
    * [Build Project](#build-project)
    * [Documentation](#documentation)
    * [File Structure](#file-structure)
* [Testing](#testing)
* [Frequently asked questions](#faq)
* [TypeScript](#typescript)
* [License](#license)

---------------------------------

# How to Initialize App

## Setup Dependencies

> What you need to run this app:
* Ensure you're running Node (`v6.x.x`+) and NPM (`3.x.x`+)
* Check versions with ```node -v``` and ```npm -v```
* If you are behind a version try ```npm update -g npm``` to update npm. 
* For node go to [nodejs.org](https://nodejs.org/)
* Ionic-CLI and Cordova, install using ```npm install -g ionic cordova```


## Git clone repository, change to subdirectory
```sh
git clone https://github.com/strictd/angular2-ionic2-webpack.git
cd angular2-ionic2-webpack
```

## Install NPM modules

Using the command prompt enter:
* from your cloned angular2-ionic2-webpack/ directory, install npm modules
```sh
npm install
```
* navigate to backend/ directory, install npm modules, return to main directory
```sh
cd backend/
npm install
cd ..
```

## Install of Ionic and Cordova

* make sure you have [nodejs.org](https://nodejs.org/) installed
* Install Cordova and Ionic-CLI
```sh
npm install -g cordova ionic
```

* Install Ionic iOS Platform and Plugins
```sh
ionic state restore
```


---------------------------------

# Node Server Setup
### Copy backend/ sample.env to .env and edit global environment variables in .env
* Mac OSX
```sh
cp backend/sample.env backend/.env
vi backend/.env
```
* Windows
```sh
copy backend/sample.env backend/.env
notepad backend/.env
```


# Node Server Startup
* Run backend/ nodejs server
```sh
node backend/server.js
```


---------------------------------

# Config Setting Utility
Setting       | Default
------------- | -------------
api server    | localhost:3080
debugging     | On
### Reset Defaults
```sh
gulp configs
```

### Additional gulp config switches
* --release

> Sets compile settings for production
```sh
gulp configs --release
```

* --host <api url>

> Sets Madame Server / Socket Host in config.app.ts
```sh
gulp configs --host localhost:3080
```

---------------------------------

# Angular2 Startup
```sh
npm start
```
* go to [http://localhost:8080](http://localhost:8080) in your browser.


# Ionic2 Startup
```sh
npm run ionic
```
* [http://localhost:8100](http://localhost:8100) will automatically open in your default browser.


---------------------------------

# Development Startup
### Here are all the steps for starting the project
Basic commands to run your project are:

1. start backend: backend/ ```node server.js``` 

2. start angular: ```npm start```

3. start ionic: ```npm run ionic```

Then navigate to: 
Webapp: ```localhost:8080```
Ionic: ```localhost:8100```


Once you have started the webpack you will see the webpack-dashboard.
Changes to file in the front end will automatically be built and shown in the webpack-dashboard. 
Changes to the backend wont take effect and you will have to restart server.js to show changes.


---------------------------------

# Build Project

## Angular2 Build
To Compile everything into dist/ for distro
```npm run build```

## Ionic2 Build
Compiles everything into www/
```npm run ionic-build```

*ionic-build has same Switches as ionic-serve

---------------------------------
# Documentation

You can generate api docs (using [TypeDoc](http://typedoc.io/)) for your code with the following:

* `npm run docs`

---------------------------------
# File Structure
We use the standard component based approach. We combine files in the following areas; backend server, browser views, mobile views, and app services. Within the browser and mobile view folders we group singleton components and combined components that make up modules. 
```
angular2-ionic2-webpack/
 ├──backend/                    * Serverside Application, self-contained
 │   ├──db/                       * holds db connection files
 │   │   └──db_knex_default_mysql.js * default database connection library
 │   │
 │   ├──modules/                  * backend modules, restful routes and functionality
 │   │   ├──login/                  * backend login module pack
 │   │   │   ├──crypto-imap.js         * crypto library for imap authentication
 │   │   │   ├──crypto-pdkdf2.js       * crypto library for pdkdf encryption
 │   │   │   └──login.restful.js       * login restful endpoints
 │   │   │
 │   │   └──permission/              * backend permission module pack
 │   │       ├──permission.model.js    * permission functionality
 │   │       └──permission.restful.js  * permission restful endpoints
 │   │
 │   ├──.gitignore                * ignore files for backend directory
 │   ├──README.md                 * Server side Readme 
 │   ├──catchError.js             * Sockets error catching
 │   ├──package.json              * what npm uses to manage it's dependencies
 │   ├──sample.env                * example .env file, needs to be copied to .env and modified 
 │   └──server.js                 * node backend starting point, `node server.js`
 │
 │
 ├──src/                        * our source files that will be compiled to javascript
 │   ├──browser/                  * browser based view files for angular2 layouts
 │   │   ├──app/                    * WebApp: folder
 │   │   │   ├──app.component.ts      * a simple version of our App component components
 │   │   │   ├──app.module.ts         * root AppModule component
 │   │   │   ├──app.routing.ts        * specify root routing instructions
 │   │   │   ├──main.dev.ts           * development bootstraping
 │   │   │   ├──main.prod.ts          * production bootstraping
 │   │   │   ├──polyfills.ts          * our polyfills file
 │   │   │   └──vendor.ts             * our vendor file, add third party libraries here
 │   │   │
 │   │   │ 
 │   │   ├──assets/                 * any files you want copied to the public www directory
 │   │   │   ├──img/                  * public facing images
 │   │   │   ├──index.html            * index.html for public facing page
 │   │   │   └──service-worker.js     * placeholder for upcoming service-workers 
 │   │   │
 │   │   │ 
 │   │   ├──components/             * single components not part of a module
 │   │   │   ├──home/                 * sample homepage site view component
 │   │   │   │   ├──home.css            * homepage css styles
 │   │   │   │   ├──home.html           * homepage angular2 html
 │   │   │   │   └──home.ts             * homepage view component
 │   │   │   │
 │   │   │   └──login/                * sample login page view component
 │   │   │       ├──login.css           * login css styles
 │   │   │       ├──login.html          * login angular html
 │   │   │       └──login.ts            * homepage view component
 │   │   │
 │   │   │ 
 │   │   ├──modules/                * grouped components part of a module
 │   │   │   ├──headers               * sample module for headers
 │   │   │   │   ├──header              * sample header component
 │   │   │   │   │   ├──header.html
 │   │   │   │   │   └──header.ts
 │   │   │   │   │
 │   │   │   │   ├──navbar            * sample navbar component
 │   │   │   │   │   ├──navbar.css
 │   │   │   │   │   ├──navbar.html 
 │   │   │   │   │   └──navbar.ts
 │   │   │   │   │
 │   │   │   │   └──headers.module.ts * module imports and exports header and navbar
 │   │   │   │
 │   │   │   └──shared.module.ts    * global shared modules  
 │   │   │
 │   │   └──auth-guard.js         * login systems @CanActivate browser authguard
 │   │
 │   │
 │   ├──desktop/                * future home for angular-electron integration
 │   │
 │   │
 │   ├──mobile/                 * mobile view files for ionic2-angular2 layouts
 │   │   ├──app/                  * IonicApp folder
 │   │   │   ├──app.component.ts    * a simple version of our App component components
 │   │   │   ├──app.module.ts       * root AppModule component for Ionic
 │   │   │   └──main.prod.ts        * production bootstraping
 │   │   │
 │   │   ├──assets/               * any files you want copied to the public www directory
 │   │   │   ├──icon
 │   │   │   ├──manifest.json
 │   │   │   └──service-worker.js
 │   │   │
 │   │   ├──pages/                * ionic view components
 │   │   │   ├──about               * sample ionic tabs project about page
 │   │   │   ├──contact             * sample ionic tabs project contact page
 │   │   │   ├──home                * sample ionic tabs project home page
 │   │   │   └──tabs                * sample ionic tabs project entry page
 │   │   │
 │   │   ├──theme/                * mobile interface themes
 │   │   │   ├──app.core.scss
 │   │   │   ├──app.ios.scss
 │   │   │   ├──app.md.scss
 │   │   │   ├──app.variables.scss
 │   │   │   ├──app.wp.scss
 │   │   │   └──variables.scss 
 │   │   │
 │   │   └──index.html            * index.html for public facing page
 │   │
 │   │ 
 │   ├──services/               * services for retrieving api data from backend server
 │   │   ├──api.ts              * sample api angular2 service
 │   │   └──login-service.ts    * login service for angular2 auth-guard
 │   │
 │   └──style/                  * global style libraries
 │       └──app.scss              * global app styles
 │
 │
 ├──tsconfig/                   * tsconfig base files, copied to tsconfig.json with gulp
 │   ├──browser.json              * tsconfig file adjusted for angular2 compiles
 │   └──ionic.json                * tsconfig file adjusted for ionic2 compiles
 │
 │
 ├──.gitignore                  * ignore files for git repo
 ├──.htaccess                   * mod-rewrite instructions for Apache 
 ├──CHANGELOG.md                * list of changes made to repo
 ├──LICENSE                     * MIT License text
 ├──README.md                   * this file
 ├──config.app.ts               * angular2 @Injectable ConfigApp, provides global config options
 ├──config.xml                  * ionic2 project description file
 ├──gulpfile.js                 * worker to modify configs, hooks for ionic
 ├──ionic-copy.config.js        * ionic-app-scripts copy updated config file
 ├──ionic.config.json           * ionic2 configuration
 ├──ionic.project               * ionic2 project info
 ├──karma-shim.js               * karam browser shim for unit tests
 ├──karma.conf.js               * karma config for our unit tests
 ├──package.json                * what npm uses to manage it's dependencies
 ├──protractor.conf.js          * protractor config for our end-to-end tests
 ├──tsconfig.json               * config that webpack uses for typescript
 ├──tslint.json                 * typescript lint config
 ├──typedoc.json                * typescript documentation generator
 ├──web.config                  * IIS url rewrite instructions (http://www.iis.net/downloads/microsoft/url-rewrite)
 └──webpack.config.js           * webpack browser angular2 configuration file
```
# Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

#### 2. End-to-End Tests (aka. e2e, integration)

* single run:
  * in a tab, *if not already running!*: `npm start` and check out `localhost:8080` or whichever port you're using.
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * you can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## Production

To build your application, run:

* `npm run build`

You can now go to `/dist` and deploy that to your server!

## Documentation

You can generate api docs (using [TypeDoc](http://typedoc.org/)) for your code with the following:

* `npm run docs`

# FAQ

#### Do I need to add script / link tags into index.html ?

No, Webpack will add all the needed Javascript bundles as script tags and all the CSS files as link tags. The advantage is that you don't need to modify the index.html every time you build your solution to update the hashes.

#### How to include external angular 2 libraries ?

It's simple, just install the lib via npm and import it in your code when you need it. Don't forget that you need to configure some external libs in the [bootstrap](https://github.com/preboot/angular2-webpack/blob/master/src/main.ts) of your application.

#### How to include external css files such as bootstrap.css ?

Just install the lib and import the css files in [vendor.ts](https://github.com/preboot/angular2-webpack/blob/master/src/vendor.ts). For example this is how to do it with bootstrap:

```sh
npm install bootstrap@next --save
```

And in [vendor.ts](https://github.com/preboot/angular2-webpack/blob/master/src/vendor.ts) add the following:

```ts
import 'bootstrap/dist/css/bootstrap.css';
```

# TypeScript

> To take full advantage of TypeScript with autocomplete you would have to use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 2.0.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor

We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 11+](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

# License

[MIT](/LICENSE)
