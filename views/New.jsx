import React from 'react'

const New = () => {



  return (
    <div>

        <form action='logs' method='post' >
        <p>
            <label>Title</label>
            <input type='text' name='title' placeholder='Title' />
        </p>
        <p>
            <label>Entry</label>
            <input type='textarea' name='entry' placeholder='Entry...' />
        </p>
        <p>
            Is Ship Disabled: <input type='checkbox' name='shipIsBroken' />
            <input type='submit' value='Create Log' />
        </p>
        
        </form>

    </div>
  )
}

module.exports =  New