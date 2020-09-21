import React from 'react';
import ReactDom from 'react-dom';
import '../src/header.css';
import Footer from './footer'
import Header from './header';
import Body from './body';

const App = () =>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>


        
    )
}

ReactDom.render(<App/>, document.getElementById('root'));