import React from 'react';
import './App.css';
import LoadEmails from './LoadEmails'

class App extends React.Component
{
  constructor(props)
  {
      //passes all the properties down from the App.js file
      super(props)
      this.state = {
          emails : [],
          send : false
      };
  }
  async componentDidMount() {
      const response = await fetch('http://localhost:3001/emails/')
      const json = await response.json()
      this.setState({emails: json});
  }
  send(){

  }
  back(){
    window.location.reload(); 
  }
render() {
  if (!this.state.emails){
    return null
  }
  if (!this.state.send){
    return (
        <div className="App">
          <header className="App-header">
            <div class="topnav">
              <button class="active" onClick = {() => this.back()}>Emails</button>
              <button class="active" onClick = {() => this.send()}>Send Email</button>
            </div>
            <div>
              {<LoadEmails/>}
            </div>
          </header>
        </div>
    );    
  }
  // return(
    
  // )
}   
}

export default App