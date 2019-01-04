require("@babel/register");
require("@babel/polyfill");
const { join } = require("path");

const ROOT = process.cwd();
const JEST_ENV = join(ROOT, "tests/__jest_env__");

module.exports = {
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupFiles: [join(JEST_ENV, "setup.js")],
  rootDir: join(JEST_ENV, "..", "..")
};
