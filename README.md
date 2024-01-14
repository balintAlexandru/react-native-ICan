<img src="https://raw.githubusercontent.com/balintAlexandru/react-native-ICan/main/documentation/images/logo.png" alt="logo" width="90" height="90">

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

### A.Categories Endpoints

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

### B.Tasks Endpoints

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

### Collections (Tables)

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

### Relationships

1. Category to Tasks (One-to-Many):

   - In the tasks collection, the categoryId field is a reference to the \_id field in the categories collection.
   - This establishes a one-to-many relationship, where one category can have multiple tasks, but each task belongs to only one category.
   - In terms of Mongoose schema, it's implemented using the ref property in the taskSchema:

2. Tasks to Category (Many-to-One):
   - From a tasks perspective, there is a many-to-one relationship, as multiple tasks can belong to the same category.
   - The relationship is expressed by referencing the Category model in the ref property.

## 5. App workflow

### STEP 1

![Part1](https://raw.githubusercontent.com/balintAlexandru/react-native-ICan/main/documentation/gifs/part1.gif)

When the app is opened, you will be redirected to a screen where you should enter your username. This name will be saved in a reducer that will persist as long as the app is installed. The next time you enter the app, this screen will no longer be shown because you have already set the username.

### STEP 2

![Part2](https://raw.githubusercontent.com/balintAlexandru/react-native-ICan/main/documentation/gifs/part2.gif)

Now, we need to create a category for our future tasks. Click on the plus button, and a modal will open. In this modal, you will find an input for the name of the category and a special input for the category icon. For icons, I used an external library called rn-emoji-keyboard. After you complete all the fields, the category will be created. It should be mentioned that all fields have validation applied to them.

### STEP 3

![Part3](https://raw.githubusercontent.com/balintAlexandru/react-native-ICan/main/documentation/gifs/part3.gif)

Now that the category is created, simply press on the card and create the task according to the category. To create a task, you need to add a name, and optionally, a time. I added the time field because you can start the chronometer and know how long you worked on that task.The category and task card settings will be present in the following step.

### STEP 4

![Part4](https://raw.githubusercontent.com/balintAlexandru/react-native-ICan/main/documentation/gifs/part4.gif)

The category can be edited and deleted. On the main screen, there is an information card that will display the total number of tasks from all categories and how many are completed. This information is represented with a circular progress bar. Tasks can be edited or deleted. Additionally, for cards with a time field, there is an extra button that allows you to start the chronometer. In the example, I set the chronometer for 1 second. After the time is elapsed, the checkbox will be marked as true, indicating that the task is done.

## 6. Future Improvements

A future improvement for this app could include the implementation of user authentication and push notifications. User authentication would enhance personalization and security, allowing users to have their own accounts with personalized task data. Push notifications can be used to alert users when the chronometer stop and when a task's set time has finished, providing timely reminders and updates on task progress. This would enhance the overall user experience and engagement with the app.
