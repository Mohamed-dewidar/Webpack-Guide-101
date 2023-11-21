# WebPack

## Some Articles for read

- [Understand basic Webpack from scratch](https://medium.com/swlh/understand-basic-webpack-from-scratch-6a1976565ae0)
- [Introduction to Module Bundling with Webpack](https://medium.com/spidernitt/introduction-to-module-bundling-with-webpack-d7a44d23dd95)
- [Dependency Graph](https://webpack.js.org/concepts/dependency-graph/)

## Webpack dependency graph

A representation of how different modules in your JavaScript application depend on each other. It helps Webpack understand the relationships between various files and modules.

### Modules

- In Webpack, a module can be any file or resource that contains code. This includes JavaScript files, CSS files, images, and more.
- Each module is treated as a separate unit of code that can be imported or required by other modules

### Dependencies

- When one module imports or requires another module, a dependency relationship is established. The importing module depends on the functionality provided by the imported module.
- Webpack identifies and tracks these dependencies to build a comprehensive understanding of your project's structure

### Entry Point

- The entry point is the starting module or file specified in your Webpack configuration. It serves as the root of the dependency graph.

### Traversal and Resolution

- Webpack traverses the code in the entry point file and identifies import or require statements.
- For each imported or required module, Webpack recursively analyzes that module's code, identifying its dependencies.

### Building the Graph

- As Webpack traverses the code and resolves dependencies, it builds a graph of the entire project's module relationships.
- Each node in the graph represents a module, and the edges represent dependencies between modules.

### Chunking

- Webpack uses the dependency graph to determine how to split your code into `chunks`. Chunks are bundles of code that can be loaded independently.

## Tree Shaking

- Tree shaking is a term commonly used in the JavaScript context for dead-code elimination.
- It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files

### Articles

- [Tree Shaking Webpack](https://webpack.js.org/guides/tree-shaking/#root)
- [Tree Shaking MDN](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
- [JavaScript tree shaking, like a pro](https://bluepnume.medium.com/javascript-tree-shaking-like-a-pro-7bf96e139eb7)

### Tree Shaking Process

- ree shaking works by analyzing the dependency graph of your application to determine which modules and functions are actually being used.

### ES6 Module Syntax

- Tree shaking is most effective when you use the `ES6` module syntax (`import` and `export`)
- This syntax provides clear and static import/export statements, making it easier for Webpack to analyze the code.

### Marking Unused Code

- The ES6 module system allows Webpack to statically analyze the code and mark which parts are used and which are not at build time

### Dead Code Elimination

- During the optimization phase, Webpack can then eliminate the dead or unused code, resulting in a smaller bundle size.

## Watch Mode in WebPack

to add watch mode to WebPack

```javascript
scripts:{
   "dev": "npm run webpack -- --mode development --watch",
}
```

- The first `--` signals to npm that the options following it are meant for the `webpack` command, not for npm. tools.

## Webpack Dev Server

Is a development server built on express for webpack that provides live reloading.

```bash
npm i webpack-dev-sever --save-dev
or
yarn add -D webpack-dev-server
```

## Debug Node script

to debug node script in chrome, use this command inside `package.json scripts`

```javascript
scripts:{
    "debugthis": "node --inspect --inspect-brk ./src/index.js"
}
```

- `--inspect` this flag allow to inspect the node.js application in chrome dev tools.

- `--inspect-brk` breaks the code at the first line
