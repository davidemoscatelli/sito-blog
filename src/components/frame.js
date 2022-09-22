import React from "react"

const Frame = ({children}) => {
    return(
        <div>
            <h1>titolo della pagina</h1>
            {children}
        </div>
    )
}

export default Frame