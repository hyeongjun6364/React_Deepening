import React from 'react'

function Button({children,...props}) {
    return (
        <div>
            <button {...props}>{children}</button>
        </div>
    )
}

export default Button