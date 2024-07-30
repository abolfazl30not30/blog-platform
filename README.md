# Blogging Platform with Next.js

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [API Routes](#api-routes)
6. [Frontend Components](#frontend-components)
7. [Deployment](#deployment)

## Introduction
This project is a full-featured blogging platform built using Next.js. It allows users to create, read, update, and delete blog posts. The application is designed to be performant and scalable, leveraging Next.js' server-side rendering capabilities and MongoDB for data storage.

## Features
- Create, Read, Update, and Delete (CRUD) blog posts
- API routes for managing blog posts
- Homepage displaying a list of all blog posts
- Detailed view for each blog post
- Navigation bar for easy navigation between pages

## Technologies Used
- **Next.js**: Framework for server-side rendering and static site generation
- **MongoDB**: NoSQL database for storing blog post data
- **TailwindCSS**: Utility-first CSS framework for styling
- **MUI (Material-UI)**: React components for faster and easier web development
- **Axios**: Promise-based HTTP client for making API requests
- **Formik**: Library for building forms in React
- **Yup**: Schema builder for value parsing and validation
- **React-Toastify**: Notification library for React
- **React-Icons**: Collection of popular icons for React

## Setup Instructions
### Prerequisites
- Node.js installed
- MongoDB account and cluster set up

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/abolfazl30not30/blog-platform/
   cd blog-platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## API Routes
The following API routes are implemented for CRUD operations on blog posts:

- **GET /api/posts**: Retrieve all blog posts.
- **GET /api/posts/:id**: Retrieve a specific blog post by ID.
- **POST /api/posts**: Create a new blog post.
- **PUT /api/posts/:id**: Update a specific blog post by ID.
- **DELETE /api/posts/:id**: Delete a specific blog post by ID.

## Frontend Components
### Homepage
- Displays a list of all blog posts.
- Uses TailwindCSS for styling.

### Blog Post Detail Page
- Shows the full content of a specific blog post.
- Includes a navigation bar with links to navigate between different pages.

### Navigation Bar
- Provides links to the homepage and other relevant pages.

## Deployment
### Steps to Deploy on Vercel
1. **Connect your GitHub repository to Vercel**:
    - Go to [Vercel](https://vercel.com/), sign in, and create a new project.
    - Import your GitHub repository.

2. **Configure build settings**:
    - Ensure the root directory is set to the project directory.
    - Set environment variables in Vercel (same as in your `.env.local` file).

3. **Deploy the application**:
    - Click on the "Deploy" button in Vercel.
    - Vercel will build and deploy your application.

4. **Visit your deployed site**:
    - Once the deployment is complete, Vercel will provide a URL for your live site.