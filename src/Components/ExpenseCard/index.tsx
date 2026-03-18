import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import styles from "./index.module.css";

interface ExpenseCardProps {
    id: number;
    name: string;
    amount: number;
    date: string;
    paidBy: string;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({id, name, amount, date, paidBy}) => {
    return (
        <Link to={`/expenses/${id}`} className={styles.cardLink}>
            <Paper elevation={4} className={styles.card}>
                <div className={styles.cardHeader}>
                    <Typography variant="h5" className={styles.name}>
                        {name}
                    </Typography>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardRow}>
                        <span className={styles.icon}>💰</span>
                        <Typography variant="body1" className={styles.detail}>
                            ${amount.toFixed(2)}
                        </Typography>
                    </div>
                    <div className={styles.cardRow}>
                        <span className={styles.icon}>📅</span>
                        <Typography variant="body2" className={styles.detail}>
                            {date}
                        </Typography>
                    </div>
                    <div className={styles.cardRow}>
                        <span className={styles.icon}>🙋</span>
                        <Typography variant="body2" className={styles.detail}>
                            Paid By: {paidBy}
                        </Typography>
                    </div>
                </div>
            </Paper>
        </Link>
    );
};


export default ExpenseCard;
