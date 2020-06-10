## Installation Process for Employee application



### commands

step 1 : Navigate into the root folder of backend via any CLI (command line interface) of your choice.<br />
step 2: Run command `composer install` to install required dependencies needed for the projects into a vendor folder from the composer.json file<br />
step 3 : Manually create a database with the name : employee_api before by visiting phpmyadmin from your pc `http://localhost/phpmyadmin/`<br />
Step 4: Navigate into the .env file in order to setup your connection parameters.<br />
step 5: After creating the database run `php artisan migrate` to run the migration files and creates database tables<br />
step 6: Run the following command `php artisan serve` which will serves the project on any available port on you r PC usuall port 8000 as default but could be served on other ports depending on the inavailability of the port 8000.<br />
step 7 : Run `npm install` to install node modules from package.json.<br/>
step 8: Navigate into the project env.js located in resource/js/env.js file to change the `BASE_URL` of the project to the backend base url your back end is running on in order to help communication between the front end and backend.<br/>
step 4 : Run `npm run watch` to start the project which will be serve. <br/>

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
