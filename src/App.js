import React, { Component } from 'react';
import UserInfo from './Components/user-info';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        person: [
          { name: 'Dabin Moua', number: '123-456-7890', dob: 'January 1, 1990' },
          { name: 'Vimi Ki', number: '987-654-3210', dob: 'February 2, 1992' },
          { name: 'Niko Saong', number: '555-555-5555', dob: 'March 3, 1993' }
        ]
      };
    }
  
    render() {
      return (
        <div>
          {this.state.person.map((person, index) => (
            <UserInfo person={person} />
          ))}
        </div>
      );
    }
  }
  
export default App;
