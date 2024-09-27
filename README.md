<a name="readme-top"></a>



<div align="center">
  <!-- You are encouraged to replace this logo with your own! Otherwise you can also remove it. -->
  <img src="faviconV2.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>Viral Loops</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)

<!-- PROJECT DESCRIPTION -->

# 📖 Viral Loops <a name="about-project"></a>

> Viral Loops is an innovative platform designed to streamline the creation of customizable template forms for referral marketing campaigns. With its intuitive interface and dynamic live preview feature, Viral Loops empowers marketers to craft engaging, visually appealing forms that update in real-time, allowing for instant feedback and optimization of referral program designs.

> Please view project presentation here https://app.screencastify.com/v3/watch/lLzgu30ziF9ICMO1854H


**Viral Loops** is an innovative platform designed to streamline the creation of customizable template forms

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> Frontend: 
- [Frontend Repository](https://github.com/NatanimA/viral-loops)

React.js: A popular JavaScript library for building user interfaces, providing a component-based architecture for efficient development and maintenance.
JavaScript: The primary programming language used for implementing client-side logic and interactivity.
State Management:

Redux: A predictable state container for JavaScript apps, used to manage the application's global state and data flow.
Routing:

React Router: A standard routing library for React, enabling navigation between different components and pages within the single-page application.
Styling:

Tailwind CSS: A utility-first CSS framework that allows for rapid UI development with pre-built classes, promoting consistency and customization.
Notifications:

React-Toastify: A popular library for adding toast notifications to React applications, enhancing user feedback and interaction.

> Backend:
- [Backend Repository](https://github.com/NatanimA/viral-loops-api)

Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript, adding optional static typing and other features to enhance code quality and maintainability.
Database:

MongoDB: A NoSQL database that provides high performance, high availability, and easy scalability, well-suited for storing and retrieving document-based data.

> Deployment:

AWS EC2: An Amazon Web Services cloud service that provides virtual machines (VMs) and containers that can be used to run applications and services.

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

> The Key Features are:

- **Dynamic Preview**
- **Template Building**
- **Getting Created Templates Later on for preview**
- **Interactive UI**
- **Multiple Options to Select Styles and Fonts and Many More**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> http://35.170.84.107:3000/

- [Live Demo Link](http://35.170.84.107:3000/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

> Please Follow this steps

To get a local copy up and running, follow these steps.

```sh
git clone https://github.com/NatanimA/viral-loops-api.git
```
### Prerequisites

In order to run this project you need:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [typescript](https://www.typescriptlang.org/)


### Setup

Clone this repository to your desired folder:



```sh
  cd my-folder
  git clone https://github.com/NatanimA/viral-loops-api.git
```


### Install

Install this project with:

```sh
  cd my-project
  npm install
```

### Usage

To run the project after installing dependencies, execute the following command:


```sh
  npm run dev
```


### Run tests

> No test coverages so far but to make Api requests follow this steps

> Testing POST request to Save Layouts use this API URL in POST MAN or any other tool

```sh
  http://35.170.84.107:8000/api/form/
```

- Pass this JSON data to the API

```json
{
  "title": "Customer Feedback Survey",
  "subtitle": "We value your opinion",
  "buttonText": "Submit Feedback",
  "isFirstNameRequired": true,
  "isLastNameRequired": false,
  
  "formBackground": "#f0f0f0",
  "borderRadius": "10px",
  "headingFontStyle": "Arial, sans-serif",
  "headingFontSize": "24px",
  "headingColor": "#333333",
  "isHeadingBold": true,
  "isHeadingItalic": false,
  "isHeadingUnderlined": false,
  "isHeadingCenter": true,
  "subtitleFontSize": "18px",
  "subtitleFontStyle": "Helvetica, sans-serif",
  "subtitleColor": "#666666",
  "buttonBackground": "#333333",
  "isSubtitleBold": false,
  "isSubtitleItalic": true,
  "isSubtitleUnderlined": false,
  "isSubtitleCenter": true,
  "buttonColor": "#4CAF50",
  "buttonFontSize": "16px",
  "buttonFontStyle": "Roboto, sans-serif",
  "isButtonBold": true,
  "isButtonItalic": false,
  "isButtonUnderlined": false,
  "buttonRadius": "5px"
}
```

- The API will return a success message if the data is saved


> Testing GET request to Get Layouts use this API URL in POST MAN or any other tool

```sh
  http://35.170.84.107:8000/api/form/66f55376ce3de02d8918aae7
```

- The API will return a success message if the data is saved





<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Natanim Abesha**

- GitHub: [@githubhandle](https://github.com/NatanimA/)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/natanim-abesha/)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> Features That I will be adding in the Future

- [ ] **Tracking User Records when the Join the referal links**
- [ ] **Authentication & Authorization Features**
- [ ] **Leaderboard for Referals**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> If you like this project please give it a star on [GitHub](https://github.com/NatanimA/viral-loops-api)!


<p align="right">(<a href="#readme-top">back to top</a>)</p>