import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "styled-react-modal";

import { backgroundColor, textColor } from "themes/theme";
import { pageTransitions, modalTransitions } from "utils/Animations";
import "./Account.css";

import { ColumnDefinitionType } from "components/Table/Table";
import { MetaInfo, Table, Packages } from "components";
import { EditBillingInformation, EditPaymentMethod } from "./components";

const StyledModal = Modal.styled`
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${backgroundColor};
    color: ${textColor};
    border-radius: 15px;
`;

interface IBill {
  date: string;
  amount: number;
  status: string;
  paymentMethod: string;
}

const billingData: IBill[] = [
  {
    date: "01,01,21",
    amount: 100,
    status: "Success",
    paymentMethod: "Visa 5432",
  },
  {
    date: "01,01,21",
    amount: 100,
    status: "Success",
    paymentMethod: "Visa 5432",
  },
  {
    date: "01,01,21",
    amount: 100,
    status: "Success",
    paymentMethod: "Visa 5432",
  },
];

const columns: ColumnDefinitionType<IBill, keyof IBill>[] = [
  {
    key: "date",
    header: "Date",
  },
  {
    key: "amount",
    header: "Amount",
  },
  {
    key: "status",
    header: "Status",
  },
  {
    key: "paymentMethod",
    header: "Payment Method",
    width: 150,
  },
];

export const Account: React.FC<Record<string, unknown>> =
  (): React.ReactElement => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [modalComponent, setModalComponent] = useState<JSX.Element>();

    const toggleModal = () => {
      setOpenModal(!openModal);
    };

    const openModalComponent = (component: JSX.Element) => {
      setModalComponent(component);
      setOpenModal(true);
    };

    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="initial"
        variants={pageTransitions}
        className="content-container accounts-content-container"
      >
        <h1>Account details</h1>

        <div className="section-container">
          <div className="detail-box sub-box">
            <p>Current subscription package</p>
            <h2>£25</h2>
            <p className="package-name">Standard Package</p>
            <button
              className="standard-button"
              onClick={() => openModalComponent(<Packages />)}
              type="button"
            >
              Change Plan
            </button>
          </div>
          <button
            className="standard-button latest-bill"
            onClick={() => alert("PDF download to go here")}
            type="button"
          >
            View Latest Bill
          </button>
        </div>
        <div className="section-container">
          <div className="detail-box sub-box">
            <p>
              <b>Billing Information</b>
            </p>
            <MetaInfo label="Company name" text="Example Company" />
            <MetaInfo label="Email address" text="user@example.company" />
            <MetaInfo label="VAT number" text="GB123456789" />
            <button
              className="standard-button"
              onClick={() => openModalComponent(<EditBillingInformation />)}
              type="button"
            >
              Edit
            </button>
          </div>
          <div className="detail-box sub-box">
            <p>
              <b>Payment Method</b>
            </p>
            <MetaInfo label="Credit Card" text="Visa 5432" />
            <MetaInfo label="Expiring" text="09/22" />
            <button
              className="standard-button"
              onClick={() => openModalComponent(<EditPaymentMethod />)}
              type="button"
            >
              Edit
            </button>
          </div>
        </div>

        <div className="section-container stats-container">
          <div className="detail-box stat-box">
            <h2>12</h2>
            <p>Applications</p>
          </div>
          <div className="detail-box stat-box">
            <h2>2</h2>
            <p>Responses</p>
          </div>
        </div>

        <div className="bills-container">
          <h3>Billing Summary</h3>
          <Table columns={columns} data={billingData} />
        </div>
        <StyledModal
          isOpen={openModal}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
        >
          <motion.div variants={modalTransitions}>{modalComponent}</motion.div>
        </StyledModal>
      </motion.div>
    );
  };
