import React, {Component} from 'react';

import Navbar from './navbar';

class title extends Component {
    render() {
        return (<div>
                    <h1 className='title'>THEmenu</h1>
                    {/* <br></br>
                    <p className='subtitle'>athMENU</p> */}
                    <Navbar/>
                </div>);
    }
}

export default title;