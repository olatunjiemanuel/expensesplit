import Button from '@mui/material/Button';
import styles from "./index.module.css";
import React, {useState, useEffect} from "react";

//component import
import ExpenseCard from "../../Components/ExpenseCard/index.tsx";
import EmptyState from "../../Components/EmptyState";
import Typography from "@mui/material/Typography";

const Dashboard: React.FC = () => {
    const [expenses, setExpenses] = useState<any[]>([]);

    useEffect(() => {
        // Retrieve expenses from localStorage
        const savedExpenses = localStorage.getItem("expenses");
        if (savedExpenses) {
            setExpenses(JSON.parse(savedExpenses));
        }
    }, []);

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
            <ul className={styles.recentExpensesContainer}>
                {expenses.length === 0 ? (
                    <EmptyState/>
                ) : (
                    expenses.map((expense) => (
                        <ExpenseCard
                            id={expense.id}
                            amount={expense.amount}
                            paidBy={expense.paidBy}
                            name={expense.name}
                            date={expense.date}
                        />
                    ))
                )}
            </ul>
        </div>
    );
};

export default Dashboard;
