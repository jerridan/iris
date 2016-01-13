## IRIS
A simple, mobile-friendly weather web app built using React.

I built this app as a way to practice working with React, and gain experience with HTML5 Geolocation and the Google Maps API. So even if no one uses it, it has served its purpose.

Iris displays detailed weather information (temperature, precipitation, humidity, air pressure, etc) for the current time. It does not display forecast information for future times/days. The styling is based on Google's Material Design.

### How it basically works
1. Uses Geolocation to grab your latitude and longitude (not stored on any database)
2. Uses the Google Maps API to determine the name of your location
3. Uses the [forecast.io](http://forecast.io/) API to get the current weather data for your location
4. Displays the retrieved data

### Working Demo
Click [here](http://159.203.42.187/) to see a working demo. Note that in order for the app to work, you will need to allow it to access your location - this is not stored anywhere long term.

### Config
If you are using the code base, copy config/forecast.json.sample to config/forecast.json and add your forecast.io API key
