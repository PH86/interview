import React, { useState } from 'react';
import { useAppContext } from 'hooks/useAppContext';
import { apiUrl } from 'utils/constants';
import './VacancyForm.css';
import { VacancyForm } from './VacancyForm';
import { VacancyFull } from './VacancyFull';

export const VacancyFormWrapper: React.FC<{}> = (): React.ReactElement => {
    const [screen, setScreen] = useState('form')
    const { setOpenModal } = useAppContext()

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

    const submitJobForm = () => {
        fetch(`${process.env.REACT_APP_API_URL}${apiUrl.vacancies}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobForm),
          })
          .then((res) => {
            // Handle successful api call
            if (res.ok) {
                res.json()
            // Show error message
            } else {
                console.log('There was a problem with your request')
            }
          })
          .catch((err) => console.log('error', err.error))
          // Remove this line once api call is set up as this is currently bypassing everything above
          .finally(() => setOpenModal())
    }

    const renderScreen = () => {
        if (screen === 'review') {
            return <VacancyFull jobForm={jobForm} setScreen={setScreen} handleSubmit={submitJobForm}/>
        } else { 
            return <VacancyForm jobForm={jobForm} setJobForm={setJobForm} setScreen={setScreen} />
        }
    }

    return (
        renderScreen()
    )
}
