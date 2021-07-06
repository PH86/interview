import React, { useState } from 'react';
import './VacancyForm.css';
import { VacancyForm } from './VacancyForm';
import { VacancyFull } from './VacancyFull';

export const VacancyFormWrapper: React.FC<{}> = (): React.ReactElement => {
    const [screen, setScreen] = useState('form')

    const [jobForm, setJobForm] = useState({
        id: 0,
        title: '',
        company: '',
        location: '',
        companyDescription: '',
        applicants: 0,
        salary: 0,
        salaryMin: 0,
        salaryMax: 0,
        endDate: '',
        jobDescription: '',
        requirementsEssential: [] as string[],
        requirementsDesirable: [] as string[],
        responsibilities: [] as string[]
    })

    const renderScreen = () => {
        if (screen === 'review') {
            return <VacancyFull jobForm={jobForm} setScreen={setScreen} />
        } else { 
            return <VacancyForm jobForm={jobForm} setJobForm={setJobForm} setScreen={setScreen} />
        }
    }

    return (
        renderScreen()
    )
}
