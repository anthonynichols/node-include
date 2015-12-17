# node-include

Require local files relative to the root of your node project.

# install

npm install include

# usage

```js
var include = require('include')
```

#### before

```js
var foo = require('../../../path/to/foo');
```

#### with include

```js
var foo = include('path/to/foo');
```

# license
MIT