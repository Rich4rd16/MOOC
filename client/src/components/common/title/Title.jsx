import React from 'react'

const Title = ({subtitle, title}) => {
  return (
    <div>
        <div id="heading">
          {/* Se llama del archivo hero.jsx */}
        <h3>{subtitle}</h3>
            <br/>
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Title