import React from "react";
import "./ApplicantCard.css";
import styled from "styled-components";
import { shadow } from "themes/theme";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";

export interface IApplicantCard {
  id: number;
  name: string;
  currentJob: string;
  location: string;
  email: string;
  phoneNumber: string;
  cvLink: string;
}

const Card = styled.article`
  box-shadow: ${shadow};
`;

export const ApplicantCard: React.FC<IApplicantCard> = ({
  id,
  name,
  currentJob,
  location,
  email,
  phoneNumber,
  cvLink,
}: IApplicantCard): React.ReactElement => {
  return (
    <Card key={id} className="applicant-card-container">
      <h1 className="applicant-name">{name}</h1>
      <h2 className="applicant-job">{currentJob}</h2>
      <h4 className="applicant-location">{location}</h4>
      <h4 className="applicant-email">
        <HiOutlineMail className="applicant-icon" />
        {email}
      </h4>
      <h4 className="applicant-number">
        <FiPhone className="applicant-icon" />
        {phoneNumber}
      </h4>
      <h4 className="applicant-cv">
        <CgFileDocument className="applicant-icon" />{" "}
        <a href={cvLink} target="_blank" rel="noreferrer">
          {cvLink}
        </a>
      </h4>
    </Card>
  );
};
