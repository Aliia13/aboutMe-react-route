import React, { Component } from "react";
import "./style.css";

export default class Homepage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <main>
            <img
              src="https://images.pexels.com/photos/11653480/pexels-photo-11653480.jpeg?cs=srgb&dl=pexels-anna-arysheva-11653480.jpg&fm=jpg"
              alt=""
            />
            <h1>Marat Gaipov</h1>
            <p>
              Seytech student, web developer - software engineer Thanks for
              visiting my site. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Minus in amet officia molestias id, omnis earum
              culpa eius neque sit. Sed vero, id quidem tenetur nesciunt quod
              nobis consectetur fugit? List of things i'm learning: HTML, CSS,
              Javascript, React
            </p>
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex, ea
              quasi illum illo ipsam natus rerum saepe nam numquam, blanditiis
              earum quisquam incidunt? Fugiat blanditiis harum vero repellat
              voluptate!
            </p>
            <h2>My Goals</h2>
            <ol>
              <li>Learning HTML/CSS</li>
              <li>Learning Javascript</li>
              <li>Learning React</li>
              <li>Finding a Software engineering job.</li>
            </ol>
          </main>
        </div>
      </>
    );
  }
}
