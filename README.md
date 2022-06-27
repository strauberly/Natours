<p align="center">
  <img src="public/img/logo-green.png" />
</p>

---

## Natours is an e-commerce website application built for a fictional company as a portfolio piece from a course I took on full-stack development. It is a demonstratable example of fullstack development knowledge for consideration by potential employers.

&nbsp;

## It is available at https://natours-adams.herokuapp.com.

&nbsp;

## It is dynamically populated through an API from a database I created and allows a user to view information for the tours offered by the company, create an updatable account, purchase a tour, and view their itineraries.

&nbsp;

## The API has additional features built in for administrative purposes used during development and will be implemented in more depth at a later time.

&nbsp;

## Please see the table of contents below for more detailed information about the application and thank you for checking out this project!

## superduper.natours@manyme.com

Programmed by: Adam Straub

Product owner and materials supplied by: Jonas Schmedtmann

---

&nbsp;

# Table of Contents

[I. Use Instructions](#i-use-instructions)

[II. Tech Stack Description](#ii-tech-stack-description)

[III. Package Layout](#iii-package-layout)

[IV. Future Implementation Plans](#iv-future-implementation-plans)

---

&nbsp;

# I. Use Instructions

Upon landing the application loading a user may click on a tour card to view more detailed information about a tour. If a user would like to book a tour, they will either login to their account or create an account if they do not currently have one.

They will then be allowed to click a book tour button that will then direct them to our checkout endpoint and complete the stripe checkout form. They will then be directed back to the main page.

If a user creates an account they have the ability to view and update their information through an icon link created at the top of the page. From the landing page of their account they can also view their trips.

If you believe these instructions could use more clarification please feel free to reach out and I will look into a more thorough explanation in order to help prevent any confusion superduper.natours@manyme.com.

[Table of Contents](#table-of-contents)

---

&nbsp;

# II. Tech Stack Description

| Tech Component         | Use                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| node.js                | Server side scripting and web server creation.                                                        |
| express.js             | API construction.                                                                                     |
| mongoose.js            | MongoDB object modeling for Node.js.                                                                  |
| mongodb atlas          | Hosted remote database.                                                                               |
| pug                    | Server side rendering for user interface.                                                             |
| stripe                 | Payment service.                                                                                      |
| sendinblue             | Used to exchange transactional emails with customers.                                                 |
| heroku                 | Hosts our production ready application.                                                               |
| express mongo sanitize | Aids in preventing mongo injection queries.                                                           |
| express rate limit     | Limits repeated requests to public APIs and/or endpoints.                                             |
| babel polyfill         | Backwards browser compatibility                                                                       |
| axios                  | Promise based HTTP client for Node.js.                                                                |
| bcrypt.js              | Hashed and salted password encryption.                                                                |
| compression            | Middleware used to compress response bodies.                                                          |
| cookie parser          | Parse HTTP request cookies. Used as part of dynamic logging during development.                       |
| cors                   | Cross Origin Resource Sharing middleware.                                                             |
| dotenv                 | Used in securing environment variables before deployment to Heroku.                                   |
| helmet                 | HTTP header customization .                                                                           |
| hpp                    | Protects against HTTP parameter pollution.                                                            |
| jsonwebtoken           | Allows customization of jwt usage.                                                                    |
| morgan                 | Request logging utilized in development.                                                              |
| terser                 | Allows for multiple input files, used in uploading multiple images as part of creating a tour object. |
| multer                 | Adds a body object and a file or files object to the request object.                                  |
| sharp                  | Image processing for Node.js                                                                          |
| validator              | Validation for mongodb document fields.                                                               |
| xss-clean              | User request sanitizer.                                                                               |

[Table of Contents](#table-of-contents)

---

&nbsp;

# III. Package Layout

[Table of Contents](#table-of-contents)

---

&nbsp;

# IV. Future Implementation Plans

[Table of Contents](#table-of-contents)

---
