import './bootstrap.css';
import './index.css'
import dropdown from './components/dropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Final Portfolio</h1>
          <h2>Bridget Griswold</h2>
          </header>
      <div class="container">
        <div class="row" id="shelter-div">
          <div class="col-5" id="shelter"></div>
          <div class="col-7">
            <div>
              <h1>Animal Shelter Project</h1>
              <h3><h2>Context </h2>To practice the functionality of JavaScript, I made this project, 
              challenging myself to include components, working buttons, an adjustable cart, filters,
              and more! The site could be of any theme, but as I love dogs, I chose to create an animal shelter.</h3>
              <h3><h2>Process </h2>
                <li>I began the creation of my shelter starting with the data, addings 12 different dog 
                profiles to a data file. </li>
                <li> With all of the dog data prepared, I could easily build the grid, displaying each 
                  of the 12 dogs and their information.</li>
                <li>I added a "cart" by which I could add and remove dogs, using react buttons.</li>
                <li>Finally, I implemented sorting and filtering functionality, using toggle buttons!</li>
              </h3>
              <h3><h2>Findings </h2>
                <li>I leared a lot about react through by time building this website. This was my first 
                  experience working with react. </li>
                <li>I chose to build an animal shelter to highlight the importance of adopting dogs from
                   selters, as many dogs are left without homes. </li>
              </h3>
            </div>
            
            <dropdown></dropdown>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row" id="storyboard-div">
          <div class="col-6">
          <h1>Storyboarding Project</h1>
              <h3><h2>Context: </h2>In order to learn more about User Interfaces / User Experience class, I was 
              tasked to chose and observe user interactions with any physical interface in real life. Through
              these observations, I should note (and then draw) how the user interacted with the interface. This 
              site records my observations, user interview questions, and findings. </h3>
              <h3><h2>Process </h2>
                <li>This idea started with observations, in watching individuals interact with the Ceremony Tea 
                  'Toast' checkout device. </li>
                <li> Following my observations, I was able to build user personas and depict them through 
                  drawings and character personas.</li>
                <li>To learn about how users felt about the checkout process at Ceremony Tea, I 
                  conducted interviews and recorded my findings on my site. </li>
              </h3>
              <h3><h2>Findings </h2>
                <li>Storyboarding is a wonderful and effective way to track a user's experience with 
                  a product! </li>
                <li>Observing is really fun! But experience some awkward moments of people confused
                  why I was staring at them so much. </li>
              </h3>
          </div>
          <div class="col-6" id="storyboards"></div>
        </div>
      </div>
      <div class="container">
        <div class="row" id="charity-div">
          <div class="col-5" id="charity"></div>
          <div class="col-7">
            <h1>Website Redesign</h1>
            <h3><h2>Context: </h2>This website was made as an iteration of a poorly made website I 
            have previously encountered, which I believed needs improvements. I used a chairty website 
            I had used in high school, and remembered how poor the user experience was. Thus, I built 
            this project to improve upon the currently published Assistance Leauge website. </h3>
            <h3><h2>Process </h2>
                <li>I first studied the content and layout of the site I was going to rebuild. Once I 
                  had a thorough understanding of the website, I could iterate and improve from there. </li>
                <li> I began my rebuilding process with low-fi and high-fi sketches. </li>
                <li>I used a navbar to allow for easy navigation between the different pages of the website. </li>
                <li>My focus for the website redesign was simplification. I aimed to make it easier and faster 
                  for new users to understand the website's purpose and elements.</li>
              </h3>
              <h3><h2>Findings </h2>
                <li>While time-consuming, creating low-fi and high-fi sketches before building your site  
                  with code is extremely useful!  </li>
                <li>Oftentimes, simple is better! I was proud in my ability to make the website more 
                  effective then the origional, with less mess and fewer words. </li>
              </h3>
            </div>
        </div>
      </div>
      <div class="container">
        <div class="row" id="yhangry-div">
          <div class="col-6">
           <h1>Startup Website on Figma</h1>
            <h3><h2>Context: </h2>Along with 3 teammates, we chose a startup concept we were excited 
            about, which was yhangry, a British private-chef service. Before viewing the yhangry site, 
            only with knowledge about what the company does, we challenged outselves to create an 
            interactive Figma which could be used as the website of our chosen startup.  </h3>
            <h3><h2>Process </h2>
                <li>In order for this project to be successful, we first needed to understand the purpose 
                  and mission of the company. Thus, we started with thorough research on our chosen startup. </li>
                <li>My 3 team members and I each created low-fi sketches of what we thought the site should 
                  look like. From there, we worked together to create a consolidated plan. </li>
                <li>We worked together on an interactive Figma site, adding pages and navigation between each. </li>
              </h3>
              <h3><h2>Findings </h2>
                <li>Success in a project is going to take many iterations! My team and I learned so much 
                  from eachother in order to make this website great, and also from feedback from others in 
                  our UI/UX class.
                </li>
                <li>Making iteractive Figmas is an easy and great way to craft a website. Figma has so many 
                  great features and functionality components I had not known about before this project. </li>
              </h3>
          </div>
          <div class="col-6" id="yhangry"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
