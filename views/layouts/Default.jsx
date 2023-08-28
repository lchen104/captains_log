import React from 'react'

function Default({children, title}) {

  const h1 = {
    fontFamily: 'sans-serif',
    // border: '1px solid black',
    // textAlign: 'center',
    // backgroundColor: 'black',
    color: 'white'
  }
  
  const main = {
    border: '1px solid black',
    textAlign: 'center',
    width: '100%',
    height: '95vh',
    margin: '0px,',
    padding: '0px',
    // backgroundImage: 'url("../pokemon-bg.jpeg")',
    // backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }

  const content = {
    fontFamily: 'sans-serif',
    border: '1px solid black',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  }

  const container = {
    display: 'flex',
    // border: '1px solid black',
    textAlign: 'center',
    justifyContent: 'center',
    // width: '800px',
    // overflow: 'auto',
    flexWrap: 'wrap',
  }

  const wrapper = {
    display: 'block',
    // border: '2px solid orange',
    textAlign: 'center',
  }

  const card = {
    width: '200px',
    height: '370px',
    border: '10px solid lightgrey',
    borderRadius: '10px',
    margin: '5px',
    padding: '5px',
    display: 'inline-block',
    backgroundColor: 'white',
    boxShadow: '5px 5px 30px #141414'
  }


  const img = {
    width: '150px'
  }

  const nav = {
    textAlign: 'center',
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
    <html>
        <head>
            <title>{title}</title>
        </head>
        <body>

          {/* <div style={wrapper}> */}

            <div style={wrapper}>
              <div style={content}>
                  <h1 style={h1}>{title}</h1>
              </div>
              <nav style={nav}>
                  <h1 style={h1}>
                    <a href="/" alt="">Home</a> | <a href="/logs" alt="List Logs">List Logs</a> | <a href="/logs/new" alt="Add Log">Create Log</a>
                  </h1>
              </nav>
              
              {/* <h1>{title}</h1> */}
              {children}


            </div>

          {/* </div> */}

        </body>
    </html>
  )
}

module.exports = Default