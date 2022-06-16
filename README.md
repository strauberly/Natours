# natours

This README will serve as a dev journal as I work on this project.

This course project is created with MongoDB, Express, Node and other tools.
Created with starter files prepared by
[Jonas Schmedtmann](https://codingheroes.io/) as part of one of his courses.

I intend to apply some of what is learned here towards a new project built on my. Thank you for checking out what I am working on.

---

-16 June 2022-

- Began implementation of Stripe into the backend for card payment processing.

---

-15 June 2022-

- Email functionality in working order. Implemented utilizing SendInBlue.

---

-14 June 2022-

- Began lesson plan for email integration for users to reset their password and sign up but the solution from the program designer is to utilize send grid. It may be the only feasible option but I am going to spend some time looking elsewhere for a solution that provides the same functionality.

---

-13 June 2022-

- User can now update their profile image.

- Made use of multer and sharp to add the image name to form data after storing image in memory and resizing.

- Currently writes new file every time to file system. Creating a potential issue down the road. Future implementation should include deleting users old photo from filesystem.

- Implemented uploading and processing multiple images multiple images, utilized in our tours section.

---

-10 June 2022-

- Login,Logout, detail map and error rendering functional. Rebuilt repo in order to take into account ignoring large files as a result of our bundling.

- Created user account area with authentication.

- User can update some of their information.

- User can now update their password.

---

-8 June 2022-

- Login is currently functioning as intended once axios and show alert class aligned.

---

-7 June 2022-

- Was stuck at dead end of deprecated dependencies and bad examples but was finally able to get program bundled to index.js, and is currently functioning as intended.

---

-5 June 2022-

- User can now login and app will display a profile photo and log out button.

---

-3 June 2022-

- Utilizing leaflet to show locations a on a map.
- A user is now able to log into the api.
- Now sorting conditional rendering with pug to display a logout button and logged in users name and profile picture.
- Sorting through the spaghetti of third party dependencies and deprecated packages is greatly hampering forward momentum but is providing an excellent example of why to not use such practices.

---

-30 May 2022-

- Updated view controller to address fixed text bug

- Implemented a leaflet view of locations for each tour according to
  to application designers specifications.

Application was designed to use map box as googlemaps requires a credit card to verify a user. Designers solution was to use map box. This now follows the same procedures. A peer developer created the solution to implement leaflet instead.

Great example of the pitfalls of incorporating third party features, cool as they may be.

- Created route and template for user login

- Redundant verification of cookies being used for authentication

---

-29 May 2022-

- Implemented tour details template and loaded it with our backend data.

- Demonstrated exporting and importing pug files in order to keep code lean (see review card example)

- Implemented link for all tours to link to connect back to main page.

---

-26 May 2022-

- Began work extending base template into additional template sections. Began creating front end routes.

- Created overview and detail templates, corrected errors in legacy code.

---

-24 May 2022-

- Completed lecture on creating documentation with postman.
- Began implementation of pug for server side rendering.
- Created base template.

---

-23 May 2022-

- Implementation to prevent duplicate reviews.

- Implemented ability to search for tours within a specified range from a designated location. Utilized compass to visualize our results in order to determine if results are accurate.

- Implemented calculating distances with Geospatial aggregation.

---

-22 May 2022-

- instructors implementation for creating a new tour was not feasible with a local db and so had to go back and rework project to connect with remote resource.

- reviews stats recording number of reviews and averages now implemented.

---

-21 May 2022-

- Updated routers auth definitions.
- Imported dev data for users, reviews, and tours.
- Created compound indexes.

---

-20 May 2022-

- A review for a tour can now be created when a user is logged in.
- All reviews can be gathered.
- Calling all reviews now returns limited data, such as tour name, user name and the actual review.
- Reviews created through virtual populates.
- Implemented nested routes including for getting all reviews from a particular tour.
- Began building controller factory starting with DELETE functions.
- Controller factory implementations for CREATE and UPDATE
  -Implemented /me endpoint to provide data for currently logged in user.

---

-19 May 2022-

- Fixed middleware and application is functioning as intended again...

---

-11 May 2022-

- Completed lectures on data modelling with mongodb including relationships and patterns as well as references vs embedded.

- Improved on tour model with geospatial data. Utilized our script for re populating the entries to tours with updated geo spatial data.

- Modelled tour guides by having tours populate a a guide id when the tour is created.

- Created Review model.

---

-10 May 2022-

- User can now update their name and email.

- Course's implementation of deleting a users account is simply setting it to inactive so they can reactivate it and author specifically mentions having continued access to their information. I would argue that this is a dishonest model and deplorable. If someone asks to have their information deleted, it should be a simple matter of verifying their decision and implementing their will. Other practices are simply unacceptable.

- Application now allows a user to deactivate their account.

- JWT now sent as a cookie.

- Implemented rate limiter.

- Implemented helmet for http headers.

- Implemented packages to prevent mongo query injection and cross site scripting.

- Implemented package for param pollution.

---

-9 May 2022-

- Created new routes for forgot password and reset password.
  Forgot password does a search based on email submitted and if found posts a
  reset token with a time. Token is created in user model.

- Setup a mail trap account to catch email we send with the reset token to the user. User will then send patch request with token and if found and not expired will allow for password to be reset.

- We now get new jwt and password changed at field is updated.

- user can now change password if logged in

---

-7 May 2022-

Altered environment in postman to accept bearer tokens.

updated for roles and protecting routes by role.

Tested delete route and is currently functioning as intended....

Implemented json webtokens but still need to set up verification to logback back in based on user id and password.

---

-28 Apr 2022-

Implemented json webtokens but still need to set up verification to logback back in based on user id and password.

---

-27 Apr 2022-

Began working on Authentication, Authorization by creating user model
and an auth controller. Can successfully create a new user with specified properties.

Implemented bcrypt to salt and hash user passwords.

---

-26 Apr 2022-

Completed section on error handling however the instructor of course notes that their methods for handling uncaught exceptions is debatable so I wrote the code demonstrated for knowledge base and just commented it out.

I am thankful for the topic being discussed but also resentful of being taught things if they are not industry established best practices.

Moving on to security section.

---

-25 Apr 2022-

Discussed reporting errors based on production environment
or development environment.

Created mongoose error handlers for cast error and duplicate field error.

---

-23 Apr 2022-

Created new class in utl package for async catches and refactored for 404 error to be a global catch instead of constantly repeating.

---

-21 Apr 2022-

Created global error handler by creating an error object and an error controller. Discussed error handling with express.

---

-20 Apr 2022-

Added catch all, for other routes requested that we have not defined.

---

-17 Apr 2022-

Finished work on aggregation pipelines for now and went on to lectures for creating middleware with Mongoose, validators and virtual properties.

Next up will be error handling.

Course is now 50% complete.

---

-13 Apr 2022-

Began work on MongoDB aggregation pipeline. Super interesting and can't wait to learn more!

---

-12 Apr 2022-

Refactored project so that features are their own reusable class.

---

-11 Apr 2022-

Completed implementation of api features including sorting, limiting, pagination and aliasing.

Interesting topics that I am excited to use in future projects.

---

-10 Apr 2022-

Have began implementing api features such as filtering. To be followed with sorting, limiting, pagination, and aliasing.

---

-29 Mar 2022-

Finished fleshing out tour model and created a script for clearing contents and importing data. Fun exercise!

---

-21 Mar 2022-

Rebuilt CRUD with mongoose.

---

-20 Mar 2022-

Refactored code in oder to incorporate MVC architecture pattern.

Also went over creation of schema and model construnction with mongo.

---

-9 Mar 2022-

Completed intro to mongoDB and cinfigured environment to connect with application.

---

-7 Mar 2022-

Finished Express.js lectures with chaining multiple middleware, param middleware, serving static files, and environmnet configuration. Course is now focusing on mongoDB.

---

-3 Mar 2022-

Created user routes, went over mounting multiple routers, and refactored project for further seperation of controllers, routers, server file, and npm script.

---

-28 Feb 2022-

Completed beginning lectures on creating middleware with Express.js and implementing 3rd party middleware.

---

-27 Feb 2022-

Finished roughing out http methods and seperating out as routes. Next section of study will cover middleware.

---

-24 Feb 2022-

Started building out get and post requests. Very interesting comparing to building with Java SpringBoot.

---

-21 Feb 2022-

Class this evening was discussion of RESTful APIs. Next will begin the build starting with get requests.

---
