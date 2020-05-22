## Vue Class Store - Demos

> Vue Class Store demos for Vue 2, Vue 3 and Nuxt

<p align="center">
  <img src="./docs/logo.png">
</p>

## Abstract

This repo provides demos for [Vue Class Store](https://github.com/davestewart/vue-class-store) for Vue 2, Vue 3 and Nuxt.

Currently, only the Nuxt Demo will run on Code Sandbox (all run locally; I'm investigating):

- https://codesandbox.io/s/github/davestewart/vue-class-store-demos/tree/master/nuxt

Each of the demos shows core Vue Class Store functionality in comparison to alternate state management functionality:

Class Store:

- [Basic Class Store](vue-2/src/examples/class-store/basic)
- [Inline Class Store](vue-2/src/examples/class-store/inline)
- [Class Store with Inheritance](vue-2/src/examples/class-store/inherit)
- [Global Class Store](vue-2/src/examples/class-store/global)

Alternatives (installed on Vue 2 demo only):

- [Vue Component](vue-2/src/examples/other/vue-component)
- [Vue Model](vue-2/src/examples/other/vue-model)
- [Vuex](vue-2/src/examples/other/vuex)


## Setup

To install and run, call these NPM scripts from the root folder:

```
# install all demo dependencies
yarn install-demos

# run demos
yarn vue-2
yarn vue-3
yarn nuxt
```

Note, you can also use `npm *`, though the Vue Class Store is set up to use Yarn. 

## Demos

Each demo example uses a single methodology to model a rectangle with the following common functionality:

- Width and height props / parameters
- Computed / getter area property
- A watch on the area property
- A logs property and log method
- A randomize method

Look in the `<demo>/src/examples/*` folder to compare the code, or open the debugger Sources panel to see it in action.

Make sure to check both the view and the model files within each!

## Development

### Getting started

If you want to develop the Vue Class Store source, follow these steps:

#### Common folder

Decide upon, or create a common parent folder:

```
mkdir VueClassStore
cd VueClassStore
```

#### Source

Clone, install and link the `vue-class-store` source:

```bash
git clone https://github.com/davestewart/vue-class-store.git
cd vue-class-store
yarn install
yarn link
```

Compile the source for the Vue version of the package you want to work on:

```
# check out the correct branch
git checkout master # or git checkout feature/vue-3

# install the dependencies
yarn install

# build and watch the source
yarn dev
```

#### Demos

Back in the parent folder, clone and install the `vue-class-store-demos` repository (this repo):

```
git clone https://github.com/davestewart/vue-class-store-demos.git
cd vue-class-store-demos
yarn install-demos
```

You will then need to `yarn link` the local folders:

```bash
yarn link-source
```

Finally, run the demo you want to work on:

```
yarn vue-2 # or your chosen version
```


### A note about local development and symlinks

In order for Vue Class Store to work correctly, the *package* Vue and the *project* Vue must be the **same** Vue.

Because of Node's module resolution rules, if you symlink the package rather than NPM installing it, Node will load two different Vues for the project and package.

To fix this, you need to tell the project's webpack setup to use **only** the project's Vue: 

```js
// vue.config.js
const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
    config.resolve.alias.set('vue$', path.resolve(__dirname, 'node_modules/vue/'))
  }
}
```

This is already set up in each of the demos, but good to know.
