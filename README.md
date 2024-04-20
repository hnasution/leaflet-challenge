# Module 15 Mapping

# leaflet-challenge

## Background
The United States Geological Survey, or USGS for short, is responsible for providing scienti c data about natural
hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their
scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its
processes.
The USGS is interested in building a new set of tools that will allow them to visualise their earthquake data. They
collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In
this challenge, you have been tasked with developing a way to visualise USGS data that will allow them to better
educate the public and other government organisations (and hopefully secure more funding) on issues facing our
planet.

## Instructions
The instructions for this activity are broken into two parts:
Part 1: Create the Earthquake Visualisation
Part 2: Gather and Plot More Data (Optional with no extra points earning)

## Part 1: Create the Earthquake Visualisation
Your  rst task is to visualise an earthquake dataset. Complete the following steps:
1. Get your dataset. To do so, follow these steps:
    * The USGS provides earthquake data in a number of different formats, updated every 5 minutes. 
    Visit the USGS GeoJSON Feed (http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose adataset to visualise. 
    * When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. 
    Use the URL of this JSON to pull in the data for the visualisation. 
2. Import and visualise the data by doing the following:
    * Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
        - Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by colour. 
        Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in colour.
        - Hint: The depth of the earth can be found as the third coordinate for each earthquake.
    * Create a legend that will provide context for your map data.
