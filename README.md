# TigrayPulse
This will aggregate all Tigray related info from all outlets around the world.
## TOC
1. [Architecture](#architecture)
2. [How to run the apps](#how-to-run-the-apps)
    1. [Frontend](#frontend)
    2. [Backend](#backend)
5. [References](#references)
## Architecture
This is a POC app built using React for frontend and Nest Nodejs for the backend APIs. More micro-uis and microservices will be added soon.

## How to run the apps
### Frontend
Install the plugin if it doesn't exist
```
npm install --save-dev @nrwl/react
```
Generate the react application, 'tigray-pulse-app'
```
npx nx g @nrwl/react:app ui/tigray-pulse-app
```
Run the UI on dev env as follows
```
npx nx serve tigray-pulse-app
```

NB: Don't forget to rename 'ui-tigray-pulse-app' to 'tigray-pulse-app' in project.json file.

### Backend
Install Nest plugin if it doesn't exist
```
npm install --save-dev @nrwl/nest
```
Create the backend application using Nest
```
npx nx g @nrwl/nest:app api/twitter-client-service
```
Run in the dev env as follows
```
npx nx serve twitter-client-service
```

NB: Don't forget to rename 'api-twitter-client-service' to 'twitter-client-service' in project.json file.

# References
https://github.com/nrwl/nx-examples

