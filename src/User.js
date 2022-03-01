import React from "react";

const User = ({match}) => {
    return (
        <div>
            <h2>Hello {match.params.username}</h2>
        </div>
    )
}
export default User;