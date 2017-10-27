# webpack-react

A project for building react apps using webpack with docker

### Setup

1. Install the latest version of Docker
https://docs.docker.com/engine/installation/
2. ```git clone https://github.com/tquinlan1992/webpack-react.git``` into location of your choice
3. ```cd <cloned repository path>/docker-compose```
    - This directory holds the ```docker-compose.yml``` that mounts your host ```/src``` directory to the container's ```/src``` directory
    - It is set up to expose port ```8000```, the port the webpack-dev-server is running on, and is map it to port ```8000```
4. run ```docker-compose up```
    - With the ```/src``` directory mounted and webpack-dev-server running within the container, file changes within the ```/src``` directory will trigger a build for webpack

#### Copying node_modules directory

1. After the container is running you're able to run ```docker cp <container id>:/client-app/node_modules ./node_modules``` from the root directory of the repository
    - This enables IDEs/text-editors to have access to the modules.  The docker container is reading from its own company still with webpack-dev-server

#### Tests
Tests are run using jest
- To run all Tests
    - ```npm test```
    - to run a specific test there are 2 recommended ways
        1. By installing Jest with the -global flag
            1. Install jest with -global flag ```npm install -global jest```
            2. Run specific test file ```jest <file path```
        2. Using jest from node_modules
            1. On a Mac
                - ```./node_modules/jest/bin/jest.js <file-path>

#### Debugging
- Tests

#### Running bash

#### docker-compose
[a relative link](./docker-compose/README.md)
