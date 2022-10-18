import React, { Component } from "react";

export default class MyChoices extends Component {
  render() {
    return (
      <>
        <h1>My choices for web development tools</h1>
        <ol>
          <li>
            Code Editors
            <ul>
              <li>
                <a target="_blank" href="https://atom.io/">
                  Atom
                </a>
              </li>
              <li>
                <a target="_blank" href="https://code.visualstudio.com/">
                  <strong>VS Code</strong>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.sublimetext.com/">
                  Sublime
                </a>
              </li>
            </ul>
          </li>
          <li>
            Version Control Systems
            <ul>
              <li>
                <a target="_blank" href="https://git-scm.com/">
                  <strong>Git</strong>
                </a>
              </li>
              <li>
                <a target="_blank" href="http://subversion.apache.org/">
                  SVN
                </a>
              </li>
            </ul>
          </li>
          <li>
            Version end asset
            <ul>
              <li>
                <a target="_blank" href="https://fonts.google.com/">
                  <strong>Google Fonts</strong>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://fontawesome.com/">
                  Font Awesome
                </a>
              </li>
            </ul>
          </li>
          <li>
            Front end frameworks
            <ul>
              <li>
                <a target="_blank" href="https://getbootstrap.com/">
                  <strong>Bootstrap</strong>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://material-ui.com/">
                  <strong>Material UI</strong>
                </a>
              </li>
            </ul>
          </li>
          <li>
            CSS preprocessor
            <ul>
              <li>
                <a target="_blank" href="https://sass-lang.com/">
                  <strong>SASS</strong>
                </a>
              </li>
              <li>
                <a target="_blank" href="http://lesscss.org/">
                  LESS
                </a>
              </li>
            </ul>
          </li>
          <li>
            Javascript Frameworks / Libraries
            <ul>
              <li>
                {" "}
                <a target="_blank" href="https://reactjs.org/">
                  <strong>React</strong>
                </a>
              </li>
              <li>
                {" "}
                <a target="_blank" href="https://angularjs.org/">
                  Angular
                </a>
              </li>
              <li>
                {" "}
                <a target="_blank" href="https://vuejs.org/">
                  Vue.js
                </a>
              </li>
              <li>
                {" "}
                <a target="_blank" href="https://jquery.com/">
                  jQuery
                </a>
              </li>
            </ul>
          </li>
          <li>
            Developer Tools
            <ul>
              <li>
                <a
                  href="https://developers.google.com/web/tools/chrome-devtools"
                  target="_blank"
                >
                  <strong>Chrome Dev Tools</strong>
                </a>{" "}
              </li>
              <li>Firefox Web Inspector</li>
              <li>Safari Web Inspector</li>
            </ul>
          </li>
          <li>
            Online Coding Environments
            <ul>
              <li>
                <a href="https://codepen.io" target="_blank">
                  <strong>Codepen</strong>
                </a>{" "}
              </li>
              <li>
                <a href="https://repl.it/" target="_blank">
                  <strong>Repl</strong>
                </a>{" "}
              </li>
            </ul>
          </li>
          <li>
            Other Tools:
            <ul>
              <li>Terminal</li>
              <li>Github</li>
            </ul>
          </li>
        </ol>
      </>
    );
  }
}
