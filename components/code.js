import React from 'react'
// import hljs from 'highlight.js'
import Highlight from 'react-highlight.js'
const Code = props => {
    return (
        <Highlight>{props.value}</Highlight>
    )
}

export default Code