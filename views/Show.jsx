import React from 'react'
const Default = require('./layouts/Default')

const Show = ({log}) => {
  // console.log('Pokedex: ' + pokedex)

  const container = {
    border: '1px solid black',
    textAlign: 'center',
    width: '100%',
    height: '95vh',
    margin: '0px,',
    padding: '0px',
    // backgroundImage: 'url("../pokemon-bg.jpeg")'
}

  const content = {
    fontFamily: 'sans-serif',
    border: '1px solid black',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  }

  const h1 = {
    fontFamily: 'sans-serif',
    // border: '1px solid black',
    // textAlign: 'center',
    // backgroundColor: 'black',
    color: 'white'
  }

  const nav = {
    textAlign: 'center',
  }

  const img = {
    border: '25px solid hotpink',
    backgroundColor: 'white',
    margin: '10px',
    borderRadius: '25px',
    padding: '20px'
  }

  const card = {
    textAlign: 'center',
    display: 'inline-block',
    border: '10px solid lavender',
    backgroundColor: '#141414',
    color: '#fff',
    padding: '20px'
  }

  const span = {
    fontWeight: 'bold',
    color: 'orange'
  }

  const h2 = {
    background: 'lightgrey',
    display: 'inline-block',
    width: '200px',
    textAlign: 'center',
    padding: '10px',
    border: '2px solid #141414'
  }

  const h4 = {
    fontFamily: 'sans-serif',
    // border: '1px solid black',
    // textAlign: 'center',
    // backgroundColor: 'black',
    color: 'black',
    textAlign: 'center'
  }

    return (
        <> 
            <Default title={"Show Captain's Logs"}>
                <div style={card}>
                    <h1>{log.title}</h1>
                    <p>{log.entry}</p>
                    <h3>{log.shipIsBroken ? 'Ship Status: Broken' : 'Ship Status: OK'}</h3>
                </div>
                
                <p>
                    <h2 style={h2}>
                        <a href={`/logs`}> Go Back </a>
                    </h2>
                </p>
            </Default>
        </>
    )
}

module.exports = Show;