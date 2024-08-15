# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > When a child name is clicked on, the eventListener code in the Kids.js module runs. What was clicked, the clickEvent.target, is stored in the clickTarget variable. The value of clickTarget.dataset.type is evaluated against the string "child" with an if statement. If the conditional evaluates to true, the for loop inside the conditional runs. The for loop iterates over the children array and each element in the array is evaluated against clickTarget.dataset.id. If true, then a match is found and the window.alert() message is displayed.

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > It has to be invoked inside the for loop because we want two arguments to be passed into the findCelebrityMatch function, an object and an array. To get the object we want to pass in, we need to iterate over the kids array with the for loop. The for loop "extracts" each kid from the kids array and passes it into the findCelebrityMatch. We wouldn't be able to iterate over each kid object in the kids array if we didn't put it inside the for loop.

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > It's able to be displayed by accessing the dataset property of the click target when that element is clicked. Each <li> element in this module has a dataset attribute called named data-sport that gives the click target its dataset property. The value of the dataset property is determined by the value we gave the data-sport attribute here: <li data-sport="${celebrity.sport}">
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > We first define a variable named mainContainer and use the document.querySelector to "grab" the HTML element that has an id named container. Then, we define a variable named applicationHTML to hold all the HTML we want to display. In defining the applicationHTML variable, we create strings of HTML syntax to organize and display the information we want. After setting up the structure we want, we call the functions Kids(), Celebrities(), and Pairings() under their respective sections and articles. Those functions return their own string of HTML syntax within the elements that they were called.
