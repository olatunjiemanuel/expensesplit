import React, {useState} from 'react'
import Typography from "@mui/material/Typography";
import styles from "./index.module.css";

interface ExpensePeopleCardProps {
    name: string;
}


const ExpensePeopleCard: React.FC<ExpensePeopleCardProps> = ({name}) => {
    const [selected, setSelected] = useState(false);

    return (
        <div onClick={() =>setSelected(!selected)}  className={selected ? styles.expensePeopleCardContainerActive : styles.expensePeopleCardContainer}>
            <Typography>
                {name}
            </Typography>
        </div>
    )
}

export default ExpensePeopleCard
