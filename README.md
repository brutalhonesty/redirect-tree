Redirect Tree
=============

Web application for visualizing redirects of given sites.

Version
-------
0.0.1

Setup
-----

```bash
git clone <repo url>
cd /path/to/repo

# Install dependencies, database structure and upload folders
npm install

# Client-side dependencies
bower install

# Development
grunt serve

# Production
grunt
mv ./dist /path/to/production/location && cd /path/to/production/location

# Use Node to run
PORT=9000 node server.js

# Or use forever
PORT=9000 forever start server.js
```

TODO
----
Check out the markdown TODO [list](TODO.md)

License
-------

[MIT](https://tldrlegal.com/license/mit-license)