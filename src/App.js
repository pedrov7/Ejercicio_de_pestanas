import { useState } from 'react';
import './App.css';
import { ComponentesEstilizados } from './components/ComponentesEstilizados';

function App() {


  const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"];

  const [_actualTab, _setActualTab] = useState("Tab 1");


  const actualTab = (clickActualTab) => {
    // console.log(clickActualTab);
    _setActualTab(clickActualTab);


  }




  return (
    <div className="container-sm">

      <ul className="nav nav-tabs">
        <ComponentesEstilizados sendTabs={tabs} sendActualTab={actualTab} />
      </ul>


      {/* <nav class="navbar navbar-light bg-dark"> */}
      <nav class="navbar navbar-light" style= {{backgroundColor: 'gray'}}>
        <div class="container-fluid">
          <span class="navbar-text">

            <div className="card-body">
              <h5 className="card-title">{_actualTab} content is showing here</h5>
            </div>

          </span>
        </div>
      </nav>





    </div>
  );
}

export default App;
