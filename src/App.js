import './App.css';
import './bootstrap.css';
import './index.css'

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
          <div class="col-5">
            <div>
              <h1>Animal Shelter Project</h1>
              <h3><h2>Context: </h2>To practice the functionality of JavaScript, I made this project, 
              challenging myself to include components, working buttons, an adjustable cart, filters,
              and more! The site could be of any theme, but as I love dogs, I chose to create an animal shelter.</h3>
            </div>
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
          </div>
          <div class="col-6" id="storyboards"></div>
        </div>
      </div>
      <div class="container">
        <div class="row" id="charity-div">
          <div class="col-5" id="charity"></div>
          <div class="col-5">
          <h3><h2>Context: </h2>This website was made as an iteration of a poorly made website I 
          have previously encountered, which I believed needs improvements. I used a chairty website 
          I had used in high school, and remembered how poor the user experience was. Thus, I built 
          this project to improve upon the currently published Assistance Leauge website. </h3>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row" id="yhangry-div">
          <div class="col-6">
            <h3><h2>Context: </h2>Along with 3 teammates, we chose a startup concept we were excited 
            about, which was yhangry, a British private-chef service. Before viewing the yhangry site, 
            only with knowledge about what the company does, we challenged outselves to create an 
            interactive Figma which could be used as the website of our chosen startup.  </h3>
          </div>
          <div class="col-6" id="yhangry"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
