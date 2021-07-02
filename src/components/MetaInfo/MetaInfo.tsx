import React from 'react';
import './MetaInfo.css'

export interface IMetaInfo {
    label: string;
    text: string;
}

export const MetaInfo: React.FC<IMetaInfo> = ({ label, text}): React.ReactElement => {
    return (
        <div className='meta-info-container'>
            <p className='meta-info-label'>{label}</p>
            <p className='meta-info-text'>{text}</p>
        </div>
    )
}

