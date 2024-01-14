<img src="https://raw.githubusercontent.com/balintAlexandru/react-native-ICan/main/documentation/images/logo.png" alt="logo" width="70" height="70">

# Todo full stack application

I've developed a practical ToDo app using React Native with an Express backend, powered by MongoDB. The main goals are to elevate my technical skills and streamline daily task management. React Native in the frontend ensures a user-friendly interface, while the Express backend, coupled with MongoDB, guarantees seamless functionality. Notable features include efficient task handling. This project goes beyond coding; it's a practical solution to simplify daily life, one task at a time.

# Development

## 1. Figma

Even for personal projects, using Figma can offer significant benefits. While collaborative features are advantageous for team projects, Figma also provides a user-friendly interface, real-time design feedback, and efficient iteration for individual designers, enhancing the overall design process.

[View Design](https://www.figma.com/file/n43uR0SS3ohuGEAcIXaCzo/ICan?type=design&node-id=0%3A1&mode=design&t=rBzWhxIKlJZaYfT2-1)

## 2. Tech Stack

- React Native: Cross-platform mobile app framework using JavaScript and React for iOS and Android.
- Express: Minimal Node.js framework for building robust and scalable web applications.
- MongoDB: NoSQL database storing data in JSON-like documents, providing flexibility and scalability.
- Figma: Collaborative design tool for creating, testing, and sharing designs within a team.
- Axios: JavaScript library for making HTTP requests, facilitating communication with backend APIs.
- Postman: API development tool simplifying the testing, sharing, and documentation of APIs.
- Redux Toolkit: Official collection of tools to streamline and enhance state management in React applications.

## 3. Project Structure

### A.Frontend

- **components**: Reusable UI components.
- **constants**: Application-wide constants and configurations.
- **helper**: Utility functions and helper modules.
- **navigation**: Navigation-related components and configuration.
- **redux**: Redux actions, reducers, and store configuration.
- **axios**: Custom CRUD requests using Axios.
- **screens**: Individual app screens and their components.

### B.Backend

- **controllers**: Route controllers handling business logic.
- **models**: Database models and schema definitions.
- **routes**: Express route definitions.

## 4. API and Data

### API Endpoints

#### A.Categories Endpoints

1. **GET /api/categories/**

   - _Purpose_: Retrieve all categories.
   - _Description_: This endpoint returns a list of all existing categories.

2. **POST /api/categories/**

   - _Purpose_: Create a new category.
   - _Description_: Use this endpoint to add a new category to the system.

3. **DELETE /api/categories/:id**

   - _Purpose_: Delete a category.
   - _Description_: Deletes the category with the specified ID.

4. **PATCH /api/categories/:id**
   - _Purpose_: Update a category.
   - _Description_: Update the details of the category with the specified ID.

#### B.Tasks Endpoints

1. **GET /api/tasks/category/:id**

   - _Purpose_: Retrieve all tasks of a specific category.
   - _Description_: Fetches a list of tasks belonging to the category identified by the provided ID.

2. **GET /api/tasks/**

   - _Purpose_: Retrieve all tasks.
   - _Description_: Returns a list of all tasks in the system.

3. **POST /api/tasks/:id**

   - _Purpose_: Create a new task.
   - _Description_: Adds a new task associated with the specified category ID.

4. **DELETE /api/tasks/:id**

   - _Purpose_: Delete a task.
   - _Description_: Removes the task with the specified ID.

5. **DELETE /api/tasks/all/:id**

   - _Purpose_: Delete all tasks of a category.
   - _Description_: Deletes all tasks associated with the specified category ID.

6. **PATCH /api/tasks/:id**
   - _Purpose_: Update a task.
   - _Description_: Updates the details of the task with the specified ID.

### Database Schema

#### Collections (Tables)

1. Categories

   - _Fields_:
     - **\_id** (MongoDB generated unique identifier)
     - **name** (String) - Name of the category

2. Tasks
   - _Fields_:
     - **\_id** (MongoDB generated unique identifier)
     - **name** (String) - Name of the task
     - **categoryId** (ObjectId) - Reference to the category to which the task belongs
     - **time** (Object) - Duration of the task (hours and minutes)
     - **completed** (Boolean) - Indicate whether the task is completed or not.

#### Relationships

1. Category to Tasks (One-to-Many):

   - In the tasks collection, the categoryId field is a reference to the \_id field in the categories collection.
   - This establishes a one-to-many relationship, where one category can have multiple tasks, but each task belongs to only one category.
   - In terms of Mongoose schema, it's implemented using the ref property in the taskSchema:

2. Tasks to Category (Many-to-One):
   - From a tasks perspective, there is a many-to-one relationship, as multiple tasks can belong to the same category.
   - The relationship is expressed by referencing the Category model in the ref property.

## 5. App workflow

### STEP 1

<img src="https://raw.githubusercontent.com/balintAlexandru/react-native-ICan/main/documentation/gifs/part1.gif" alt="Nume Descriptiv" width="auto" height="200">

When the app is opened, you will be redirected to a screen where you should enter your username. This name will be saved in a reducer that will persist as long as the app is installed. The next time you enter the app, this screen will no longer be shown because you have already set the username.
