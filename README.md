Spring MVC Angular JS Seed Project [![Build Status](https://travis-ci.org/egemsoft/spring-mvc-angular.svg?branch=master)](https://travis-ci.org/egemsoft/spring-mvc-angular)
-----------------------

This is a one handy seed project includes Spring Framework, Spring MVC, Maven, Angular JS with both Java and Javascript tests.

![egemsoft-logo](http://egemsoft.net/images/logo.png)

##Install
Project has various dependencies managed through Maven, NPM and Bower. Luckily they have all connected in Maven with frontend-maven-plugin.

To install all dependencies and run tests run:
```
$ mvn install
```
This command builds the application with default dev profile.
There are two profiles that build cycles include: `dev` (development) and `prod` (production). Each profile has its own build scenarios.

To install with explicit profile run `mvn install -P dev|prod`.

####Build cycle for dev profile

- Install Node and npm locally (If not installed).
- Install Node dependencies.
  - npm runs `bower install` after dependency installation. See `package.json`.
- Install Bower dependencies.
- Run Javascript tests and code coverage tool.
- Run Java tests with surefire.
- Compile and build WAR file.

####Build cycle for prod profile  

Difference between dev and prod profiles is, Javascript files are **built** in prod profile unlike dev. After running Javascript tests all javascript files are minified, concatenated, revved and prepared to the production, thanks to the various Grunt plugins. Please see the `build` task in `Gruntfile.js`.  
All the other steps are applied here too.

##App Structure
```
 coverage/              - Code coverage results
 docs/
   javascript           - Javascript documentations created with ngdoc
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
         services/      - Angular service and factory files
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
Project can be run with Jetty:
```
$ mvn jetty:run
```

##Watch
With watch and connect plugins of grunt, web app files (js, html) can be watched and reloaded simultaneously when a source fie is changed.
To activate watching run the command below after running application.  
```
$ grunt serve
```

##Author
İsmail Demirbilek ([@dbtek](http://twitter.com/dbtek))  

##License
[MIT](http://opensource.org/licenses/MIT)

##Credits

- [Spring](http://spring.io)
- [Mustache.java](https://github.com/spullara/mustache.java)
- [Mustache Spring View](https://github.com/sps/mustache-spring-view)
- [Maven Frontend Plugin](https://github.com/eirslett/frontend-maven-plugin)
- [Angular JS](http://angularjs.org)
- [Bower](http://bower.io)
- [Grunt](http://gruntjs.com) and its awesome plugins.
- [Phantom JS](http://phantomjs.org/)
- [Karma](http://karma-runner.github.io/0.12/index.html) and inside it Jasmine, İstanbul.
