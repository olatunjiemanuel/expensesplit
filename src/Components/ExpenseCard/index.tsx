import * as React from "react";
import Typography from "@mui/material/Typography";
import styles from './index.module.css'

interface ExpenseCardProps {
    expenseName: string;
    expensePaidBy: string;
    expenseAmount: string;

}

const ExpenseCard: React.FC<ExpenseCardProps> = ({expenseName, expensePaidBy, expenseAmount}: ExpenseCardProps) => {
    return (
        <div className={styles.expenseCardCtnr}>
            <div>
                <Typography variant="h6">{expenseName}</Typography>
                <Typography variant="subtitle1" className={styles.subHeadText}>Paid by {expensePaidBy}</Typography>
            </div>
            <div className={styles.amountCtnr}>
                <Typography variant="subtitle1">£{expenseAmount}</Typography>
            </div>
        </div>
    )
}

export default ExpenseCard
