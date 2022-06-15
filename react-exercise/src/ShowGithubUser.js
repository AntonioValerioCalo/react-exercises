import React from 'react'
import { Link } from 'react-router-dom'
import { GithubUser } from './GithubUser'

export const ShowGithubUser =() => {
  return (
    <div>
      <Link to="/Login">Login</Link>
      <GithubUser username="AntonioValerioCalo"/> 
      
      </div>
  )
}

