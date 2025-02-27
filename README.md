# Football Statistics API

This project is a Football Statistics API built using Node.js, Express, and MongoDB. It provides routes for managing player statistics and team data.
## Technology
- MongoDb
- NodeJs

## FrameWork
- express
- mongoose
  

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/football_statistics_api.git
   ```
2. Navigate to the project directory:
   ```sh
   cd football_statistics_api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm start
   ```

   
## Project Visualization
![image](https://github.com/user-attachments/assets/e5d0f4e8-724b-4c37-a44d-0105643130d8)

## models
![image](https://github.com/user-attachments/assets/4a2776e9-8100-4337-aab5-5ba5cda8f41c)

## API Routes

### Player Routes
![image](https://github.com/user-attachments/assets/3411de11-b8d6-43cd-9dc8-84a7a5586f22)

- **GET** `/api/players/:id` - Get player statistics by ID
- **POST** `/api/players` - Create a new player
- **PUT** `/api/players/:id` - Update player data
- **DELETE** `/api/players/:id` - Delete a player

### Team Routes
- **GET** `/api/teams/:id?` - Get a single team or all teams
- **POST** `/api/teams` - Create a new team
- **PUT** `/api/teams/:id` - Update team information
- **DELETE** `/api/teams/:id` - Delete a team

### Stats Routes
- **GET** `/api/stats/player/:id` - Get player statistics by ID
- **POST** `/api/stats` - Add new statistics




## Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
