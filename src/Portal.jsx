import React from 'react'
import ReactDOM from 'react-dom'

export default function Portal() {
  return ReactDOM.createPortal(<h1>Welcome to React custom Portal</h1>, document.getElementById("portalRoot"))
}
