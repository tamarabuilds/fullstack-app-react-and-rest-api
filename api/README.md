# rest-api-sql
Learn more about the developer on <a href="https://www.linkedin.com/in/tamarabuilds/" target="_blank">LinkedIn</a>

Unit 09 project for the Full Stack JavaScript Techdegree. This is a REST API to let users create, list, update, and delete items from a fictional school database.

![Screenshot 2023-11-09 at 3 26 48 PM](https://github.com/tamarabuilds/rest-api-sql/assets/98510821/f07a57af-e3c4-4012-a9e9-6b653bb9c8fe)
(Image of Postman, used to confirm the API functionality)

## How It's Made

Tech used: HTML, CSS, JavaScript, Node.js, Express, SQLite, and the SQL ORM Sequelize.

Install my-project with npm

```bash
  npm install
  npm start
```

## Optimizations

 * Thoughrough comments on new concepts, such as authenticate User middleware.


## Lessons Learned

 * Define model associations.
 * Set up for testing.
 * Hashing passwords for security.
 * User authenticaion middleware.
 * Testing APIs with Postman
 * Ensuring emails are unique and a valid format.
 * Filtering out properties from a response.


## Extra Features

* Email address is valid and unique.
* Updated /api/users, /api/courses, and /api/course routes to filter unnecessary fields.
* Ensure only currently authenticated user is the owner of courses to update or delete.
* Throw 400 HTTP status code for SequelizeUniqueConstraintError errors.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)
