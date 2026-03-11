import * as React from "react";
import styles from "./index.module.css"
import Typography from "@mui/material/Typography";


const Expenses: React.FC = () => {
    return (
        <div className={styles.expensesCntnr}>
            <Typography>Expenses</Typography>
        </div>
    )
}

export default Expenses
