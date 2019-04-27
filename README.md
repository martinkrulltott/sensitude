# Sensitude 1.0

A simple app to read data from IoT-sensors in different buildings with info about temperature, humidity and battery level. The app presents data in three levels: Overview of buildings, overview of a building's different rooms and a detailed view of a specific room.

Demo site: https://martinkrulltott.github.io/sensitude/

## API
The API is mocked via My JSON Server (https://my-json-server.typicode.com/martinkrulltott/demo/homes). To immitate data updates some of the values are randomized after fetching the data.

## Scope

The app is only presenting data, i.e. it's not possible to change data or any settings. The updates are done automatically according to a time interval each 10 seconds. The app is primarily thought to be used on smartphones (min width 320px, corresponds to an iPhone 5 in portrait view) and is developed mobile first, i.e. desktop/larger devices only see an upscaled version. The first page is thought to be shown after the user has signed in, but the sign-in process is out of scope. Warnings are shown if the temperature is too low or if the humidity is too low or high (implemented through the API) or if the battery level is too low (implemented directly client-side). The app has been tested in iOS Safari on an iPhone 7.

## Requirements

* Node.js
* NPM
* Vue CLI 3
* Google Chrome

## Installation

1. Clone locally (git clone {url})
2. Navigate to folder (cd sensitude)
3. Install packages (npm i)
4. Install Vue CLI 3 (npm i -g @vue/cli) if needed
5. Start Vue CLI (vue ui)

## Usage

1. In Vue CLI, go to Tasks -> Serve and click on Run task. Alt run 'npm run serve'
2. When Serve is running, click on Open app or go to http://localhost:8080/
3. The app runs in the browser, to simulate mobile devices, use "Device Toolbar" in Chrome devtools
4. The app can also be accessed through the network through (url shown in output from 'npm run serve')

## Build & deploy

* To build for production, run 'npm run build'
* To deploy to Github Pages, run 'sh deploy.sh'