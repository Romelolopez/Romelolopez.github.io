import React from 'react';

class Menu extends React.Component {
    render () {
      return (
        <div className='Menu'>
          <ul className='Menu-list'>
              <li>Dashboard</li>
              <li>Widget</li>
              <li>Reviews</li>
              <li>Customers</li>
              <li>Online Analysis</li>
              <li>Settings</li>
          </ul>
        </div>
      )
    }
  }

  export default Menu;