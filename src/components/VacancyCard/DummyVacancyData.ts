interface IJobData {
    id: number, 
    title: string, 
    company: string, 
    location: string, 
    salary: number, 
    applicants: number, 
    endDate: string,
}

export const jobData: IJobData[] = [{
    id: 1,
    title:'Software Developer',
    company: 'Green',
    location: 'Remote',
    salary: 45000,
    applicants: 5,
    endDate: '11/11/2021'

}, {
    id: 2,
    title:'Customer Service Advisor',
    company: 'Green',
    location: 'Newcastle',
    salary: 25000,
    applicants: 21,
    endDate: '11/11/2021'

}, {
    id: 3,
    title:'Chef',
    company: 'Bistros',
    location: 'London',
    salary: 30000,
    applicants: 3,
    endDate: '11/11/2021'

}, {
    id: 4,
    title:'Data Analyst',
    company: 'BT',
    location: 'York',
    salary: 35000,
    applicants: 24,
    endDate: '11/11/2021'

}, {
    id: 5,
    title:'Mechanic',
    company: 'Daves Wheels',
    location: 'Barnsley',
    salary: 24000,
    applicants: 8,
    endDate: '11/11/2021'

}, {
    id: 6,
    title:'Manager',
    company: 'Interview',
    location: 'Manchester',
    salary: 60000,
    applicants: 40,
    endDate: '11/11/2021'

},
]
