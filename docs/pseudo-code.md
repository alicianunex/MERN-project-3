## PSEUDO CODE ⚒

    ❎  Create a node project X
    ❎  Set node version in a .nvmrc file X
    ❎  Ignore node_modules in a .gitignore file X
    ❎  Create an index file in the root folder X
    ❎  Install the following dependencies:

       💠 Express
       💠 Body parser
       💠 Mongoose
       💠 Winston
       💠 Nodemon

    🔹 On the index file initialise an express server X
    🔹 Import `body-parser` and tell express to use it to deserialise JSON X
    🔹 Create a folder called `middleware` X
    🔹 Create a logger using winston and plug it to the server as middleware X
    🔹 Create a folder called router and inside create a filename with the name of the resource X

#### _Getting started_

    🟢 Write one route and call a controller of that resource X
    🟢 Create a folder called controller and inside create a filename with the name of the resource X
    🟢 Create an async function that have request & response as parameter and deal with the petition
    🟢 Create a folder called model and inside create a filename with the name of the resource
    🟢 Inside of the resource model file, import mongoose, create an schema and then a Model
    🟢 Create an async function that deal with the read/write to database.
    🟢 Repeat for all endpoints these steps.
