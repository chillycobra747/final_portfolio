import './App.css';
import './bootstrap.css';
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Portfolio</h1>
          <h1>Bridget Griswold</h1>
          </header>
      <div class="container">
        <div class="row" id="shelter-div">
          <div class="col-5" id="shelter"></div>
          <div class="col-5">
            2 of 3 (wider)
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row" id="storyboard-div">
          <div class="col-6">
            2 of 3 (wider)
          </div>
          <div class="col-6" id="storyboards"></div>
        </div>
      </div>
      <div class="container">
        <div class="row" id="charity-div">
          <div class="col-5" id="charity"></div>
          <div class="col-5">
            2 of 3 (wider)
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row" id="yhangry-div">
          <div class="col-6">
            2 of 3 (wider)
          </div>
          <div class="col-6" id="yhangry"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
