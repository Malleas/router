import React from "react";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import User from "./User"
import Navbar from "./Navbar"
import {BrowserRouter, Redirect, Route, Routes} from "react-router-dom";


class App extends React.Component {

    state = {isLoggedIn: false}

    handleLogin = (status) => {
        this.setState({isLoggedIn:status}, () => {
            console.log("App says login status = ", this.state.isLoggedIn)
        })
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn ? <span>You Are Logged In</span> : <span>Not Logged In</span>}

            <BrowserRouter>
                    <Navbar />
                    <Route path="/about" component={About} />
                    <Route path="/contact" render={ () => (this.state.isLoggedIn ? <Contact /> : <Redirect to="/login"/>) } />
                    <Route path="/login" render={ () => <Login onClick={this.handleLogin} />} />
                    <Route path="/user/:username" component={User} />
            </BrowserRouter>
            </div>
        )
    }
}
export default App