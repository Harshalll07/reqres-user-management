# Reqres User Management App

## Project Overview
This React application integrates with the Reqres API to perform user authentication and basic user management operations such as listing, editing, and deleting users.

## Features
- User authentication (Login with email and password)
- Fetch and display a paginated list of users
- Edit user details (First Name, Last Name, Email)
- Delete users from the list
- Client-side search and filtering
- React Router for navigation
- Context API for state management
- API communication using Fetch API

## Technologies Used
- React.js
- React Router
- Context API
- Fetch API
- CSS (Custom Styling)

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

### Steps to Run the Project
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/reqres-user-management.git
   cd reqres-user-management
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints Used
- **Login:** `POST /api/login`  
  - Email: `eve.holt@reqres.in`
  - Password: `cityslicka`
- **Get Users:** `GET /api/users?page=1`
- **Edit User:** `PUT /api/users/{id}`
- **Delete User:** `DELETE /api/users/{id}`

## Assumptions & Considerations
- The app does not handle token expiration, assuming a valid token remains in session.
- Basic form validation is implemented for login and edit user forms.
- Users are stored in local state; updates are not persisted beyond session refresh.

## Troubleshooting
- If you encounter issues with dependencies, run:
  ```bash
  npm audit fix --force
  ```
- If the app doesn't start, try clearing the cache and restarting:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  npm start
  ```

## Deployment
- To build for production, run:
  ```bash
  npm run build
  ```
- Deploy the `build/` folder to a hosting service like Vercel, Netlify, or GitHub Pages.

## License
This project is open-source under the MIT License.

## Contact
For any issues, feel free to open an issue on GitHub or reach out to `your.email@example.com`.


