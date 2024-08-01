# Task Manager Application

## Overview

This is a simple full-stack task management application that allows users to create, update, and delete tasks. Tasks have a title, description, and status (e.g., "To Do," "In Progress," "Done"). Users can view a list of tasks and filter them by status.

## Features

- Create, update, and delete tasks.
- Filter tasks by status.
- Responsive design for both desktop and mobile devices.

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Setup Instructions

### Frontend

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager/frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

   The frontend should now be running at `http://localhost:3000`.

### Backend

1. **Navigate to the Backend Directory**

   ```bash
   cd ../backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up the Database**

   Ensure you have MongoDB installed and running locally. You can use MongoDB Atlas if you prefer a cloud database. Update the MongoDB connection string in `src/server.js` if necessary.

4. **Start the Server**

   ```bash
   npm start
   ```

   The backend API should now be running at `http://localhost:4000`.

### Testing

1. **Navigate to the Backend Directory**

   ```bash
   cd backend
   ```

2. **Run Tests**

   ```bash
   npm test
   ```

   This will execute the unit tests for the API.

## Additional Documentation

- **Frontend Components:**
  - `TaskForm.js`: Form for creating new tasks.
  - `TaskList.js`: List of tasks with options to update or delete.
  - `App.js`: Main component that integrates `TaskForm` and `TaskList`.

- **Backend Endpoints:**
  - `POST /tasks`: Create a new task.
  - `GET /tasks`: Get all tasks.
  - `PUT /tasks/:id`: Update a task's status.
  - `DELETE /tasks/:id`: Delete a task.

- **Assumptions:**
  - MongoDB is running locally or a valid connection string is provided.
  - The backend API and frontend application are running on the default ports (`5000` for backend and `3000` for frontend).

## Notes

- Ensure that CORS is properly configured if deploying to different domains.
- For production use, consider using environment variables for sensitive information like database connection strings.
- This project does not include user authentication or authorization.