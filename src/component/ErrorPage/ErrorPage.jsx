import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()
  return (
    <div>
        <h1>Ops ! Sorry</h1>
        <p>an unespected error has occured</p>
        <p>
            {
                error.statusTest || error.message
            }
        </p>
    </div>
  )
}

export default ErrorPage