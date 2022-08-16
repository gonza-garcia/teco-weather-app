# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the development process
You can see this app running live on Heroku [HERE](https://teco-weather-app.herokuapp.com/)

## About the development process
First I read the Open Weather App Documentation, and after some research and discovering that besides the weather API, it also has a Geo Localization Service; I decided that I wanted the user to be able to type into an input ANY city (not just selecting from a fixed list of 5), and this would trigger the Geo Localization service to search if that city exists and then trigger the weather API to display the weather for that city´s current day and the next 5 days.\
\
I also included the fixed default list of five cities to select from, and additionally if you type a city that exists but isn´t on the list, it will add that city to the fixed list.
I didn´t want the api key to be exposed so I will include instructions below on how to get your own api key to put in the .env file if you want to run it locally. (Although I then realized that the key was gonna be exposed anyways because the Open weather app service requires this key to go as a url parameter instead of in the body of a POST request).\
\
I´m very sorry about the styling. I´m not a designer and have very poor taste picking colors and designing a layout.
\
I decided to host the app in heroku.\
\
I encountered lots of issues to configure jest correctly so the tests will fail. I went into looking at this issue and could´nt find a solution. Theoretically when you bootstrap your app with Creat React App, it should work out of the box, buy it wasn´t my case and eventually I decided I was losing time trying to figure it out. (More on Known Issues Section).\
EDIT: I fixed it by adding some configurations to the jest.config.js. Sadly I lost a lot of time fixing it and don´t have any more time to include the tests I would have liked to.


## Testing and Known issues(FIXED)
### `yarn jest`

For some reason I couldn´t setup the jest configuration correctly and it gives an error on all the tests that import a scss file. I couldn´t make it work and I felt I was losing too much time on the subject. With more time maybe I could make it work but I decided to create some test files anyway although they won´t pass until this issue is fixed.\
EDIT: I fixed the issue with the tests. Sadly I lost a lot of time fixing it and don´t have any more time to include the tests I would have liked to.

## Previous requirement to run the app locally
Create a .env file in the root directory and put this variable there:

### `REACT_APP_WEATHER_KEY=YOURKEY`

Where YOURKEY should be your Open Weather Map api Key. You can obtain this key by creating a free account in [Open Weather Page](https://openweathermap.org/) and going to My API keys by clicking in your account name at the top right once you are logged in.

## Instructions to run the app locally
Clone this repo and inside the project directory run:

### `yarn`

After that you can try:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
