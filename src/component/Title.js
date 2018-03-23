import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

class Titles extends Component{
    render() {
        return(
            <div>
                <h1 className="title-container__title">Weather Finder</h1>
                <h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
                <br/>
                <br/>
                <h3>Scroll Down</h3>
            </div>
    );
}
}; 

export default Titles;