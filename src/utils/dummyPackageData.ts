interface IPackageData {
  id: number;
  name: string;
  price: number;
  tag: string;
  details: Array<string>;
}

export const dummyPackageResponse: IPackageData[] = [
  {
    id: 1,
    name: "Intro",
    price: 25,
    tag: "For businessess that want to super charge their hiring",
    details: [
      "Automatic job posting to the biggest job sites",
      "Unlimited monthly job posting",
      "Reach statistics of your posts",
      "Applicant management",
    ],
  },
  {
    id: 2,
    name: "Standard",
    price: 75,
    tag: "For businessess that want to super charge their hiring",
    details: [
      "Automatic job posting to the biggest job sites",
      "Unlimited monthly job posting",
      "Reach statistics of your posts",
      "Applicant management",
    ],
  },
  {
    id: 3,
    name: "Premium",
    price: 99,
    tag: "For businessess that want to super charge their hiring",
    details: [
      "Automatic job posting to the biggest job sites",
      "Unlimited monthly job posting",
      "Reach statistics of your posts",
      "Applicant management",
    ],
  },
];
