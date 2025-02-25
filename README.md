
# Rick and Morty (React Version)


![Portada](https://raw.githubusercontent.com/dario-chic/react-rick-and-morty/refs/heads/main/banner.webp)
![Badge](https://img.shields.io/badge/Status-Finished-brightgreen)
![Badge](https://img.shields.io/badge/License-MIT-blue)
## Table of contents

- [Description](#description)
- [Main features](#main-features)
- [Tech Stack](#tech-stack)
- [How to use](#how-to-use)
- [Live demo](#live-demo)
- [Contribution](#contribution)
- [License](#license)

## Description

This project was a website designed to explore and display detailed information about the **Rick and Morty** series. While the design was not the main focus, the development emphasized logic and functionality, allowing me to implement advanced technical features and improve my skills as a developer.

_💡This project represents where I started with React. Looking back, I see areas for improvement, but it was instrumental in shaping my understanding of web development. Today, I approach projects with more experience, better practices, and a sharper focus on performance and scalability._

## Main Features

### Query Strings

To make the site dynamic, I implemented  **query strings**  using  `useParams`  from React Router. This allowed the URL to fetch specific data from APIs, ensuring that users sharing the same URL would see identical results. This feature enhanced the site's interactivity and usability.

### Search Filter

The search filter was more challenging than anticipated. It required solving several issues:
-   Preserving existing parameters while adding new ones.
    
-   Dynamically applying styles based on the URL.
    
-   Combining the  `name`  parameter with other search filters.
    
-   Adding or removing parameters from the query string when clicking filter buttons.
    

This feature improved the user experience by making the search functionality more intuitive and flexible.

### Dual API Integration

While the  **Rick and Morty API**  provided a solid foundation, it lacked sufficient detail, especially for the episodes section. To enhance the site, I integrated the  **TV Maze API**, which provided additional information and images for each episode. By implementing specific logic, I was able to fetch and display complementary data, making the episodes section more engaging and visually appealing.


## Tech Stack

- **Frontend:** 
	- [React](https://reactjs.org/)
	- [Javascript ECS6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
	- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
	- [Sass](https://sass-lang.com/)
	- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
	
- **APIs / Tools:**
	- [Rick and Morty Api](https://rickandmortyapi.com/)
	- [Tv Maze Api](https://www.tvmaze.com/api)
	- [Fontawesome](https://fontawesome.com/)

## How to use

1. Clone the repository:
   ```bash
   git clone https://github.com/dario-chic/react-rick-and-morty.git
   ```
2. Navigate to the project folder:
   ```bash
   cd react-rick-and-morty
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
 ```bash
   npm run dev
   ```

## Live Demo

[See live demo](https://react-rick-and-morty-psi.vercel.app/)

## Contribution

Contributions are welcome! If you have ideas to improve this project, find a bug, or simply want to add a new feature, feel free to open an issue or submit a pull request. Thank you for your interest in contributing!

1. Fork the project.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License 📜
Distributed under the [MIT License](https://opensource.org/licenses/MIT). See LICENSE.txt for more information.

---

Made with ❤️ by [Dario Chic](https://github.com/dario-chic)  
📧 Contact me: [contact@dariochic.dev](mailto:contact@dariochic.dev)  
🔗 [LinkedIn](https://www.linkedin.com/in/dariochic/) | [Portfolio](https://dariochic.dev)
