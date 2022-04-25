import React from "react"
import "../styles/main.css"
import { Link } from "gatsby"
import Header from "./Header"

const Layout = ({ children } :any) => {

  return (
    <>
      <div className="bar topbar"></div>
      <main className="pageStyles">
        <title>Home Page</title>
        <Link to="/" className="headingStyles">
          <Header />
        </Link>
        {children}
      </main>
    </>
  )
}

export default Layout
