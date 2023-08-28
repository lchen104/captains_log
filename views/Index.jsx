import React from 'react'
const Default = require('./layouts/Default')

const Index = ({logs}) => {

    const h1 = {
        fontFamily: 'sans-serif',
        // border: '1px solid black',
        // textAlign: 'center',
        // backgroundColor: 'black',
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
  
    return (
        <>
            <Default title={"Captain's Logs"}>
            <div style={container}>
                {
                    logs.map((log, i) => (
                        <>
                        <div style={card} key={i}>
                            <h2><a href={`/logs/${log.id}`}> {log.title} </a></h2>
                            <p>{log.entry}</p>
                            <h3>{log.shipIsBroken ? 'Ship Status: Broken' : 'Ship Status: OK'}</h3>
                            <p>
                                <form method='POST' action={`/logs/${log._id}?_method=DELETE`}>
                                {/* Delete button */}
                                    <input type="submit" value="DELETE"/>
                                </form>
                            </p>
                            <p>
                                <a href={`/logs/${log._id}/edit`}> Edit {log.title} </a>
                            </p>
                        </div>
                        </> 
                    )) 
                }
            </div>
            </Default>
        </>
    )
}

module.exports = Index