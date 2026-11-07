## Manual Installation

Install node.js manually
CLone the repo
Install dependencies (npm install)
start the db locally

- docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secretpassword -v mongo_data:/data/db mongo:latest
- get a url from mongodb and configure it
  change .env file update db credentials
  npm run build
  npm run start

## Docker Installation

Install docker
create a network - docker create network backend-network
create a volume - docker create volume mongodb_data
start mongo db locally -
- docker run -d --name mongodb -p 27017:27017 --network backend-network -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secretpassword -v mongodb_data:/data/db mongo:latest
  build the docker image
- `docker build -t user-project .`
  start the image
- `docker run -d --name backend -p 3000:3000 --network backend-network -e DB_URL=mongodb://admin:mysecretpassword@mongodb:27017/mydatabase?authSource=admin user-project`

## Docker Compose Installation Steps

Install docker, docker-compose
Run - `docker-compose up`
