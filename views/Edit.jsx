import React from 'react'
const Default = require('./layouts/Default')

const Edit = ({log}) => {
    // console.log(log.title)
    
    const myInput = {
          margin: '5px',
          width: '300px',
          // border: '1px solid black',
          padding: '5px'
    }
  
    const label = {
      fontFamily: 'sans-serif',
      fontSize: 'large'
    }

  return (

    <>
        <Default title={"Edit Captain's Log"}>
            <form method='POST' action={`/logs/${log._id}?_method=PUT`}>
                <p>
                <label style={label}>Title</label><br />
                <input style={myInput} type='text' name='title' defaultValue={log.title} />
                </p>
                <p>
                <label style={label}>Entry</label><br />
                <textarea rows='6' style={myInput} type='textarea' name='entry' defaultValue={log.entry} />
                </p>
                <p>
                <label style={label}>Is Ship Broken:</label>
                { log.shipIsBroken ? <input type="checkbox" name="shipIsBroken" defaultChecked /> : <input type="checkbox" name="shipIsBroken"/> }
                </p>
                <p><input style={myInput} type='submit' value='Submit Changes' /></p>
            </form>
        </Default>
    </>

  )
}

module.exports = Edit