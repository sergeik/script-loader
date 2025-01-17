[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![chat][chat]][chat-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Script Loader</h1>
</div>

<h2 align=center>Purpose of fork</h2>
Current fork of script-loader project improves naming of evaled script.

Chrome Dev Tool with original **script-loader**:
![Chrome Dev Tool with original script-loader](https://raw.githubusercontent.com/sergeik/script-loader/master/assets/chrome-dev-tool-before.PNG)
 
Chrome Dev Tool with current **script-loader** fork:
![Chrome Dev Tool with updated script-loader](https://raw.githubusercontent.com/sergeik/script-loader/master/assets/chrome-dev-tool-after.PNG)


<h2 align="center">Install</h2>

```bash
npm install --save-dev sergeik/script-loader
```

<h2 align="center">Usage</h2>

Executes JS script once in global context.

> :warning: Doesn't work in NodeJS

### Config (recommended)

```js
import exec from 'script.exec.js';
```

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }
    ]
  }
}
```

### Inline

```js
import exec from 'script-loader!./script.js';
```

## Options

|                    Name                     |         Type          |     Default     | Description                                 |
| :-----------------------------------------: | :-------------------: | :-------------: | :------------------------------------------ |
|        **[`sourceMap`](#sourcemap)**        |      `{Boolean}`      |     `false`     | Enable/Disable Sourcemaps                   |
|        **[`rootFolders`](#rootFolders)**    |       `{String[]}`    |     `null`      | Root folders to remove from sourceUrl

### `sourceMap`

Type: `Boolean`
Default: `false`

To include source maps set the `sourceMap` option.

### `rootFolders`

Type: `String[]`
Default: null

List of root folders that should be removed from eval sourceURL property.


**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.script\.js$/,
        use: [
          {
            loader: 'script-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      }
    ]
  }
}
```



<h2 align="center">Maintainers</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">
        </br>
        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">
        </br>
        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">
        </br>
        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">
        </br>
        <a href="https://github.com/TheLarkInn">Sean Larkin</a>
      </td>
    </tr>
  <tbody>
</table>


[npm]: https://img.shields.io/npm/v/script-loader.svg
[npm-url]: https://npmjs.com/package/script-loader

[node]: https://img.shields.io/node/v/script-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack/script-loader.svg
[deps-url]: https://david-dm.org/webpack/script-loader

[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
