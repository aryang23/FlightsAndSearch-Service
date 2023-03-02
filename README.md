/
    - src/
        index.js //server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
    - tests/ [later]
    - static/
    - temp/


# Welcome to Flights Service

## Projects Setup
- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file and add the following environment variables
    ` PORT = 3000 `
- Inside the `src/config` folder, create a new file `config.json` and add the following piece of code

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_LOCAL",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
And Then execute

`npx sequelize db:migrate`

