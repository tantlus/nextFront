import React from 'react';
import './App.css';

function App() {
  return (
      <div class="ui equal width grid">
        <div class="row">
          <div class="column">
            <div class="ui segment">
              1
            </div>
            <div class="ui segment">
              2
            </div>
          </div>
          <div class="eight wide column">
            <div class="ui segment">
              bb
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              3
            </div>
            <div class="ui segment">
              4
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
