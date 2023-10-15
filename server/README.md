# Courses App (Backend)

this is a NodeJS app for managing courses

## running code
- Pre-requirements :building_construction: :
    - make sure you have [**nodejs**](https://nodejs.org/en/download) installed in your machine (ideally Long Time Support version)
    - make sure you also have [npm](https://learnubuntu.com/install-npm/)
- create a new `.env` file to manage [ENV variables](https://dev.to/henriqueinonhe/frontend-environment-variables-what-why-and-how-1c1)
- Install dependencies:
    - make sure you are under "server" folder
    - run `npm install` which will install all app deps
    - run `npm start` to start the backend server (by default it will start on port 5000)

## CRUD operation:
since the backend is mainly concerned about managing courses, so all calls go to "/courses" endpoint

- **Create:** creates a new course based on given input (which should match a specific Schema)
- **Read:** reads/gets either:
    - all courses
    - a specific course
- **Update:** updates a course given its id & the new course content
- **Delete:** deletes a course given its id

## File structure
- #### `src`
    - #### `models` - This folder files defining Mongoose Schemas
    - #### `routes` - This folder files scoped for routes logic definition
- #### `package.json` - Defines npm behaviors and packages for the client
- #### `Dockerfile` - Dockerfile for containarization logic
- #### `README` - This file :grinning:

**Note:**
This app can surely be improved, specially in terms of validation :smiling_face_with_tear:
>I still have some minor open TODOs & also should have added unit tests at least :thumbsup:

