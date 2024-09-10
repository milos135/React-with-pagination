import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Project</h1>
      <p>
        This is a simple e-commerce application built with React, which fetches
        product data from an external API and displays it in a paginated format.
        Users can browse through a collection of 100 products, with pagination
        that allows them to view 10 products per page.
      </p>
      <p>
        The application uses modern React features like functional components,
        hooks (`useState`, `useEffect`), and React Router for navigating between
        pages. The project also demonstrates the implementation of asynchronous
        API calls and basic state management within React.
      </p>
      <p>Technologies used in this project:</p>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>JavaScript (ES6+)</li>
        <li>CSS for styling</li>
        <li>DummyJSON API for fetching product data</li>
      </ul>
    </div>
  );
};

export default About;
