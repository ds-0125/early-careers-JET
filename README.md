# JET Early Careers - coding assigment

Hi there! This file will guide you through my implementation of the coding assignment for the Early Careers program.

## Running the application
### Requirements


## Design

### Why only front-end?
As this application was on a rather small scale with no major data processing, I decided to create it with no back-end. This means all the data is processed in front-end. I had done so as adding a back-end would complicate the design unnecessarily for a project of this scope.

If the project required directly fetching data from databases, handling login sessions or other requirements as such, a full-stack approach would have been crucial.

### Data used & their representation
The main focus in this application is to extract certain information or details about restaurants. This information that we are interested in is fetched from an API and represented in a JSON format. The received data already has a `restaurants` list with well-structured items containing each restaurant's details.

These structured items led to the decision to represent restaurants as objects with only the information of interest for simplicity. This allows for vercitility throughout the development of the application whilst keeping it all coherent.

### Objects
As TypeScript is used for data processing, custom interfaces are created to store, manipulate & represent the data we are interested in. Here you can find an overview of the classes created, their variables and meaning.

#### Restaurant
- id : unique identifier of a restaurant
- name : the name of the restaurant
- address : an Address object containing 
- rating : another custom object with Rating details
- cuisines : an array of Cuisine objects

#### Address
- city : the city the restaurant is located in
- firstLine : street name & house no.
- postalCode : the postal code
- location : a PointLocation object representing a "point" using coordinates

#### PointLocation
- type : tells us how the location is represented
- coordinates : two number array contain coordinates of the restaurants

#### Rating
- count : number of ratings
- starRating : restaurants rating in whole numbers
- userRating : rating by users (for some reason mostly "null")

#### Cuisine
- name : cuisine name
- uniqueName : unique identifier for the cuisine

## Improvements
- filtering
- API was live -> auto reloading/updating the page
- pop-out with logo
- add location representation on a map in pop-out using coordinates
- open for order? if so estimated delivery/pick-up time?