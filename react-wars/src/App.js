import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {

  render() {
    return (
      <div>
        <Button className="btn" id="" text="OK" action={()=> alert('Click')}/>
      </div>
    );
  }
}

export default App;
