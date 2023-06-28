const path = require('path');
module.exports = {
  entry: "./lib/index.js",

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, './lib/UMD'),

    library: {
      type: "umd",

      name: "fingerprint",
    },

    // prevent error: `Uncaught ReferenceError: self is not define`

    globalObject: "this",
  },
};
