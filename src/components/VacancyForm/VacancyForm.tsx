import React from 'react';
import './VacancyForm.css';
import { AppContext } from '../../context';
import styled from "styled-components";
import { backgroundColor, textColor, shadow } from '../../themes/theme'

const Wrapper = styled.div`
background-color: ${backgroundColor};
color: ${textColor};
`;

const Shadow = styled.div`
box-shadow: ${shadow};
`;

export const VacancyForm: React.FC<{}> = (): React.ReactElement => {

    const { setShowVacancy, jobForm, setJobForm } = React.useContext(AppContext);
    const [jobTitle, setJobTitle] = React.useState('');
    const [companyName, setCompanyName] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [companyDescription, setCompanyDescription] = React.useState('');
    const [salaryMin, setSalaryMin] = React.useState('');
    const [salaryMax, setSalaryMax] = React.useState('');
    const [endDate, setEndDate] = React.useState('');
    const [jobDescription, setJobDescription] = React.useState('');
    const [essentialRequirments, setEssentialRequirments] = React.useState<string[]>([]);
    const [essentialRequirmentInput, setEssentialRequirmentInput] = React.useState('');
    const [desiredRequirments, setDesiredRequirments] = React.useState<string[]>([]);
    const [desiredRequirmentInput, setDesiredRequirmentInput] = React.useState('');
    const [responsibilities, setResponsibilities] = React.useState<string[]>([]);
    const [responsibilitiesInput, setResponsibilitiesInput] = React.useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setJobForm({
            jobTitle: jobTitle,
            companyName: companyName,
            location: location,
            companyDescription: companyDescription,
            salaryMin: salaryMin,
            salaryMax: salaryMax,
            endDate: endDate,
            jobDescription: jobDescription,
            essentialRequirments: essentialRequirments,
            desiredRequirments: desiredRequirments,
            responsibilities: responsibilities
        })
        setShowVacancy(true);
    }

    const clearForm = () => {
        setJobTitle('');
        setCompanyName('');
        setLocation('');
        setCompanyDescription('');
        setSalaryMin('');
        setSalaryMax('');
        setEndDate('');
        setJobDescription('');
        setEssentialRequirments([]);
        setDesiredRequirments([]);
        setResponsibilities([]);
    }

    React.useEffect(() => {
        setJobTitle(jobForm.jobTitle);
        setCompanyName(jobForm.companyName);
        setLocation(jobForm.location);
        setCompanyDescription(jobForm.companyDescription);
        setSalaryMin(jobForm.salaryMin);
        setSalaryMax(jobForm.salaryMax);
        setEndDate(jobForm.endDate);
        setJobDescription(jobForm.jobDescription);
        setEssentialRequirments(jobForm.essentialRequirments);
        setDesiredRequirments(jobForm.desiredRequirments);
        setResponsibilities(jobForm.responsibilities);
    }, []);

    const addEssentialRequirment = () => {
        let arr: string[] = essentialRequirments;
        arr.push(essentialRequirmentInput);
        setEssentialRequirments(arr.filter(e => e));
        setEssentialRequirmentInput('');
    }

    const removeEssentialRequirment = (requirment: string) => {
        setEssentialRequirments(
            essentialRequirments.filter((item) => requirment !== item))
    }

    const addDesiredRequirment = () => {
        let arr: string[] = desiredRequirments;
        arr.push(desiredRequirmentInput);
        setDesiredRequirments(arr.filter(e => e));
        setDesiredRequirmentInput('');
    }

    const removeDesiredRequirment = (requirment: string) => {
        setDesiredRequirments(
            desiredRequirments.filter((item) => requirment !== item))
    }

    const addResponsibility = () => {
        let arr: string[] = responsibilities;
        arr.push(responsibilitiesInput);
        setResponsibilities(arr.filter(e => e));
        setResponsibilitiesInput('');
    }

    const removeResponsibility = (requirment: string) => {
        setResponsibilities(
            responsibilities.filter((item) => requirment !== item))
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
                            id='jobTitle'
                            name='jobTitle'
                            placeholder='Job Title'
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            required
                        />
                        <input
                            className='form-input'
                            type='number'
                            id='salaryMin'
                            name='salaryMin'
                            placeholder='Salary Min'
                            value={salaryMin}
                            onChange={(e) => setSalaryMin(e.target.value)}
                            required
                        />
                        <input
                            className='form-input'
                            type='number'
                            id='salaryMax'
                            name='salaryMax'
                            placeholder='Salary Max'
                            value={salaryMax}
                            onChange={(e) => setSalaryMax(e.target.value)}
                            required
                        />
                    </div>
                    <textarea
                        className='form-input'
                        id='jobDescription'
                        name='jobDescription'
                        placeholder='Job Description'
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                    />
                </Shadow>
                <Shadow className='form-list-container'>
                    <h2>Company Information</h2>
                    <div className='vacancy-form-3'>
                        <input
                            className='form-input'
                            type='text'
                            id='companyName'
                            name='companyName'
                            placeholder='Company Name'
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                        <input
                            className='form-input'
                            type='text'
                            id='location'
                            name='location'
                            placeholder='Location'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />

                    </div>
                    <textarea
                        className='form-input'
                        id='companyDescription'
                        name='companyDescription'
                        placeholder='Company Description'
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}
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
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                </Shadow>
                <Shadow className='form-list-container'>
                    <h2>Essential Requirments</h2>
                    <ul className='form-list'>
                        {essentialRequirments.map(requirment => {
                            return <div className='form-list-item-container'><li className='form-list-item'>{requirment}</li><button className='remove-button' type="button" onClick={() => removeEssentialRequirment(requirment)}>Remove</button></div>
                        })}
                    </ul>
                    <div className='form-list-subcontainer'>
                        <input
                            className='form-input'
                            type='text'
                            id='essentialRequirmentInput'
                            name='essentialRequirmentInput'
                            placeholder='Essntial Requirment'
                            value={essentialRequirmentInput}
                            onChange={(e) => setEssentialRequirmentInput(e.target.value)}
                        />
                        <div className='requirment-button-container'>
                            <button type="button" className='standard-button' onClick={() => addEssentialRequirment()}>add</button>
                            <button type="button" className='standard-button' onClick={() => setEssentialRequirments([])}>clear</button>
                        </div>
                    </div>
                </Shadow>
                <Shadow className='form-list-container'>
                    <h2>Desired Requirments</h2>
                    <ul className='form-list'>
                        {desiredRequirments.map(requirment => {
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
                            <button type="button" className='standard-button' onClick={() => setDesiredRequirments([])}>clear</button>
                        </div>
                    </div>
                </Shadow>
                <Shadow className='form-list-container'>
                    <h2>Responsibilities</h2>
                    <ul className='form-list'>
                        {responsibilities.map(requirment => {
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
                            <button type="button" className='standard-button' onClick={() => setResponsibilities([])}>clear</button>
                        </div>
                    </div>
                </Shadow>
                <button type="submit" className='standard-button'>Review Job</button>
                <button type="button" onClick={() => clearForm()} className='standard-button'>Clear Form</button>
            </Wrapper>
        </form>
    )
}
