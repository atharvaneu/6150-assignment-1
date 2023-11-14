## Assignment 8
Create CRUD application using Node, Express, and MongoDB.
___

### FS:

- `src/index.js`  : starting point of the application
- `src/app.js`    : creation of the express app
- `src/routers`   : contains routing methods for the user operations
- `src/models`    : contains the `mongoose` schema for the `User` module
- `src/db`        : contains `mongoose.js` which is responsible for connecting with database

___

### How to start up the application?
1. Clone repo and `cd` into assignment-8
```
git clone git@github.com:atharvaneu/6150-assignment-1.git
cd 6150-assignment-1/assignment-8
```

2. Start Express.js server
```
npm run start:dev
```

3. Start MongoDB docker image (Pull docker image for mongo if not already using `docker pull mongo`)
  - to create and name a new container
  ```
  docker run -p 27017:27017 --name drag_mdb mongo
  ```

  - to restart exisiting container
  ```
  docker restart drag_mdb
  ```

4. Test APIs in Postman

___

### APIs

##### [POST] Create a new user
> ```
> /user/create
> ```
> Sample req.body:
> ```
>{
>    "fullName": "Jane Doe",
>    "email": "jane@email.com",
>    "password": "wqewqewqewqeqwiurio"
>}
> ```

##### [PATCH] Edit/update a user (provide email id as req.body)
> ```
> /user/edit
> ```
> Sample req.body:
> ```
>{
>   "filter": {
>       "email": "jane@email.com"
>   },
>   "update": {
>       "fullName": "Jane Doe Edited"
>   }
>}
> ```

##### [DELETE] Delete a user (provide email id as req.body)
> ```
> /user/delete
> ```
> Sample req.body:
> ```
>{
>   "email": "jane@email.com"
>}
> ```

##### [GET] Get all users
> ```
> /user/getAll
> ```
