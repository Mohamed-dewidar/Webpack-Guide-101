# WebPack

[Article](https://medium.com/swlh/understand-basic-webpack-from-scratch-6a1976565ae0)

## Debug Node script

to debug node script in chrome, use this command inside `package.json scripts`

```javascript
scripts:{
    "debugthis": "node --inspect --inspect-brk ./src/index.js"
}
```

- `--inspect` this flag allow to inspect the node.js application in chrome dev tools.

- `--inspect-brk` breaks the code at the first line

## Watch Mode in WebPack

to add watch mode to WebPack

```javascript
scripts:{
   "dev": "npm run webpack -- --mode development --watch",
}
```

- The first `--` signals to npm that the options following it are meant for the `webpack` command, not for npm. tools.

## Passing variables to your configuration

```bash
npm run webpack -- --env.mode development
```

setting `--env.mode` the value of the mode variable to `development`

### using env in Webpack Configuration

**webpack.config.js**

```javascript
module.exports = env => {
  conole.log(env);

  return {
    mode: env.mode,
    // other configuration...
  };
};
```

Using this we can apply certain plugins or rules depending on the mode
