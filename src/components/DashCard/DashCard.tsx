import React from 'react';
import './DashCard.css';
import styled from "styled-components";
import { shadow } from '../../themes/theme';

interface IDashCard {
    title: string,
    content: number | string,
}

const Card = styled.article`
    box-shadow: ${shadow};
`;

export const DashCard: React.FC<IDashCard> = ({ title, content }): React.ReactElement => {
    return (
        <Card className='dashcard-container'>
            <h2 className='dashcard-title'>{title}</h2>
            <h1 className='dashcard-content'>{content}</h1>
        </Card>
    )
}
