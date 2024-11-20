# Movie Search API

This project provides a simple API that allows users to search for movies using the OMDB API. It includes functionality to search for movies, view movie details, and get a list of popular movies.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Search Movies](#search-movies)
  - [Get Movie Details](#get-movie-details)
  - [Popular Movies](#popular-movies)
- [Postman Collection](#postman-collection)
- [Running the Application](#running-the-application)

## Technologies Used
- Node.js
- Express.js
- Axios
- OMDB API (for movie data)

## Installation

Follow these steps to run the application locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Netvoiangel/MiniLab224
   cd MiniLab224
   ```

2. **Install dependencies**:
   Make sure you have `Node.js` installed. Then, run the following command to install the necessary packages:
   ```bash
   npm install
   ```

3. **Create a `.env` file**:
   The application uses an environment variable to store the OMDB API key. Create a `.env` file in the root directory and add your OMDB API key like this:
   ```
   OMDB_API_KEY=your-omdb-api-key
   ```

4. **Start the server**:
   Run the following command to start the server locally:
   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3000`.

## Configuration

Before starting the application, make sure you have an API key from [OMDB API](http://www.omdbapi.com/apikey.aspx). You will need to sign up and obtain a free or paid key.

Add the key to the `.env` file as shown in the installation section.

## API Endpoints

### 1. Search Movies

**Endpoint**: `GET /movies/search`

**Description**: Allows searching for movies by their title.

**Query Parameter**:
- `query`: The title of the movie you want to search for.

**Example Request**:
```
GET http://localhost:3000/movies/search?query=Inception
```

**Example Response**:
```json
{
  "Search": [
    {
      "Title": "Inception",
      "Year": "2010",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjYwODQwNzkwMF5BMl5BanBnXkFtZTcwMDI5MTU5Mw@@._V1_SX300.jpg"
    },
    // Other results
  ],
  "totalResults": "100",
  "Response": "True"
}
```

### 2. Get Movie Details

**Endpoint**: `GET /movies/:id`

**Description**: Fetches detailed information about a movie by its IMDb ID.

**URL Parameter**:
- `id`: The IMDb ID of the movie (e.g., `tt1375666` for "Inception").

**Example Request**:
```
GET http://localhost:3000/movies/tt1375666
```

**Example Response**:
```json
{
  "Title": "Inception",
  "Year": "2010",
  "Rated": "PG-13",
  "Released": "16 Jul 2010",
  "Runtime": "148 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Christopher Nolan",
  "Writer": "Christopher Nolan",
  "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
  "Plot": "A thief who enters the minds of others through their dreams is given the inverse task of planting an idea into the mind of a CEO.",
  "Language": "English, Japanese, French",
  "Country": "USA, UK",
  "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
  "imdbID": "tt1375666",
  "Type": "movie",
  "BoxOffice": "$292,576,195",
  "Response": "True"
}
```

### 3. Popular Movies

**Endpoint**: `GET /movies/popular`

**Description**: Returns a list of popular movies. This endpoint queries OMDB for movies with a popular title (e.g., "Avengers").

**Example Request**:
```
GET http://localhost:3000/movies/popular
```

**Example Response**:
```json
{
  "Search": [
    {
      "Title": "Avengers: Endgame",
      "Year": "2019",
      "imdbID": "tt4154796",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ3MTUyNDg0N15BMl5BanBnXkFtZTgwNjM0NzUzNzM@._V1_SX300.jpg"
    },
    // Other popular movies
  ],
  "Response": "True"
}
```

## Postman Collection

You can test the API endpoints using the provided Postman collection. Simply click the link below to access the workspace and import the collection into your Postman:

[Postman Workspace](https://www.postman.com/maintenance-engineer-65671425/my-workspace/collection/9y3x8j0/rpi-tmdb?action=share&creator=31710811)

## Running the Application

To run the application locally, follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your OMDB API key to the `.env` file as described in the configuration section.

3. Start the server:
   ```bash
   npm start
   ```

The server will be running on `http://localhost:3000`. You can now use tools like Postman or your browser to test the API endpoints.

---

Enjoy using the Movie Search API!
