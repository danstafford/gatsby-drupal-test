import React from "react"
import "../styles/main.css"

const Layout = ({ children } :any) => {

    return (
        <>
            <div className="bar topbar"></div>
            <main className="pageStyles">
                <title>Home Page</title>
                <h1 className="headingStyles">
                Drupal + Gatsby
                <hr></hr>
                </h1>
                {children}
            </main>
      </>
    )
}

export default Layout
