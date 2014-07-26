# node-include

Require local files relative to the root of your node project.

# usage

#### without include

```js
var foo = require('../../../path/to/foo');
```

#### with include

```js
var include = require('include');

var foo = include('path/to/foo');
```

# license
MIT