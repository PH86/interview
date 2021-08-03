export interface IJobData {
  id?: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  applicants?: string[];
  endDate: string;
  jobDescription: string;
  companyDescription: string;
  salaryMin: number;
  salaryMax: number;
  requirementEssential: Array<string>;
  requirementDesired: Array<string>;
  responsibilities: Array<string>;
}

export const jobDataFull: IJobData[] = [
  {
    id: "1",
    title: "Software Developer",
    company: "Green",
    location: "Remote",
    salary: 45000,
    applicants: ["5"],
    endDate: "11/11/2021",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    companyDescription:
      "Company description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    salaryMin: 40000,
    salaryMax: 45000,
    requirementEssential: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    requirementDesired: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    responsibilities: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
  },
  {
    id: "2",
    title: "Customer Service Advisor",
    company: "Green",
    location: "Newcastle",
    salary: 25000,
    applicants: ["21"],
    endDate: "11/11/2021",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    companyDescription:
      "Company description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    salaryMin: 20000,
    salaryMax: 25000,
    requirementEssential: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    requirementDesired: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    responsibilities: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
  },
  {
    id: "3",
    title: "Chef",
    company: "Bistros",
    location: "London",
    salary: 30000,
    applicants: ["3"],
    endDate: "11/11/2021",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    companyDescription:
      "Company description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    salaryMin: 25000,
    salaryMax: 30000,
    requirementEssential: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    requirementDesired: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    responsibilities: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
  },
  {
    id: "4",
    title: "Data Analyst",
    company: "BT",
    location: "York",
    salary: 35000,
    applicants: ["24"],
    endDate: "11/11/2021",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    companyDescription:
      "Company description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    salaryMin: 30000,
    salaryMax: 35000,
    requirementEssential: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    requirementDesired: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    responsibilities: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
  },
  {
    id: "5",
    title: "Mechanic",
    company: "Daves Wheels",
    location: "Barnsley",
    salary: 24000,
    applicants: ["8"],
    endDate: "11/11/2021",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    companyDescription:
      "Company description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    salaryMin: 19000,
    salaryMax: 24000,
    requirementEssential: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    requirementDesired: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    responsibilities: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
  },
  {
    id: "6",
    title: "Manager",
    company: "Interview",
    location: "Manchester",
    salary: 60000,
    applicants: ["40"],
    endDate: "11/11/2021",
    jobDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    companyDescription:
      "Company description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    salaryMin: 50000,
    salaryMax: 60000,
    requirementEssential: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    requirementDesired: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
    responsibilities: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit",
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
    ],
  },
];
