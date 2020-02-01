const dbConneciton = {
  development: process.env.DB_CONNECTION,
  test: process.env.DB_CONNECTION_TEST,
  staging: process.env.DB_CONNECTION,
  development: process.env.DB_CONNECTION
};

module.exports = dbConneciton
