import { useState } from 'react';
import { motion } from "framer-motion";
import Modal from "styled-react-modal";

import { backgroundColor } from "themes/theme";
import { pageTransitions, modalTransitions} from "utils/Animations";
import './Account.css'

import Table, { ColumnDefinitionType } from 'components/Table/Table'
import Packages from 'components/Packages/Packages'
import { MetaInfo } from 'components';

const StyledModal = Modal.styled`
    height: 90vh;
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
    border-radius: 15px;
`;

interface iBill {
    date: string;
    amount: number;
    status: string;
    paymentMethod: string;
}

const billingData: iBill[] = [
    {
        date: '01,01,21',
        amount: 100,
        status: 'Success',
        paymentMethod: 'Visa 5432'
    },
    {
        date: '01,01,21',
        amount: 100,
        status: 'Success',
        paymentMethod: 'Visa 5432'
    },
    {
        date: '01,01,21',
        amount: 100,
        status: 'Success',
        paymentMethod: 'Visa 5432'
    }
]

const columns: ColumnDefinitionType<iBill, keyof iBill>[] = [
    {
        key: 'date',
        header: 'Date'
    },
    {
        key: 'amount',
        header: 'Amount'
    },
    {
        key: 'status',
        header: 'Status'
    },
    {
        key: 'paymentMethod',
        header: 'Payment Method',
        width: 150
    },
]

export const Account: React.FC<{}> = (): React.ReactElement => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const toggleModal = () => {
        setOpenModal(!openModal)
    }
    
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="initial"
            variants={pageTransitions}
            className="content-container"
        >
            <h1>Account details</h1>

            <div className="section-container">
                <div className="detail-box sub-box">
                    <p>Current subscription package</p>
                    <h2>£25</h2>
                    <p className="package-name">Standard Package</p>
                    <button className="standard-button" onClick={() => setOpenModal(true)}>Change Plan</button>
                </div>
                <button className="standard-button latest-bill">View Latest Bill</button>
            </div>
            <div className="section-container">
                <div className="detail-box sub-box">
                    <p><b>Billing Information</b></p>
                    <MetaInfo
                        label="Company name"
                        text="Example Company"
                    />
                     <MetaInfo
                        label="Email address"
                        text="user@example.company"
                    />
                    <MetaInfo
                        label="VAT number"
                        text="GB123456789"
                    />
                    <button  className="standard-button" onClick={() => setOpenModal(true)}>Edit</button>
                </div>
                <div className="detail-box sub-box">
                    <p><b>Payment Method</b></p>
                    <MetaInfo
                        label="Credit Card"
                        text="Visa 5432"
                    />
                     <MetaInfo
                        label="Expiring"
                        text="09/22"
                    />
                    <button  className="standard-button" onClick={() => setOpenModal(true)}>Edit</button>
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
                    <motion.div variants={modalTransitions}>
                        {/* <button onClick={() => setOpenModal(false)} className="standard-button">
                            Close
                        </button> */}
                        <Packages />
                    </motion.div>
                </StyledModal>
        </motion.div>
    )
}
