import React from "react";
const Default = require('./layouts/Default')

const Main = () => {

    const pDiv = {
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        width: '500px',
        height: '400px',
        textAlign: 'center',
        display: 'inline-block',
        border: '1px solid #141414',
        boxShadow: '5px 5px 30px #141414'
    }

    return(
        <>
            <Default title={"Captain's Logs"}>
                <div style={pDiv}>
                    <h2>Create a Starlog!</h2>
                </div>
            </Default>
        </>
    )
}



module.exports = Main;