import Button from '@mui/material/Button';
import styles from "./index.module.css";

//component import
import ExpenseCard from "../../Components/ExpenseCard";
import EmptyState from "../../Components/EmptyState";
import * as React from "react";
import Typography from "@mui/material/Typography";

const Dashboard: React.FC = () => {
    const expenses = [{amount: "85.00", paidBy: "Mark", name: "Weekly Shop"}];
    // const expenses: any[] = [];

    return (
        <div className={styles.dashboardCntnr}>
            <div className={styles.recentExpensesHeaderCntnr}>
                <div>
                    <Typography variant="h6" className={styles.mainHeaderTxt}>Recent Expenses</Typography>
                </div>
                <div>
                    <Button variant="contained">Add New Expense</Button>
                </div>
            </div>
            <div className={styles.recentExpensesContainer}>
                {expenses.length === 0 ? (
                    <EmptyState/>
                ) : (
                    expenses.map((expense, index) => (
                        <ExpenseCard
                            key={index}
                            expenseAmount={expense.amount}
                            expensePaidBy={expense.paidBy}
                            expenseName={expense.name}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;
