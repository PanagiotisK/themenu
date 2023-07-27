import React from 'react'
import ReactDOM from 'react-dom';
import Homepage from './Components/homepage';

import './styles/stylesheet.css';
import './styles/scrollbar.css'

//  ===   starting code   === //

//  basic h1 text
// const element = React.createElement('h1', null, 'Hello world');

//  pass an ordered list on its CLEANEST code ever - we give a unique id to each li item , through the key
// const tasks = ['Make dinner', 'Go to the Gym', 'Cold shower'];
// const element = React.createElement('ol', null, tasks.map((task, index) => React.createElement('li', {key:index}, task)));

// ReactDOM.render(element, document.getElementById('root'));


//  ===   end starting code === //



ReactDOM.render(<Homepage/>, document.getElementById('root'));