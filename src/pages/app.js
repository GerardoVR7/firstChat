import React from 'react'
import css from '../assets/css/app.css'
import Header from "../components/header";
import Main from "../components/Main";
import Footer from "../components/footer";

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Main/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App;