import './bootstrap.css';
import './index.css'
import React, { useState } from 'react';

function App() {

  return (
    <div className="App" id="App">
      <header className="App-header">
      <h1 id="headerText">Final Portfolio</h1>
        <h3>ChillyCobra747</h3>
        </header>
      <nav class="navbar navbar-expand-sm navbar-light bg-white">
        <div class="container-fluid d-flex flex-column"> 
          <a class="navbar-brand" href="#"></a> 
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="navbar-item"><a href="#shelter-div" class="nav-link">
                <h5>Animal Shelter</h5>
                <img class="nav-img" src="images/shelter.png"/></a></li>
              <li class="navbar-item"><a href="#storyboard-div" class="nav-link">
                <h5>Ceremony Tea Storyboarding</h5>
                <img class="nav-img" src="images/storyboards.png"/></a></li>
              <li class="navbar-item"><a href="#charity-div" class="nav-link">
                <h5>Charity Website Redesign</h5>
                <img class="nav-img" src="images/charity.png"/></a></li>
              <li class="navbar-item"><a href="#yhangry-div" class="nav-link">
                <h5>Startup Interactive</h5>
                <img class="nav-img" src="images/yhangry.png"/></a></li>
            </ul>
          </div>
       </div>
      </nav>
      <div class="container">
        <div class="row" id="shelter-div">
          <a href="https://chillycobra747.github.io/development_main"><h1>Animal Shelter Project</h1></a>  
          <div class="row">
           <div class="col-3"> <img id="icons" class="grow" src="images/puppy.png"/> </div>
           <div class="col-9"><h3> <h2>Context </h2>
              <li>Key Concepts: JavaScript, website development, components, React </li>
              <li>Purpose: This project introduced the concepts of components and functions in JavaScript. 
                In building this project, I challenged myself to include components, working buttons, an 
                adjustable cart, filters, and more! The site could be of any theme, but as I love dogs, 
                I chose to create an animal shelter. I hoped that the theme of this site would encourage others
                to adopt animals from shelters. 
              </li>
              </h3></div>
          </div>
          <div class="row">
            <div class="col-7"><h3> <h2>Process </h2>
                <ol>
                <li>I began the creation of my shelter by downloading npm and react so that I could
                  make functions and exciting interactions the site. </li>
                  <li>To create the backend of my shelter, I started with the data, addings 12 different dog 
                  profiles to a data file. </li>
                  <li> With all of the dog data prepared, I could easily build the grid, displaying each 
                    of the 12 dogs and their information.</li>
                  <li>I added a "cart" by which I could add and remove dogs, using react buttons.</li>
                  <li>Finally, I implemented sorting and filtering functionality, using toggle buttons.</li>
                </ol>
                <li>Interesting Lesson: Buttons can act as "triggers" in React by changing the current state 
                  (useState by React) of a variable to alter an element of your website! </li>
                <li>Idea from Findings: This site could be expanded to include videos of the available dogs, making users
                  even more excited and hopeful to purchase an in-need shelter dog.  </li>
              </h3></div>
           <div class="col-5"> <img src="images/shelter-cart.png" class="process-img"/> </div>
          </div>
          <div class="row">
            <div class="col-7">
              <a href="https://chillycobra747.github.io/development_main"><img class="grow" src="images/shelter.png"/></a>  
              <h3>hover and click to visit site</h3>  
            </div>
           <div class="col-5"><h3><h2>Findings & Connection </h2>
                <li>Personal Relation: I have adopted 2 dogs from shelters, and I care deeply about helping
                  more animals in shelters find safe homes. I chose to build an animal shelter to highlight the importance of adopting dogs from
                   selters, as many dogs are left without homes. </li>
                <li>I leared a massive amount about React through by time building this website. This was my first 
                  experience working with React and I had a lot of fun with it! </li>
                </h3> 
                <div class="col-5"> <img src="images/moving-dog.png" class="moving-img"/> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row" id="storyboard-div">
        <a href="https://chillycobra747.github.io/storyboards/"><h1>Ceremony Tea Storyboarding</h1></a>  
        <div class="row">
          <div class="col-3"> <img id="icons" class="grow" src="images/coffee.png"/> </div>
          <div class="col-9"><h3><h2>Context </h2>
            <li>Key Concepts: user interviews, creating accessable interfaces, user personas, interface sketches  </li>
            <li>Purpose: To better learn how to step into a users shoes, improving my user design abilities.
              This taught me how to observe users interacting with an interface, interview effectively, 
              create and explain user personas, and build storyboards. The project introduced important concepts 
              for the start of my User Interfaces / User Experience class at Brown Univeristy. I was 
            tasked to chose and observe user interactions with any physical interface in real life. Through
            these observations, I should note (and then draw) how the user interacted with the interface. This 
            site records my observations, user interview questions, and findings. </li>
            </h3></div>
          </div>
          <div class="row">
            <div class="col-7"><h3> <h2>Process </h2>
                <ol>
                <li>This idea started with observations, in watching individuals interact with the Ceremony Tea 
                  'Toast' checkout device.  </li>
                <li>Once I selected the interface I would study, I went to its location and observed how 
                  various users interacted with it. </li>
                <li> While observing, I began to identify similarities and differences between the interactions, 
                  developing a set of user personas.  </li>
                <li>I charted the user personas on my website, practicing how to create detailed character descriptions. </li>
                <li> To learn about how users felt about the checkout process at Ceremony Tea, I conducted interviews and recorded my findings.</li>
                </ol>
                <li>Interesting Lesson: You can learn a lot from observing individuals around you. I spend so much time on my 
                  devices, I forget to pay attention to the people around me. This assignment was a wonderful lesson about context awareness. </li>
                <li>Idea from Findings: Because of the amount I learned from storyboarding, I should watch users 
                  interact with every website I build, making improvements from these observations. </li>
              </h3></div>
           <div class="col-5"> <img src="images/story-drawings.png" class="process-img"/> </div>
          </div>
          <div class="row">
            <div class="col-6">
              <a href="https://chillycobra747.github.io/storyboards/"><img class="grow" src="images/storyboards.png"/></a>  
              <h5>hover and click to visit site</h5>      
            </div>
            <div class="col-6"><h3><h2>Findings & Connection </h2>
                  <li>Personal Relation: I regularly visit the coffee/shop which I studied the interface from. It was 
                    so interesting to see how various user personas interacted different with the interface than 
                    I had in the past, and to think about how different features are important to different groups.  </li>
                  <li> UI / UX designs are everywhere around us! Sometimes I forget how much time and thought went into
                     all the products I use every single day (and how even the most advanced ones can always be improved).
                  </li>
                  </h3> 
                  <div class="col-5"> <img src="images/donut.png" class="moving-img"/> </div>
              </div>
            </div>
            
        </div>
      </div>
      <div class="container">
        <div class="row" id="charity-div">
        <a href="https://chillycobra747.github.io/al-website/"><h1>Charity Website Redesign</h1></a>  
          <div class="row">
          <div class="col-3"> <img id="icons" class="grow" src="images/charity-icon.png"/> </div>
          <div class="col-9"><h3><h2>Context </h2>
            <li>Key Concepts: user interviews, creating accessable interfaces, user personas, interface sketches  </li>
            This website was made as an iteration of a poorly made website I 
            have previously encountered, which I believed needs improvements. I used a chairty website 
            I had used in high school, and remembered how poor the user experience was. Thus, I built 
            this project to improve upon the currently published Assistance Leauge website. 
            <li>Purpose: To learn the process of building an entire website. This includes making low
              fidelity and high fidelity prototypes, choosing website themes and colors. This project 
              taught me how to identify accessability and user experience issues on websites, and how to fix
              these issues with my designs and code. 
            </li></h3></div>
          </div>
          <div class="row">
            <div class="col-7"><h3> <h2>Process </h2>
                <ol>
                <li>I first studied the content and layout of the site I was going to rebuild. Once I 
                  had a thorough understanding of the website, I could iterate and improve from there. </li>
                <li> I began my rebuilding process with low-fi and high-fi sketches. </li>
                <li>I used a navbar to allow for easy navigation between the different pages of the website. </li>
                <li>My focus for the website redesign was simplification. I aimed to make it easier and faster 
                  for new users to understand the website's purpose and elements.</li>
                  </ol>
                <li>Interesting Lesson: You can learn a lot from observing individuals around you. I spend so much time on my 
                  devices, I forget to pay attention to the people around me. This assignment was a wonderful lesson about context awareness. </li>
                <li>Idea from Findings: Because of the amount I learned from storyboarding, I should watch users 
                  interact with every website I build, making improvements from these observations. </li>
              </h3></div>
           <div class="col-5"> <img src="images/wireframes.png" class="process-img"/> </div>
          </div>
          <div class="row">
            <div class="col-6">
              <a href="https://chillycobra747.github.io/al-website/"><img class="grow" src="images/charity.png"/></a>  
              <h5>hover and click to visit site</h5>      
            </div>
            <div class="col-6"><h3><h2>Findings & Connection </h2>
                  <li>Personal Relation:While time-consuming, creating low-fi and high-fi sketches before building your site  
                  with code is extremely useful!  </li>
                  <li> Oftentimes, simple is better! I was proud in my ability to make the website more 
                  effective then the origional, with less mess and fewer words.
                  </li>
                  </h3> 
                  <div class="col-5"> <img src="images/donate.png" class="moving-img"/> </div>
              </div>
            </div>
        </div>
      </div>
      <div class="container"> 
        <div class="row" id="yhangry-div"> 
        <a href="https://exhaustedpanda557.github.io/iterativeDesign/"><h1>Startup Website on Figma</h1></a>  
        <div class="row">
          <div class="col-3"> <img id="icons" class="grow" src="images/chef.png"/> </div>
          <div class="col-9"><h3><h2>Context </h2>
            Along with 3 teammates, we chose a startup concept we were excited 
            about, which was yhangry, a British private-chef service. Before viewing the yhangry site, 
            only with knowledge about what the company does, we challenged outselves to create an 
            interactive Figma which could be used as the website of our chosen startup.  
            <li>Purpose: This project was focused on teamwork! Additionally, we learned more about startups, 
              and how an entrepreneurial team can build a website based on their startup concept. This 
              project also sought to teach me how to use figma, especially the interactive elements which 
              all for prototypes of websites, before they are coded technically. 
            </li> </h3></div>
          </div>
          <div class="row">
            <div class="col-7"><h3> <h2>Process </h2>
              <ol>
              <li>In order for this project to be successful, we first needed to understand the purpose 
                  and mission of the company. Thus, we started with thorough research on our chosen startup. </li>
                <li>My 3 team members and I each created low-fi sketches of what we thought the site should 
                  look like. From there, we worked together to create a consolidated plan. </li>
                <li>We worked together on an interactive Figma site, adding pages and navigation between each. </li>
              </ol>
              <li>Interesting Lesson: Success in a project is going to take many iterations! My team and I learned so much 
                  from eachother in order to make this website great, and also from feedback from others in 
                  our UI/UX class.</li>
              <li>Idea from Findings: Making iteractive Figmas is an easy and great way to craft a website. Figma has so many 
                great features and functionality components I had not known about before this project. </li>
              </h3></div>
           <div class="col-5"> <img src="images/dishes.png" class="process-img"/> </div>
          </div>
          <div class="row">
            <div class="col-6">
              <a href="https://exhaustedpanda557.github.io/iterativeDesign/"><img class="grow" src="images/yhangry.png"/></a>  
              <h5>hover and click to visit site</h5>      
            </div>
            <div class="col-6"><h3><h2>Findings & Connection </h2>
                  <li>Personal Relation: xxx  </li>
                  <li> xxx
                  </li>
                  </h3> 
                  <div class="col-5"> <img src="images/pot.png" class="moving-img"/> </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
