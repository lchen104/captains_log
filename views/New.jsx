import React from 'react'
const Default = require('./layouts/Default')

const New = () => {

  return (
    <>
      <Default title={"Create a New Log"}>
        <form action='/logs' method='post' >
          <p>
              <label>Title</label>
              <input type='text' name='title' placeholder='Title' />
          </p>
          <p>
              <label>Entry</label>
              <textarea rows='6' type='textarea' name='entry' placeholder='Entry...' />
          </p>
          <p>
              Is Ship Broken: <input type='checkbox' name='shipIsBroken' />
          </p>
          <p>
          <input type='submit' value='Create Log' />
          </p>
        </form>
    </Default>
    </>
  )
}

module.exports =  New