import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import styles from "./index.module.css";


//component imports
import WhoPaid from "../../Components/WhoPaid";
import ExpenseDetailTitle from "../../Components/ExpenseDetailTitle";

const ExpenseDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    const expense = expenses.find((expense: { id: number }) => expense.id === parseInt(id || "", 10));

    if (!expense) {
        return <Typography variant="h6">Expense not found</Typography>;
    }

    return (
        <div style={{ padding: "1rem" }}>
            <Link to = {'/expenses'} className={styles.backButton} > ← back to Expenses</Link>
            <div><WhoPaid/></div>
            <ExpenseDetailTitle/>
            <Typography variant="body1"><strong>Name:</strong> {expense.name}</Typography>
            <Typography variant="body1"><strong>Amount:</strong> ${expense.amount}</Typography>
            <Typography variant="body1"><strong>Date:</strong> {expense.date}</Typography>
            <Typography variant="body1"><strong>Paid By:</strong> {expense.paidBy}</Typography>
            <Typography><strong>participants:</strong> {expense.participants && expense.participants.length ? expense.participants.join(", ") : "None"}</Typography>
        </div>
    );
};

export default ExpenseDetail;
