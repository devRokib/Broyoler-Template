import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError()
    console.log(err)
  return (
    <div>
        <h1>something was wrong</h1>
        <p>{err.statusText || err.message}</p>
    </div>
  )
}

export default Error