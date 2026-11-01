## Manual Installation
Install node.js manually
CLone the repo
npm install
start the db locally
- docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secretpassword -v mongo_data:/data/db mongo:latest
- get a url from mongodb and configure it
change .env file update db credentials 
npm run build
npm run start


