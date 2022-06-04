import { App } from "./App"
import {BrowserRouter} from "react-router-dom"
import React from 'react'

export default function Root() {
  return (
    <div>
        <BrowserRouter>
        <App/>
        </BrowserRouter>

    </div>
  )
}
