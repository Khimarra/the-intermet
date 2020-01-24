<img src="https://media.giphy.com/media/YxA2PPkXbwRTa/giphy.gif" />

# Project Overview

## The-InterMet

**Project decription:** An app that randomly displays art that is currently on display at the Met, by department, using The Metropolitan Museum of Art Collection API. https://collectionapi.metmuseum.org/public/collection/v1/objects

## API Snippet

```
{
    "objectID": 2376,
    "isHighlight": false,
    "accessionNumber": "46.140.752a, b",
    "isPublicDomain": true,
    "primaryImage": "https://images.metmuseum.org/CRDImages/ad/original/176958.jpg",
    "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ad/web-large/176958.jpg",
    "additionalImages": [],
    "constituents": [
        {
            "role": "Maker",
            "name": "McKee and Brothers"
        }
    ],
    "department": "The American Wing",
    "objectName": "Dish",
    "title": "Figure Dish",
    "culture": "American",
    "period": "",
    "dynasty": "",
    "reign": "",
    "portfolio": "",
    "artistRole": "Maker",
    "artistPrefix": "",
    "artistDisplayName": "McKee and Brothers",
    "artistDisplayBio": "1856–89",
    "artistSuffix": "",
    "artistAlphaSort": "McKee and Brothers",
    "artistNationality": "",
    "artistBeginDate": "1856",
    "artistEndDate": "1889",
    "objectDate": "1880–90",
    "objectBeginDate": 1880,
    "objectEndDate": 1890,
    "medium": "Pressed opaque white glass",
    "dimensions": "4 1/4 x 4 3/8 x 5 3/8 in. (10.8 x 11.1 x 13.7 cm)",
    "creditLine": "Gift of Mrs. Emily Winthrop Miles, 1946",
    "geographyType": "Made in",
    "city": "Pittsburgh",
    "state": "Pennsylvania",
    "county": "",
    "country": "United States",
    "region": "Mid-Atlantic",
    "subregion": "",
    "locale": "",
    "locus": "",
    "excavation": "",
    "river": "",
    "classification": "Glass",
    "rightsAndReproduction": "",
    "linkResource": "",
    "metadataDate": "2019-07-26T03:00:41.71Z",
    "repository": "Metropolitan Museum of Art, New York, NY",
    "objectURL": "https://www.metmuseum.org/art/collection/search/2376",
    "tags": [
        "Sheep"
    ]
}
```

## Wireframes

![Home Wireframe](images/HomeWireframe.png)
![Department Wireframe](images/DepartmentWireframe.png)
![Art Details Wireframe](images/ArtDetailsWireframe.png)

### MVP

- Get data from Met API
- Make home page with a randomly generated image and title of art piece, one for each department (there are 20) 
- Render data about specific art piece on separate page, linked from image

#### PostMVP EXAMPLE:

- Add level between home page and art info where 10 randomly selected pieces from each department are displayed, make home page links go to department instead of specific info, these 10 pieces will link to their specific info.
- Add search function so users can search through whole collection
- Update styling with SASS

## React Component Hierarchy

Include an image of your component hierarchy that shows the data flow and architectural design of your app.

## Components

Based on the initial logic defined in the previous section, try to breakdown the logic further into stateless/stateful components. 

| Component | Description |Type |
| --- | --- | --- |
| Header | The Header receives props that render multiple nav titles and links | Functional |
| Main | This component houses multiple rendered views through React Router and controls data received from the initial API call in state | Class |

## Priority Matrix

Include an image of your Priority Matrix (X is time and Y is priority)

## Timeframes

Timeframes are key in the development cycle. You have limited time to code and so much to accomplish!  Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Wireframes / Priority Matrix / Functional Components | Incomplete
|Jan 27th| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28th| Pseudocode / actual code | Incomplete
|Jan 29th| Initial Clickable Model  | Incomplete
|Jan 30th| MVP | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries

- React Router DOM
- Axios

## Issues and Resolutions

- The Met's API has some limitations on endpoints, so I already had to tweak my original plan of what pieces to display. 
- Not every piece has images, so in those cases I plan to load in a default "no image available" image
- I want to implement a loading bar but I don't know how, yet. Will probably have to do some googling.

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
