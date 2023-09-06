import React, { useState } from 'react'


const Accordion = ({ title, content }) => {

    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <div style={{ border: "1px solid silver", maxWidth: 700 }}>
            <button className="btn" onClick={handleClick}>{title}</button>
            {open ? <div style={{background:"#ebebeb"}}>{content}</div> : null}
        </div>
    )
}

export default Accordion