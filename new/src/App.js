import React, { Component } from 'react';
import logo from './favicon.ico';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div class="container">
          <div class="row">
            <div class="column">
              <br />
              <strong>Mobile</strong>
              <a href="tel:08884713695"> 08884713695</a>
              <br />
              <strong>Email</strong>
              <a href="mailto:joydeep4jobs@gmail.com"> joydeep4jobs@gmail.com</a>
              <br />
              <strong>LinkedIn</strong>
              <a href="https://www.linkedin.com/in/joydeeproy87/"> linkedin.com/in/joydeeproy87/</a>
              <br />
              <strong>Github</strong>
              <a href="https://github.com/joydeeproy87"> github.com/joydeeproy87</a>
              <br />
              <br />
              <br />
            </div>
          </div>

          <div class="row">
            <div class="column">
              <h2>JOYDEEP ROY - UI / UX Developer / Web Developer - 7+ Years</h2>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="column">
              <h3>Experience Summary</h3>
              <ul>
                <li>Having total of 7+ years experience in IT industry (5+ years) and Design industry (2 years).</li>
                <li>
                  <span class="badge badge-primary">HTML5</span>,
                  <span class="badge badge-primary">CSS3</span>,
                  <span class="badge badge-primary">JavaScript</span>,
                  <span class="badge badge-primary">AngularJS(1.x)</span>,
                  <span class="badge badge-primary">ES6</span>,
                  <span class="badge badge-primary">jQuery</span>,
                  <span class="badge badge-primary">Bootstrap</span>,
                  <span class="badge badge-primary">Git</span>,
                  <span class="badge badge-primary">Sass</span>,
                  <span class="badge badge-primary">Milligram</span>,
                  <span class="badge badge-primary">WordPress</span>,
                  <span class="badge badge-primary">PHP</span> &amp;
                  <span class="badge badge-primary">MySQL</span>.
                </li>
                <li>
                  <span class="badge badge-primary">Search Engine Optimization</span> (SEO),
						<span class="badge badge-primary">Google Analytics</span>,
						<span class="badge badge-primary">Google Search Console</span>.</li>
                <li>
                  <span class="badge badge-primary">Adobe Creative Suite</span> (Illustrator, Photoshop, Fireworks, Premiere Pro, InDesign).</li>
                <li>Having good analytical, problem-solving skills, ability to meet deadlines and work on multiple projects.</li>
                <li>A highly motivated team player with an ability to quickly adapt to new environments.</li>
                <li>Enthusiastic in working with new technologies and new applications.</li>
              </ul>
              <br />
            </div>
          </div>

          <div class="row">
            <h3>Professional Work Experience</h3>
            <table class="table">
              <tbody>
                <tr>
                  <td>Workplace Options, Bangalore</td>
                  <td>April 2018 - Till Date</td>
                  <td id="totExp"></td>
                </tr>
                <tr>
                  <td>Sobha Ltd, Bangalore</td>
                  <td>July 2015 - April 2018</td>
                  <td>2.9 Years</td>
                </tr>
                <tr>
                  <td>Zyoin, Bangalore</td>
                  <td>July 2013 - July 2015</td>
                  <td>2 Years</td>
                </tr>
                <tr>
                  <td>Infoinsight Software Solutions, Bangalore</td>
                  <td>Nov 2011 - July 2013</td>
                  <td>1.8 Years</td>
                </tr>

              </tbody>
            </table>

          </div>

          <br />
          <div class="row">
            <h3>Project Highlights</h3>
            <table class="table">
              <tbody>
                <tr>
                  <td>
                    <a href="http://www.apt212.com" target="blank">www.apt212.com</a>
                  </td>
                  <td>Created the front-end using HTML, CSS, AngularJS (v1.6), jQuery and Bootstrap.</td>
                </tr>
                <tr>
                  <td>
                    <a href="http://www.cookbooth.com" target="blank">www.cookbooth.com</a>
                  </td>
                  <td>Created the UI using AngularJS (v1.2), HTML5, CSS3, jQuery and Bootstrap.</td>
                </tr>
                <tr>
                  <td>
                    <a href="http://www.phatbuddhawear.com" target="blank">www.phatbuddhawear.com</a>
                  </td>
                  <td>Created the front-end of this E-commerce based website using HTML5, CSS3, Bootstrap and jQuery.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />
          <div class="row">
            <h3>Qualification</h3>

            <table class="table">
              <tbody>
                <tr>
                  <td>B.TECH</td>
                  <td>2010</td>
                  <td>72%</td>
                </tr>
                <tr>
                  <td>HSC</td>
                  <td>2006</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>SSC</td>
                  <td>2004</td>
                  <td>69%</td>
                </tr>

              </tbody>
            </table>
            <br />
          </div>
          <div class="row">
            <h3>Declaration</h3>

            <p>I hereby declare that the above mentioned information is correct up to my knowledge and I bear the responsibility for
					the correctness of above mentioned particulars.</p>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
