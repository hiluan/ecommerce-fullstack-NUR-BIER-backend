// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

const path = require("path");

module.exports = () => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(__dirname, "..", ".tmp/data.db"),
    },
    useNullAsDefault: true,
  },
});
