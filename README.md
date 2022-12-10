# TigrayPulse
This will aggregate all Tigray related info from all outlets around the world.

## Architecture
This is a POC app built from React and Nest Nodejs.

## How to run
### Frontend
npm install --save-dev @nrwl/react          [Install the plugin if it doesn't exist]
npx nx g @nrwl/react:app ui/tigray-pulse-app   [To generate the react application]
npx nx serve tigray-pulse-app               [To run the UI on dev server]

NB: Don't forget to rename 'ui-tigray-pulse-app' to 'tigray-pulse-app' in project.json file.

### Backend
npm install --save-dev @nrwl/nest           [Install if it doesn't exist]
npx nx g @nrwl/nest:app api/twitter-client-service
npx nx serve twitter-client-service

NB: Don't forget to rename 'api-twitter-client-service' to 'twitter-client-service' in project.json file.

# References
https://github.com/nrwl/nx-examples

