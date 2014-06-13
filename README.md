Spring MVC Base Project
-----------------------

This is a one handy seed project includes Spring MVC (with Spring Boot), Maven, Angular JS with both Java and Javascript tests.

![egemsoft-logo](http://egemsoft.net/images/logo.png)

##Install
Project has various dependencies managed through Maven, NPM and Bower. Luckily they have all connected in Maven with frontend-maven-plugin.

To install all dependencies and run tests run:
```
$ mvn install
```
This command builds the application with default dev profile.
There are two profiles that build cycles include: `dev` (development) and `prod` (production). Each profile has its own build scenarios.

To run with explicit profile run `mvn install -P dev|prod`.

**Build cycle for dev profile**

- Install Node and npm locally (If not installed)
- Install Node dependencies
  - npm runs `bower install` after dependency installation. See `package.json`
- Install Bower dependencies.
- Run Javascript tests and code coverage tool.
- Runs Java tests with surefire
- Compiles and builds WAR file.

**Build cycle for prod profile**
Difference between dev and prod profiles is, Javascript files are built in prod profile unlike dev. After running Javascript tests all javascript files are minified, concatenated, revved and prepared to the production, thanks to the various Grunt plugins. Please see the uild task in `Gruntfile.js`.
All the other steps applied here too.

##App Structure
```
 coverage/              - Code coverage results
 docs/
   javascript           - Javascript documentations created with `ngdoc`
   java                 - Java documentations
 src/
   main/
     java/
     resources/
     webapp/            - Web app source files
       fonts/
       images/
       scripts/
         controllers/   - Angular controller files - each controller in one file (HomeCtrl -> home.js)
         directives/    - Angular directive files
         filters/       - Angular filter files
         services       - Angular service and factory files
         app.js         - Main Angular module
       style/           - Stylesheets
       views/           - Angular JS partial views
   test/
     java/              - Java tests
     javascript/
       spec/            - Javascript unit tests tests are placed into relevant subdirectory
         controllers/
         directives/
         filters/
         services/
       karma.conf.js    - Karma configuration
 .bowerrc               - Bower directory configuration
 bower.json             - Bower configuration including dependencies
 Gruntfile.js           - Grunt tasks configuration
 package.json           - Node configuration including dependencies managed by npm
 pom.xml                - Maven configuration
```

##Run
Since this is a Spring Boot project it can be run with:
```
  mvn spring-boot:run
```

##Watch
With watch and connect plugins Javascript files can be watched and reloaded simultaneously when a Javascript fie is changed.
To activate watching run the command below after running application.
```grunt serve```

##Author
İsmail Demirbilek

##License
[MIT](http://opensource.org/licenses/MIT)