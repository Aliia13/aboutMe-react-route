import React, { Component } from "react";

export default class Tools extends Component {
  render() {
    return (
      <>
        <div className="container">
          <main>
            <h1>Essential Front End web development tools</h1>
            <tbody>
              <tr>
                <th>Tools</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>Code Editors</td>
                <td>
                  <p>
                    As a developer, you spend most of your day in your code
                    editor because itвЂ™s the place you actually write the code
                    for your sites. All editors provide the plain text format
                    needed for your code to be interpreted as a website.
                  </p>
                  <p>
                    Our favorite editor, VS Code, streamlines your work by
                    letting you customize it with thousands of add-on features,
                    functions, and themes so the tool you use most looks and
                    works exactly the way you want. Atom was built by Microsoft.
                  </p>
                </td>
              </tr>
              <tr>
                <td>Version Control Systems</td>
                <td>
                  <p>
                    Even if youвЂ™re freelancing, but especially if youвЂ™re
                    part of a team, you need a reliable version control system
                    to keep track of all the changes you make to your code over
                    time. Trust us, at some point youвЂ™ll need to check or even
                    revert to an earlier version of your code base!
                  </p>
                  <p>
                    Git is a decentralized version control system which allows
                    everyone on your team to work with the same files in the
                    same project simultaneously without worrying that you might
                    be overwriting someoneвЂ™s work. It gives developers more
                    freedom to work whenever and wherever since everyone has a
                    local copy of the code.
                  </p>
                </td>
              </tr>
              <tr>
                <td>Front end assets</td>
                <td>
                  <p>
                    Once youвЂ™ve made a solid start setting up the code for
                    your site, youвЂ™ll want to be sure itвЂ™s savvy-looking
                    too. By selecting some stunning front-end assets like fonts,
                    icons, photos, and graphics, you can transform any site from
                    boring to beautiful.
                  </p>
                  <p>
                    Google Fonts is our favorite front-end asset for the
                    incredible selection it provides for your site typography.
                    And Font Awesome is, well, awesome for the vast array of
                    icons it offers (1,000+ for free and 7,000+ on the paid
                    plan). Similarly, Unsplash boasts more than 800,000
                    high-resolution stock photos you can use, all at no charge
                    and with no copyright hassles.
                  </p>
                </td>
              </tr>
              <tr>
                <td>Front End Frameworks</td>
                <td>
                  <p>
                    Speaking of looking good, front-end frameworks are another
                    must-have for front-end developers! Front-end frameworks are
                    packages of files for styling and laying out your websites.
                    Frameworks are made up of ready-made navigation menus,
                    buttons, forms, typography, and other assets so you donвЂ™t
                    have to write all that code yourself.
                  </p>
                </td>
              </tr>
              <tr>
                <td>CSS preprocessor</td>
                <td>
                  <p>
                    CSS is a style sheet language used for styling your web
                    pages. And you can make creating a beautiful site with CSS
                    even simpler with preprocessors. A CSS preprocessor is
                    basically a language that, after itвЂ™s processed, gives you
                    even more CSS features. A preprocessor also lets you write
                    code thatвЂ™s easier to read, maintain, and shareвЂ”all
                    vital for working on a developer team or even on your own.
                  </p>
                </td>
              </tr>
              <tr>
                <td>Javascript Frameworks / Libraries</td>
                <td>
                  <p>
                    JavaScript libraries are collections of code that make your
                    sites interactive, provide better browser support, and add
                    effects like animations, blog post tags, and auto-completing
                    form fields.
                  </p>
                  <p>
                    Like libraries, JavaScript frameworks can simplify your
                    front-end development workflow. But frameworks differ from
                    libraries in that frameworks provide the overall structure
                    (or framework) for sites using JavaScript, while libraries
                    focus on one or more specific aspects of a site.
                  </p>
                </td>
              </tr>
              <tr>
                <td>Developer Tools</td>
                <td>
                  <p>
                    As you build your sites, often youвЂ™ll want to make
                    modifications and test how they look вЂњliveвЂќ in your
                    browser before committing the changes. You can do all this
                    with developer tools, often called dev tools for short.
                  </p>
                  <p>
                    Dev tools are a function built into modern web browsers that
                    let you see the code behind each section of a site right in
                    the browser with just a few clicks. (Hint: dev tools also
                    let you peek at the code behind any website so theyвЂ™re
                    also a great way to learn a thing or two from other
                    developers.)
                  </p>
                </td>
              </tr>
              <tr>
                <td>Online Coding Environments</td>
                <td>
                  <p>
                    Coding environments are sites that allow you to write code
                    in an online editor and see the results immediately right
                    next to your code. These platforms are a fast and useful way
                    for developers to experiment and learn from other developers
                    in the same environment.
                  </p>
                  <p>
                    CodePen is the most diverse online coding environment in
                    that you can write HTML, CSS, and JavaScript, and even try
                    out those libraries and frameworks you were just reading
                    about.
                  </p>
                </td>
              </tr>
            </tbody>
          </main>
        </div>
      </>
    );
  }
}
