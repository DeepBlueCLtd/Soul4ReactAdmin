# Soul for React Admin

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Cloning the repo

Run the command below to clone the projects repository, this will clone both the projects repository and the `soul` submodule repository.

```
 git clone --recurse-submodules git@github.com:DeepBlueCLtd/Soul4ReactAdmin.git
```

## Running the soul wrapper

1. Copy the `chinook.db` database file to the core folder

   ```
    cp chinook.db soul/core
   ```

2. Create a `.env` file and duplicate the sample environment varialbes

   ```
   cd soul/core
   cp .env.sample .env
   ```

3. Edit the environment variables

   - Edit the Database name

     ```
     nano .env
     DB=chinook.db
     ```

   - Add your frontend applications URL to the CORS white list

     ```
     nano .env
     CORS_ORIGIN_WHITELIST=http://localhost:5173
     ```

4. Install the `npm` packages

   ```
   cd soul/core && npm i
   ```

5. Run the core API

   ```
   cd soul/core && npm run dev
   ```

## Running the frontend

1. Create a `.env` file and duplicate the sample environment varialbes

   ```
   cd client
   cp .env.sample .env
   ```

2. Install the npm packages

   ```
   cd client && npm i
   ```

3. Run the client application

   ```
   cd client && npm run dev
   ```
