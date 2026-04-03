import * as React from "react";
import styles from "./index.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PeopleCard from "../../Components/PeopleCard";


const People: React.FC = () => {
    return (
        <div className={styles.peopleContainer}>
            <section className={styles.addPeopleContainer}>
                <Typography variant="h5">Add a new person</Typography>
                <form
                    className={styles.addPeopleForm}
                    // onSubmit={(event) =>
                    //     handleAddExpense(event, newExpense, setExpenses, setNewExpense, setIsModalOpen)
                    // }
                >
                    <div>
                        <Typography variant="subtitle2" component="p" sx={{mb: 2}}>Add a person to your list to start
                            splitting
                            bills with them</Typography>
                        <TextField
                            className={styles.addPersonInput}
                            label="Full Name"
                            name="name"
                            // value={}
                            // onChange={}
                            fullWidth
                            placeholder="Enter Full Name"
                            sx={{mb: 1}}
                        />
                    </div>
                    <Button type="submit" variant="contained" color="primary" sx={{mt: 1}}
                    >Add new person</Button>
                </form>
                <div className={styles.subtextContainer}>
                    <ErrorOutlineIcon/>
                    <Typography variant="subtitle2" component="p" sx={{ml: 1}}>Friends added here can be quickly
                        selected when
                        creating a new expense or managing group balances</Typography>
                </div>

            </section>
            <div className={styles.peopleCardContainer}>
                <Typography variant="h5">Active People</Typography>
                <div>
                    <PeopleCard/>
                    <PeopleCard/>
                    <PeopleCard/>
                </div>
            </div>
        </div>
    )
}

export default People
