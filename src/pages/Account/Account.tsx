import { motion } from "framer-motion";
import { pageTransitions } from "utils/Animations";
import './Account.css';
import { ColumnDefinitionType } from 'components/Table/Table';
import { Table } from 'components';

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
                    <button>Change Plan</button>
                </div>
                <button className="latest-bill">View Latest Bill</button>
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

        </motion.div>
    )
}
