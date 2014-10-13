#Zetta repl addon

This is a simple addon module to add some experimental repl capabilities to Zetta.

Simply

```bash
npm install zetta-repl-addon
```

and then add to your code.

```javascript
var zetta = require('zetta');
var repl = require('zetta-repl-addon');

var app = zetta();
app
  .listen(1337);

repl(app);
```

This will allow for extra repl functionality via the zetta cli.
