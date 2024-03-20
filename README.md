# notiss-api

RESTful API for the most simplest notes app.

## Description

This project is a RESTful API for a simple note-taking application. It's built with TypeScript and uses MySQL for data storage.

## Requirements

- Node.js (`^v20.8.0`)
- MySQL

## Installation

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Set up your MySQL database and create the `.env` file with your database credentials.

## Database Setup

This project uses MySQL as its database. You need to create a MySQL database and update the `.env` file with your database URL in the format: `mysql://user:password@localhost:3306/database_name`.

## Drizzle Commands

This project uses Drizzle ORM for database operations. Here are some useful commands:

- `npm run migrate`: Generates a migration file based on your schema.
- `npm run introspect`: Pulls the schema from your database and generates a schema file.
- `npm run prototype`: Pushes the schema to your database.
- `npm run seed`: Runs the seed file to populate your database with initial data.
- `npm run studio`: Starts Drizzle Studio, a GUI for managing your database.

Remember to run `npm run migrate` and `npm run prototype` whenever you make changes to your schema.

## Running the Project

You can run the project in development mode with `npm run dev` or build the project with `npm run build` and then start it with `npm start`.
