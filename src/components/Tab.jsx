import React from 'react'

const Tab = (props) => {
    const selectedStyle = {
        color: "white",
        backgroundColor: "black"
    }
    const unselectedStyle = {
        color: "black",
        backgroundColor: "white"
    }
    return <div style={unselectedStyle}></div>;
}

export default Tab