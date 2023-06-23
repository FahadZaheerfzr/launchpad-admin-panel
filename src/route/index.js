import React from 'react'
import { useRoutes } from 'react-router-dom'
import Administration from '../pages/Administration'
import Login from '../components/Login/Login'


export default function WebRouter() {
  let routes = useRoutes([
    { path: '/dashboard', element: <Administration />},
    { path: '/', element: <Login />},
  ])
  return routes
}

