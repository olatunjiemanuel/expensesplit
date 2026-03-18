import React, {useState, useEffect} from "react";
import {handleAddExpense} from "../../utilities/utilFunctions";
import styles from "./index.module.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ExpenseCard from "../../Components/ExpenseCard";

const Expenses: React.FC = () => {
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem("expenses");
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });
    const [newExpense, setNewExpense] = useState({name: "", amount: "", date: "", paidBy: ""});
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setNewExpense({...newExpense, [name]: value});
    };


    return (
        <div className={styles.expensesCntnr}>
            <div className={styles.expenseHeaderCtnr}>
                <Typography variant="h4" gutterBottom>
                    Expenses
                </Typography>
                <Button variant="contained" color="primary" onClick={() => setIsModalOpen(true)}>
                    Add Expense
                </Button>
            </div>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Box className={styles.modal}>
                    <Typography variant="h6" gutterBottom>
                        Add New Expense
                    </Typography>
                    <form
                        onSubmit={(event) =>
                            handleAddExpense(event, newExpense, setExpenses, setNewExpense, setIsModalOpen)
                        }
                    >
                        <Grid container spacing={2}>
                            <div>
                                <TextField
                                    label="Expense Name"
                                    name="name"
                                    value={newExpense.name}
                                    onChange={handleInputChange}
                                    fullWidth
                                    placeholder="Enter expense name"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Amount"
                                    name="amount"
                                    value={newExpense.amount}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                            </div>
                            <div>
                                <TextField
                                    name="date"
                                    type="date"
                                    value={newExpense.date}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Paid By"
                                    name="paidBy"
                                    value={newExpense.paidBy}
                                    onChange={handleInputChange}
                                    fullWidth
                                    placeholder="Enter payer name"
                                />
                            </div>
                            <div>
                                <Button type="submit" variant="contained" color="primary">
                                    Submit Expense
                                </Button>
                            </div>
                        </Grid>
                    </form>
                </Box>
            </Modal>
            <div className={styles.expenseCardContainer}>
                {expenses.map((expense: { id: number; name: string; amount: number; date: string; paidBy: string }) => (
                    <ExpenseCard
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        amount={expense.amount}
                        date={expense.date}
                        paidBy={expense.paidBy}
                    />
                ))}
            </div>
        </div>
    );
};

export default Expenses;
