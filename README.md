# Finance Data Processing and Access Control Backend

## Overview

This project is a backend system for managing financial records with role-based access control and dashboard analytics.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Features

- User Management
- Role-based Access Control
- Financial Records CRUD
- Dashboard Analytics
- Filtering and Pagination
- Validation and Error Handling

## Roles

### Viewer
- View Dashboard Only

### Analyst
- View Records
- View Analytics

### Admin
- Full Access

## API Endpoints

### Auth

POST /api/auth/register  
POST /api/auth/login  

### Records

POST /api/records  
GET /api/records  
PUT /api/records/:id  
DELETE /api/records/:id  

### Dashboard

GET /api/dashboard/summary  
GET /api/dashboard/category  
GET /api/dashboard/monthly  
GET /api/dashboard/recent  


## Assumptions

- JWT based authentication
- Role-based access control
- MongoDB used for persistence