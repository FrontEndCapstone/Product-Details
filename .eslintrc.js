module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["react", "prettier"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true,
    "mongo": true,
    "commonjs": true,
    "prototypejs": true
  },
  "rules": {
    "class-methods-use-this": 0,
    "max-len": ["error", 80],
    "prettier/prettier": "error",
    "no-console": "off",
    "prefer-destructuring": ["error", {"object": false, "array": false}],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["database/**", "test/**"], "optionalDependencies": false, "peerDependencies": false}],
    "no-unused-vars": ["error", {"vars": "local", "args": "all", "varsIgnorePattern": "^_"}],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
};