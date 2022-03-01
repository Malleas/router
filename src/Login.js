import React from "react";

class Login extends React.Component{

    state = {
        isLoggedIn: false
    }

    handleLogin = () => {
        this.setState( {isLoggedIn:true}, () =>
            this.props.onClick(this.state.isLoggedIn), () =>
                console.log("Login page says login status = ", this.state.isLoggedIn))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLogin}>Login Here</button>
            </div>
        );
    }
}
export default Login;