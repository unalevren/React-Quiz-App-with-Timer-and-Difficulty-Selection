# React Quiz App with Timer and Difficulty Selection

**[Live Project (Netlify)](https://stellar-genie-e17f1d.netlify.app)**

## Description

There are several key components and functions that work together to create an engaging quiz application. One of the main functions, shuffleArray, is responsible for randomizing the contents of an array, which allows for a more dynamic and varied experience for the user by shuffling the answer options for each quiz question.

To fetch the quiz questions and answers, I utilized the Open Trivia Database API in the fetchQuizData function. This function retrieves the necessary data based on the user's selected difficulty level and number of questions. The data is then formatted to include the shuffled answer options, ensuring a unique quiz experience for each user.

The Modal component is responsible for displaying the user's final score at the end of the quiz, along with a button to restart the quiz if desired. The QuestionCard component renders each individual quiz question and its answer options, keeping track of the user's score and question count. It utilizes the approvedChoice function to determine whether the user's selected answer is correct and updates the score accordingly.

To allow the user to select the difficulty level of the quiz, the Selects component creates a dropdown menu. The Intro component welcomes the user with an image, the difficulty level dropdown menu, and a start quiz button. Finally, the Quiz component brings all of these components together and fetches the quiz data based on the selected difficulty level and number of questions. The Quiz component passes the necessary data and functions as props to the other components to ensure seamless functionality of the quiz application.

## Technologies Used

-   React
-   JavaScript
-   HTML
-   SCSS
-   MUI

## How It Works

This is a ReactJS quiz application that has an Introduce component and a QuestionCard component. The Introduce component is the first page of the quiz where users can select the difficulty level of the quiz and start the quiz by clicking on the "Start Quiz" button. The QuestionCard component is the actual quiz where users have 30 seconds to answer each question, and the application keeps track of the user's score. After answering all 20 questions or when the timer runs out, a modal appears with the user's final score and a "Restart" button. The code is well-organized and uses functional components with React hooks to manage state and side-effects. Additionally, the CSS is also well-structured, making it easy to understand and modify. (There are some problems with the api, it sends &quote instead of " or ', this problem is caused by the api, the text is not in rich text format.)

To run this project locally, follow these steps:

-   Clone the repository to your local machine
-   Install the necessary dependencies using **npm install**
-   Start the development server using **npm start**

## Contact
evrenn.unal@gmail.com
