import React from 'react'
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styles from "./index.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface PeopleCardProps {
    name: string;
    onDelete: (e:string) => void;
}

const PeopleCard: React.FC<PeopleCardProps> = ({name, onDelete}) => {
    return (
        <div className={styles.peopleCardContainer}>
            <AccountCircleIcon/>
            <Typography>{name}</Typography>
            <div className={styles.deleteButtonContainer} onClick={() => onDelete(name)}>
                <DeleteOutlinedIcon/>
            </div>
        </div>
    )
}

export default PeopleCard
