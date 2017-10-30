# webpack-react
[![CircleCI](https://circleci.com/gh/tquinlan1992/webpack-react.svg?style=svg)](https://circleci.com/gh/tquinlan1992/webpack-react)
[![Docker Build Status](https://img.shields.io/docker/build/tquinlan1992/webpack-react.svg)](https://hub.docker.com/r/tquinlan1992/webpack-react/)
[![Dependencies](https://david-dm.org/tquinlan1992/webpack-react.svg)](https://david-dm.org/tquinlan1992/webpack-react)


A project for building react apps using webpack with docker

### Setup

1. Install the latest version of Docker
https://docs.docker.com/engine/installation/  and Docker Compose https://docs.docker.com/compose/install/#install-compose
2. ```git clone https://github.com/tquinlan1992/webpack-react.git``` into a location of your choice
3. ```cd <cloned repository path>/docker-compose```
    - This directory holds the ```docker-compose.yml``` that mounts your host ```/src``` directory to the container's ```/src``` directory
    - It is set up to expose port ```8000```, the port the webpack-dev-server is running on, and is map it to port ```8000```
4. run ```docker-compose up```
    - With the ```/src``` directory mounted and webpack-dev-server running within the container, file changes within the ```/src``` directory will trigger a build for webpack
    - When docker-compose is run for the first time an image is created.  To rebuild that image run ```docker-compose up``` with the ```--build``` flag
    ```docker-compose up --build```

#### Copying node_modules directory

1. After the container is running you're able to run ```docker cp webpack-react:/client-app/node_modules ./node_modules``` from the root directory of the repository
    - This enables IDEs/text-editors to have access to the modules.  The docker container is reading from its own company still with webpack-dev-server

#### Tests
Tests are run using a wrapper around jest, tquinlan1992-webpack-util-jest
- To run all Tests and In docker container
    - ```npm test```
    - to run a specific test there are 2 recommended ways
        1. By installing Jest with the -global flag
            1. Install jest with -global flag ```npm install -global tquinlan1992-webpack-util-jest```
            2. Run specific test file ```tquinlan1992-webpack-util-jest <file path>```
        2. Using jest from node_modules
            1. On a Mac
                - ```./node_modules/tquinlan1992-webpack-util/dist/src/jest/index.js <file-path>```

#### Debugging
- Tests
    - on Mac and In docker container
        1. run ```node --inspect --inspect-brk ./node_modules/jest/bin/jest.js```
            - This will stop at the first line of code load
            - It's recommended to add a debugger in your code as all the files will not be loaded when the debugger is brought up
        2. Run the following with the websocket path that's returned ```chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=<websocket path>```

#### In docker container - Running bash, sourcing profile, changing to app directory
1. Go through the setup instructions so there is a ```docker-compose up``` container running
2. run ```docker exec -it webpack-react bash```
    - exec -it allows a command to be run on the container specified in the next parameter
    - ```webpack-react``` is the name of the docker-compose image that's specified in the ```docker-compose.yml```
    - The last ```bash``` param executes bash on the container
3. run ```. /etc/profile``` to source the profile
    - This allows the use of npm commands
4. The app is stored in the root directory under ```/client-app```.  run ```cd /client-app``` to change into the directory

#### [docker-compose](./docker-compose/README.md)
