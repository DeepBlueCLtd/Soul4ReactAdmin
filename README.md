# Soul for React Admin

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Cloning the repo

Run the command below to clone the projects repository, this will clone both the projects repository and the `soul` submodule repository.

```
 git clone --recurse-submodules https://github.com/DeepBlueCLtd/Soul4ReactAdmin.git
```

## Running the soul wrapper

1.  Copy the `chinook.db` database file from the `db` folder to the `soul/core` folder

    ```
     cp db/chinook.db soul/core
    ```

2.  Create a `.env` file in the `soul/core` folder and duplicate the sample environment varialbes

    ```
    cd soul/core
    cp .env.sample .env
    ```

3.  Edit the environment variables

    - Edit the Database name and add your frontend applications URL to the CORS white list

      ```
       nano .env

       DB=chinook.db
       CORS_ORIGIN_WHITELIST=http://localhost:5173
      ```

4.  Install the `npm` packages

    ```
     npm install
    ```

5.  Run the core API

    ```
     npm run dev
    ```

## Running the frontend

1. Create a `.env` file and duplicate the sample environment varialbes

   ```
   cd client
   cp .env.sample .env
   ```

2. Install the npm packages

   ```
    npm install
   ```

3. Run the client application

   ```
    npm run dev
   ```

## Deploying the project

1. Go to the `/soul/core` folder and create a folder named `_extensions` and create a file named `api.js` in the folder.

   ```
   cd soul/core
   md _extensions
   cd _extensions && touch api.js
   ```

2. Copy and paste the code below to the `api.js` file

   ```js
   const path = require("path");
   const express = require("express");

   const reactAdminClient = {
     method: "GET",
     path: "/api/client",
     handler: (req, res, db) => {
       const clientPath = path.join(__dirname, "dist", "index.html");
       res.app.use(express.static(path.join(__dirname, "dist")));
       res.sendFile(path.join(clientPath));
     },
   };

   module.exports = {
     reactAdminClient,
   };
   ```

3. Run the `pwd`command in the `_extensions` folder and copy the absolute path of the folder, and add it to your .env file

   ```js
   nano .env
   EXTENSIONS=/absolute/path/to/_extensions
   ```

4. Go to the client folder and build the project

   ```
   cd ../../../client
   yarn build
   ```

5. After finisshing the build, copy the `dist` folder and paste it to the `soul/core/_extensions` folder

   ```
   cp -R dist ../soul/core/_extensions
   ```

6. Go to the `soul/core` folder and run the project

   ```
   cd ../soul/core
   npm run dev
   ```

7. Test if the project is working in your browser

   ```
   http://localhost:8000/api/client
   ```

## Testing the providers

**Test the `getList`provider**

1. Click the `Genres` tab
2. This will trigger the `getList` provider and will fetch list of data from the `Soul` API.

**Test the `getOne` provider**

1. Click the `Genres` tab
2. Click the first row of the `Genres` table
3. This will trigger the `getOne` provider and will fetch a single record

**Test the `getMany` provider**

1. Click the `Invoice Items` tab

2. When you click the tab, the `<ReferenceField />` component will trigger the `getMany` provider and it will fetch list of `Tracks` by using the `TrackIds`

   ```
   http://localhost:8000/api/tables/tracks/rows/1,2,3,4,5,6
   ```

**Test the getManyReference provider**

1. Click the `Albums` tab
2. Click the first row of the Albums table
3. When you click the first row, the `<ReferenceManyField />` component will trigger the `getManyReference` provider and it will fetch list of `Tracks` that belong to the current `Album`

**Test the `update` provider**

1. Click the `Genre` tab
2. Click the `Edit` button from the first row
3. When you click the button you will be redirected to the edit form
4. Edit your data and click the save button
5. When you click the save button, react admin will trigger the `update` provider and a `PUT` request will be sent to the `Soul` API

**Test the `updateMany` provider**

1. Click the `Invoice Item` tab
2. Select multiple records by using the checkbox buttons
3. When you select the items you will get a `Make Free` button in the top right cornor
4. Click the `Make Free` button
5. When you click the `Make Free` button, react admin will trigger the `updateMany` provider and a bulk update request will be sent to the `Soul` API

**Test the `create` provider**

1. Click the `Genre` tab
2. Click the `Create` button which exists in the top right corner
3. When you click the button you will be redirected to the create form
4. Add your data and click the save button
5. When you click the save button, react admin will trigger the `create` provider and a `POST` request will be sent to the `Soul` API

**Test the `deleteMany` provider**

1. Click the `Invoice Item` tab
2. Select one of the rows by clicking the checkbox
3. When you click the checkbox button you will get a Delete button in the top right cornor
4. Click the Delete button
5. When you click the Delete button, react admin will trigger the `deleteMany` provider and a `DELETE` request will be sent to the `Soul` API.
