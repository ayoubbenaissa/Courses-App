# Courses App (Frontend)

this is a React app for managing courses

## running code
- Pre-requirements :building_construction: :
    - make sure you have [**nodejs**](https://nodejs.org/en/download) installed in your machine (ideally Long Time Support version)
    - make sure you also have [npm](https://learnubuntu.com/install-npm/)
- create a new `.env` file to manage [ENV variables](https://dev.to/henriqueinonhe/frontend-environment-variables-what-why-and-how-1c1)
- Install dependencies:
    - make sure you are under "frontend" folder
    - run `npm install` which will install all app deps
    - run `npm start` to start the frontend server (by default it will start on port 3000)

## app routes/endpoints:

- **Home:** simple home page
- **Courses:** page listing all existing courses, with the possibility of:
    - creating a new course
    - updating or deleting an existing course
- **Courses/:CourseId:** endpoint to update or delete an existing course
    - note: this endpoint would only work when you navigate to it from courses list
- **New-Course:** endpoint to create a new course by filling a form



### state management:
since this was a small and quick app, I did not use neither Redux or Context API for state managment. <br>
I used "useState" hook as well as [react-signals](https://www.npmjs.com/package/@preact/signals-react)


## File structure
- #### `public` - This holds all of our static files
- #### `src`
    - #### `api` - This folder holds API calls to backend (for this app there is only one file here)
    - #### `assets` - This folder contains mainly used icon within the app
    - #### `components` - This folder holds all of the different components that will make up our FE app
    - #### `pages` - contains files presenting pages of the apps (all courses, update course ....)
    - #### `state-signals` - contains files reflecting state management logic
    - #### `styles` - CSS files
    - #### `types` - for defining types
    - #### `App.*` - This is what renders all of our browser routes and different views
    - #### `index.*` - This is what renders the react app by rendering App
- #### `package.json` - Defines npm behaviors and packages for the client
- #### `Dockerfile` - Dockerfile for containarization logic
- #### `README` - This file :grinning:


**Note:**
This app can surely be improved, specially in terms of reusability :smiling_face_with_tear:
>I still have some minor open TODOs & also should have added unit tests at least :thumbsup:
>I can also add better form validation :thumbsup:

