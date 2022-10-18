import React, { Component } from "react";

export default class Websites extends Component {
  render() {
    return (
      <>
        <h1>Websites to follow:</h1>
        <table border="1">
          <tbody>
            <tr>
              <th>Websites</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>
                <a target="_blank" href="https://www.freecodecamp.org/">
                  Seytech Portal
                </a>
              </td>
              <td>Our interactive learning and tracking platform.</td>
            </tr>
            <tr>
              <td>
                <a target="_blank" href="https://www.freecodecamp.org/">
                  FreeCodecamp
                </a>
              </td>
              <td>
                Online interactive platform that offers free coding classes.
              </td>
            </tr>
            <tr>
              <td>
                <a target="_blank" href="https://www.codecademy.com/learn">
                  Codeacademy
                </a>
              </td>
              <td>
                Online interactive platform that offers free coding classes in
                12 different programming languages.
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://stackoverflow.com/search?q=how+to+import+css++into+html"
                >
                  Stack Overflow
                </a>
              </td>
              <td>
                Stack Overflow is a question and answer site for professional
                and enthusiast programmers.{" "}
              </td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://medium.com/better-programming/top-10-programming-blogs-in-2020-dda86feead1f"
                >
                  Medium
                </a>
              </td>
              <td>A website to read blogs about programming.</td>
            </tr>
            <tr>
              <td>
                <a target="_blank" href="https://www.quora.com/">
                  Quora
                </a>
              </td>
              <td>A website to read blogs about almost anything.</td>
            </tr>
            <tr>
              <td>
                <a
                  target="_blank"
                  href="https://www.youtube.com/results?search_query=html+learning+projects"
                >
                  Youtube
                </a>
              </td>
              <td>Tutorial to follow and practice.</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
