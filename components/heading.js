import React from 'react'
import urlSlug from 'url-slug'

const Heading = props => {
  const value = props.children[0].props.value
  const slug = urlSlug(value)

  const element = React.createElement(`h${props.level}`, { id: slug }, props.children)

  return (
    <a href={`#${slug}`}>{element}</a>
  )
}

export default Heading