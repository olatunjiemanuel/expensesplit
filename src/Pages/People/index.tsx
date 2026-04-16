import React, {useEffect, useState} from "react";
import styles from "./index.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PeopleCard from "../../Components/PeopleCard";
import Alert from '@mui/material/Alert';


const People: React.FC = () => {


    const [personInput, setPersonInput] = useState<string>("")
    const [positiveAlert, setPositivAlert] = useState(false);
    const [negativeAlert, setNegativeAlert] = useState(false);
    const [people, setPeople] = useState<string[]>(() => {
        const savedPeople = localStorage.getItem("people");
        return savedPeople ? JSON.parse(savedPeople) : [];
    });


    useEffect(() => {
        localStorage.setItem("people", JSON.stringify(people));
    }, [people]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPersonInput(e.target.value);
    }

    const onDelete = (person: string) => {
        setPeople(people.filter((p) => p !== person));
        localStorage.setItem("people", JSON.stringify(people));
        setNegativeAlert(true);
        setTimeout(() => setNegativeAlert(false), 3000);
    }

    return (
        <div>
            <div className={styles.peopleContainer}>
                <section className={styles.addPeopleContainer}>
                    <Typography variant="h5">Add a new person</Typography>
                    <form
                        className={styles.addPeopleForm}
                        onSubmit={(event) => {
                            event.preventDefault();
                            if (personInput.trim()) {
                                setPeople((prevPeople) => [...prevPeople, personInput.trim()]);
                                setPersonInput("");
                            }
                            setPositivAlert(true);
                            setTimeout(() => setPositivAlert(false), 3000);
                        }}
                    >
                        <div>
                            <Typography variant="subtitle2" component="p" sx={{mb: 2}}>Add a person to your list to
                                start
                                splitting
                                bills with them</Typography>
                            <TextField
                                className={styles.addPersonInput}
                                label="Full Name"
                                name="name"
                                value={personInput}
                                onChange={handleChange}
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
                {people.length != 0 ? <div className={styles.peopleCardContainer}>
                    <Typography variant="h5">Active People</Typography>
                    <div>
                        {people.map((person, index) => (
                            <PeopleCard key={index} name={person} onDelete={onDelete}/>
                        ))}
                    </div>
                </div> : null}
            </div>

            {positiveAlert && (
                <div className={styles.confirmationContainer}>
                    <Alert severity="success">
                        Successfully added {personInput} to the list
                    </Alert>
                </div>
            )}
            {negativeAlert && (
                <div className={styles.confirmationContainer}>
                    <Alert severity="error">
                        Successfully deleted {personInput} from the list
                    </Alert>
                </div>
            )}

        </div>
    )
}

export default People
