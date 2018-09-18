# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

I incrementally converted a static webpage to a mobile-ready web application. In Stage One, I took a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. I also added a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

I was provided the code for a restaurant reviews website. The code had many issues. It’s barely usable on a desktop browser, much less a mobile device. It also did not include any standard accessibility features, and it did not work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality.

### Sources Used

* https://guides.github.com/features/mastering-markdown/ - in order to create this README
* https://developers.google.com/web/fundamentals/primers/service-workers/ - in order to create the service worker
* https://stackoverflow.com/questions/25225682/difference-between-width100-and-width100vw - to figure out what the definition of "vw" was


## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### How to Run the Project

To run the project, download or clone this repository to a computer using the git clone command.
Then:
Check the version of python you have on your computer by running the command "python -v" in a new terminal window
Next cd into the folder that the project is being held in
After: Depending on the version of python create a simple HTTP server to serve the site locally:
Python 2.x -  python -m SimpleHTTPServer 8000
python 3.x - -m http.server 8000

Lastly:
type http://localhost:8000 into a browser to see the site, if you want to edit the site code locally then you have to open the localhost site in an incognito window.

### Licenses
MIT Licenses
Copyright (c) 2018 Hyunjin Kim
