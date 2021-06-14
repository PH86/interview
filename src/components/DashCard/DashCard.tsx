import React from 'react'
import './DashCard.css'

interface IDashCard {
    title: string,
    content: number | string,
}

export const DashCard: React.FC<IDashCard> = ({title, content}): React.ReactElement => {
    return (
        <article className='dashcard-container'>
            <h2 className='dashcard-title'>{title}</h2>
            <h1 className='dashcard-content'>{content}</h1>
        </article>
    )
}
