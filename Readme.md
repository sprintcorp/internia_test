## Installation Process for Employee application

## Backend setup with laravel

### commands

step 1 : Navigate into the root folder of backend via any CLI (command line interface) of your choice.
step 2: Run command `composer install` to install required dependencies needed for the projects into a vendor folder from the composer.json file
step 3 : Manually create a database with the name : employee_api before by visiting phpmyadmin from your pc `http://localhost/phpmyadmin/`
Step 4: Navigate into the .env file in order to setup your connection parameters.
step 5: After creating the database run `php artisan migrate` to run the migration files and creates database tables
step 6: Run the following command `php artisan serve` which will serves the project on any available port on you r PC usuall port 8000 as default but could be served on other ports depending on the inavailability of the port 8000.

## Frontend setup with VueJs

## Project setup

step 1 : Navigate into the root folder of frontend via any CLI (command line interface) of your choice.
step 2 : Run `npm install` to install node modules from package.json.
step 3: Navigate into the project env.js file to change the `BASE_URL` of the project to the backend base url your back end is running on in order to help communication between the front end and backend.
step 4 : Run `npm run serve` to start the project which will be serve on port 8080 depending on the availability of thee port on default else will ;look for an available close port to run on

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
