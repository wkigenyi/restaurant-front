# The Restaurant App front end

The front end of the restaurant app is written in JavaScript (REACT)

## How to run locally

Clone this repo and install the dependencies by running:

### `yarn install`

Before running the app in dev mode make sure the backend is running on a port that is the same as as the on which the front end will run. For example you can run the backend on port 4000 and run the front end on the default port of 3000\

The repo for the backend is [https://github.com/wkigenyi/restaurants-backend](https://github.com/wkigenyi/restaurants-backend) and instructions to set it and included within the repo's readme.

Once the backend is running note, the port on which it is running for example 4000\
Ensure to set the project proxy to that server in package.json for example: "proxy":["http://localhost:4000"]("http://localhost:4000"),.

### `yarn start`

The command will start the frontend application on port 3000.\
The app can be accessed by pointing  the browser to ["http://localhost:3000"]("http://localhost:3000")
If port 3000 is not available for use:

### `yarn start -p <PORT>`

The command will start the frontend application on port 3000.\
The app can be accessed by pointing  the browser to ["http://localhost:<PORT>"]("http://localhost:<PORT>")

### `Adding A Restaurant`

The application has to main visible parts, the AppBar which has a button on the right to add a new restaurant and the main content area which show the restaurants that have been added to the database.

On each of the restaurants there buttons on which the user can click to delete or update that particular restaurant.
