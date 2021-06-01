import React from 'react'
import './DashCard.css'

function DashCard({title, content}) {
    return (
        <article className='dashcard-container'>
            <h2 className='dashcard-title'>{title}</h2>
            <h1 className='dashcard-content'>{content}</h1>
        </article>
    )
}

export default DashCard
