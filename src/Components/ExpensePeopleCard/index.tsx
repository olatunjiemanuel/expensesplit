import React from 'react'
import Typography from "@mui/material/Typography";
import styles from "./index.module.css";

interface ExpensePeopleCardProps {
    name: string;
    selected?: boolean;
    onToggle?: (name: string, selected: boolean) => void;
}

const ExpensePeopleCard: React.FC<ExpensePeopleCardProps> = ({name, selected = false, onToggle}) => {
    const handleClick = () => {
        onToggle?.(name, !selected);
    };

    return (
        <div onClick={handleClick} className={selected ? styles.expensePeopleCardContainerActive : styles.expensePeopleCardContainer}>
            <Typography>
                {name}
            </Typography>
        </div>
    )
}

export default ExpensePeopleCard
