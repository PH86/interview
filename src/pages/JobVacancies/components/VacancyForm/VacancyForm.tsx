import React, { useState } from 'react';
import './VacancyForm.css';
import styled from "styled-components";
import { backgroundColor, textColor, shadow } from 'themes/theme'
import { IJobData } from 'utils/JobVacancyFull';

const Wrapper = styled.div`
background-color: ${backgroundColor};
color: ${textColor};
`;

const Shadow = styled.div`
box-shadow: ${shadow};
`;

interface IVacancyForm {
    jobForm: IJobData,
    setJobForm: React.Dispatch<React.SetStateAction<IJobData>>,
    setScreen: React.Dispatch<React.SetStateAction<string>>,
}

export const VacancyForm: React.FC<IVacancyForm> = ({jobForm, setJobForm, setScreen}): React.ReactElement => {
    
    const [essentialRequirmentInput, setEssentialRequirmentInput] = useState('');
    const [desiredRequirmentInput, setDesiredRequirmentInput] = useState('');
    const [responsibilitiesInput, setResponsibilitiesInput] = useState('');

    const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setJobForm((jobForm) => ({...jobForm, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setScreen('review')
    }

    const clearForm = () => {
        setJobForm({
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
            requirementsEssential: [],
            requirementsDesirable: [],
            responsibilities: []
        })
    }

    const addEssentialRequirment = () => {
        if (essentialRequirmentInput) {
            setJobForm((jobForm) => ({...jobForm, 
                requirementsEssential: [...jobForm.requirementsEssential, 
                    essentialRequirmentInput]
            }))
            setEssentialRequirmentInput('')
        }
    }

    const removeEssentialRequirment = (requirment: string) => {
        setJobForm((jobForm) => ({...jobForm, 
            essentialRequirments: 
                jobForm.requirementsEssential.filter(item => item !== requirment)
        }))
    }

    const addDesiredRequirment = () => {
        if (desiredRequirmentInput) {
            setJobForm((jobForm) => ({...jobForm, 
                requirementsDesirable: [...jobForm.requirementsDesirable, 
                    desiredRequirmentInput]
            }))
            setDesiredRequirmentInput('')
        }
    }

    const removeDesiredRequirment = (requirment: string) => {
        setJobForm((jobForm) => ({...jobForm, 
            desiredRequirments: 
                jobForm.requirementsDesirable.filter(item => item !== requirment)
        }))
    }

    const addResponsibility = () => {
        if (responsibilitiesInput) {
            setJobForm((jobForm) => ({...jobForm, 
                responsibilities: [...jobForm.responsibilities, 
                    responsibilitiesInput]
            }))
            setResponsibilitiesInput('')
        }
    }

    const removeResponsibility = (requirment: string) => {
        setJobForm((jobForm) => ({...jobForm, 
            responsibilities: 
                jobForm.responsibilities.filter(item => item !== requirment)
        }))
    }

    const clearJobFormArray = (jobFormArray: string) => {
        setJobForm((jobForm) => ({...jobForm,
            [jobFormArray]: []
        }))
    }

    return (
        <form className='vacancy-container' onSubmit={handleSubmit}>
            <Wrapper className='vacancy-form-container'>
                <h2>Job Vacancy Form</h2>
                <Shadow className='form-list-container'>
                    <h2>Job Information</h2>
                    <div className='vacancy-form-3'>
                        <input
                            className='form-input'
                            type='text'
                            id='title'
                            name='title'
                            placeholder='Job Title'
                            value={jobForm.title}
                            onChange={(e) => handleInputOnChange(e)}
                            required
                        />
                        <input
                            className='form-input'
                            type='number'
                            id='salaryMin'
                            name='salaryMin'
                            placeholder='Salary Min'
                            value={jobForm.salaryMin}
                            onChange={(e) => handleInputOnChange(e)}
                            required
                        />
                        <input
                            className='form-input'
                            type='number'
                            id='salaryMax'
                            name='salaryMax'
                            placeholder='Salary Max'
                            value={jobForm.salaryMax}
                            onChange={(e) => handleInputOnChange(e)}
                            required
                        />
                    </div>
                    <textarea
                        className='form-input'
                        id='jobDescription'
                        name='jobDescription'
                        placeholder='Job Description'
                        value={jobForm.jobDescription}
                        onChange={(e) => handleInputOnChange(e)}
                        required
                    />
                </Shadow>
                <Shadow className='form-list-container'>
                    <h2>Company Information</h2>
                    <div className='vacancy-form-3'>
                        <input
                            className='form-input'
                            type='text'
                            id='company'
                            name='company'
                            placeholder='Company Name'
                            value={jobForm.company}
                            onChange={(e) => handleInputOnChange(e)}
                            required
                        />
                        <input
                            className='form-input'
                            type='text'
                            id='location'
                            name='location'
                            placeholder='Location'
                            value={jobForm.location}
                            onChange={(e) => handleInputOnChange(e)}
                            required
                        />

                    </div>
                    <textarea
                        className='form-input'
                        id='companyDescription'
                        name='companyDescription'
                        placeholder='Company Description'
                        value={jobForm.companyDescription}
                        onChange={(e) => handleInputOnChange(e)}
                        required
                    />
                    <div>
                        <label> Closing Date:
                        <input
                                className='form-input'
                                type='date'
                                id='endDate'
                                name='endDate'
                                placeholder='End Date'
                                value={jobForm.endDate}
                                onChange={(e) => handleInputOnChange(e)}
                                required
                            />
                        </label>
                    </div>
                </Shadow>
                <Shadow className='form-list-container'>
                    <h2>Essential Requirments</h2>
                    <ul className='form-list'>
                        {jobForm.requirementsEssential.map(requirment => {
                            return <div className='form-list-item-container'><li className='form-list-item'>{requirment}</li><button className='remove-button' type="button" onClick={() => removeEssentialRequirment(requirment)}>Remove</button></div>
                        })}
                    </ul>
                    <div className='form-list-subcontainer'>
                        <input
                            className='form-input'
                            type='text'
                            id='essentialRequirmentInput'
                            name='essentialRequirmentInput'
                            placeholder='Essential Requirment'
                            value={essentialRequirmentInput}
                            onChange={(e) => setEssentialRequirmentInput(e.target.value)}
                        />
                        <div className='requirment-button-container'>
                            <button type="button" className='standard-button' onClick={() => addEssentialRequirment()}>add</button>
                            <button type="button" className='standard-button' onClick={() => clearJobFormArray('essentialRequirments')}>clear</button>
                        </div>
                    </div>
                </Shadow>
                <Shadow className='form-list-container'>
                    <h2>Desired Requirments</h2>
                    <ul className='form-list'>
                        {jobForm.requirementsDesirable.map(requirment => {
                            return <div className='form-list-item-container'><li className='form-list-item'>{requirment}</li><button className='remove-button' type="button" onClick={() => removeDesiredRequirment(requirment)}>Remove</button></div>
                        })}
                    </ul>
                    <div className='form-list-subcontainer'>
                        <input
                            className='form-input'
                            type='text'
                            id='desiredlRequirmentInput'
                            name='desiredRequirmentInput'
                            placeholder='Desired Requirment'
                            value={desiredRequirmentInput}
                            onChange={(e) => setDesiredRequirmentInput(e.target.value)}
                        />
                        <div className='requirment-button-container'>
                            <button type="button" className='standard-button' onClick={() => addDesiredRequirment()}>add</button>
                            <button type="button" className='standard-button' onClick={() => clearJobFormArray('desiredRequirments')}>clear</button>
                        </div>
                    </div>
                </Shadow>
                <Shadow className='form-list-container'>
                    <h2>Responsibilities</h2>
                    <ul className='form-list'>
                        {jobForm.responsibilities.map(requirment => {
                            return <div className='form-list-item-container'><li className='form-list-item'>{requirment}</li><button className='remove-button' type="button" onClick={() => removeResponsibility(requirment)}>Remove</button></div>
                        })}
                    </ul>
                    <div className='form-list-subcontainer'>
                        <input
                            className='form-input'
                            type='text'
                            id='responsibilityInput'
                            name='responsibilityInput'
                            placeholder='Responsibility'
                            value={responsibilitiesInput}
                            onChange={(e) => setResponsibilitiesInput(e.target.value)}
                        />
                        <div className='requirment-button-container'>
                            <button type="button" className='standard-button' onClick={() => addResponsibility()}>add</button>
                            <button type="button" className='standard-button' onClick={() => clearJobFormArray('responsibilities')}>clear</button>
                        </div>
                    </div>
                </Shadow>
                <button type="submit" className='standard-button'>Review Job</button>
                <button type="button" onClick={() => clearForm()} className='standard-button red-button'>Clear Form</button>
            </Wrapper>
        </form>
    )
}
