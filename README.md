# Smart Disaster Relief Resource Coordination Platform

## Project Overview
This project helps coordinate emergency requests, rescue teams, and relief resources during disasters.

## Objectives
- Submit emergency requests
- Prioritize emergencies
- Track relief resources
- Support rescue coordination

## Technologies Used
- HTML
- CSS
- JavaScript
- Git
- GitHub
- Docker
- Nginx

## How to Run
Open the application using:
http://localhost:8080

## Docker Commands
docker build -t disaster-relief-app .
docker run -d -p 8080:80 --name disaster-relief-container disaster-relief-app

## Project Files
- index.html – User interface
- style.css – Styling
- script.js – Application logic
- Dockerfile – Docker configuration
- docker-compose.yml – Docker Compose configuration
- README.md – Project documentation

## Usage
1. Enter citizen name.
2. Enter location.
3. Select emergency severity.
4. Click Submit Request.
5. The system displays the request status and priority.