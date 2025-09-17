# Backend API Documentation

This backend provides authentication endpoints for the Full Stack JS Project.

## Base URL
- Local: `http://localhost:3000`
- Docker: `http://host.docker.internal:3000`

## Endpoints

### Authentication

#### Register User
- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Description**: Register a new user account
- **Request Body**:
  ```json
  {
    "email": "string (required)",
    "password": "string (min 6 chars, required)",
    "pseudo": "string (required)"
  }
  ```
- **Responses**:
  - `201`: User created successfully
  - `400`: User already exists
  - `500`: Server error

#### Login User
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Description**: Authenticate a user and receive a JWT token
- **Request Body**:
  ```json
  {
    "email": "string (required)",
    "password": "string (required)"
  }
  ```
- **Responses**:
  - `200`: Login successful (returns user data and token)
  - `401`: Invalid credentials
  - `500`: Server error

### Health Check
- **URL**: `/`
- **Method**: `GET`
- **Description**: Check if the API is running
- **Response**: `{"message": "API is running"}`

## API Documentation
Full interactive API documentation is available via Swagger UI at `/api-docs`.

## Authentication
Some endpoints may require JWT authentication. Include the token in the Authorization header as `Bearer <token>`.

## Setup
1. Install dependencies: `npm install`
2. Set up environment variables in `.env`
3. Start the server: `npm start`

## Technologies
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Swagger for API documentation