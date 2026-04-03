import React from 'react'
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styles from "./index.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PeopleCard: React.FC = () => {
    return (
        <div className={styles.peopleCardContainer}>
            <AccountCircleIcon/>
            <Typography>Sarah Jenkins</Typography>
            <div className={styles.deleteButtonContainer}>
                <DeleteOutlinedIcon/>
            </div>
        </div>
    )
}

export default PeopleCard
