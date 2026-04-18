import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DashBoard() {
  return (
    <div>
      DashBoard children render
      <Outlet/>
    </div>
  )
}
