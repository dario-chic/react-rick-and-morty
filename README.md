# Rick and Morty (react version)

This is a website to find detailed information about the Rick and Morty series. The design of the site is not the best, since I did not focus on working on the design, but on the logic and functionality.

On this website I coded interesting functionalities like getting data with parameters via query strings in the URL, opening a modal window via the URL, and using two different APIs simultaneously to be able to display more information.

This project helped me a lot to improve my programming logic and get better understanding about how query strings work.

**Ps:** This was my first React project, so it's not perfect. I am aware it could be improved in a lot of different ways, reducing components, making the code more readable, refactoring certain functionalities, and using other tools to improve its performance. Maybe in the future I'll make a better version or another similar project with better practices.

**Ps2**: Since this is a personal project to test and train my skills, I built most of the logic and code myself.

[See Website](https://aguacandy.vercel.app/)

## Tools and Languages

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)
- [Rick and Morty Api](https://rickandmortyapi.com/)
- [Tv Maze Api](https://www.tvmaze.com/api)

## Important Features

These are some of the most important features I code on this project.

**Query Strings**

To make this site work I had to put information through query strings using useParams (from react-router) and get data from that URL to fetch specific data from APIs. The site can work dynamically by URL and if you send that URL to other people they will get the same results.

**Search Filter**

This seems like an easy feature, but it was a bit more difficult than I thought. It works by sending parameters via query strings, so I had to find a solution for the following issues:

- Find a way to send all the parameters without losing the parameters already set.
- Activate styles by scanning the URL.
- Mix the name parameter with the rest of the search parameters.
- Send parameter to query strings on click a filter button and remove it clicking the same button.

**Simultaneously use of 2 Apis**

[Rick and Morty API](https://rickandmortyapi.com/) is a great API, but it doesn't have enough information to make a more complete website, especially in the episodes section.

It looked so boring with no image and just some text, so I had to find a way to make it cooler. After searching on the web, I found [Tv Maze API](https://www.tvmaze.com/api), which provides information and images on many different series, including Rick and Morty.

Through some specific logic, I found a solution to request for each episode to get the information needed to complete the episode.
