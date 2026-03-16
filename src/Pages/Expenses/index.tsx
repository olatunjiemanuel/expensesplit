import React, {useState, useEffect} from "react";
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

    const handleAddExpense = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Ensure all fields are filled before proceeding
        if (!newExpense.name || !newExpense.amount || !newExpense.date || !newExpense.paidBy) {
            alert("Please fill in all fields.");
            return;
        }

        // Parse amount and generate a unique ID for the expense
        const expenseToAdd = {
            id: Date.now(),
            name: newExpense.name,
            amount: parseFloat(newExpense.amount),
            date: newExpense.date,
            paidBy: newExpense.paidBy,
        };

        // Update state and reset form
        setExpenses((prevExpenses) => [...prevExpenses, expenseToAdd]);
        setNewExpense({name: "", amount: "", date: "", paidBy: ""});
        setIsModalOpen(false);
    };

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    return (
        <div className={styles.expensesCntnr}>
            <div className={styles.expenseHeaderCtnr}>
                <Typography variant="h4" gutterBottom>
                    Expenses
                </Typography>
                <Button variant="contained" color="primary" onClick={handleModalOpen}>
                    Add Expense
                </Button>
            </div>
            <Modal open={isModalOpen} onClose={handleModalClose}>
                <Box className={styles.modal}>
                    <Typography variant="h6" gutterBottom>
                        Add New Expense
                    </Typography>
                    <form onSubmit={handleAddExpense}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Expense Name"
                                    name="name"
                                    value={newExpense.name}
                                    onChange={handleInputChange}
                                    fullWidth
                                    placeholder="Enter expense name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Amount"
                                    name="amount"
                                    value={newExpense.amount}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Date"
                                    name="date"
                                    type="date"
                                    value={newExpense.date}
                                    onChange={handleInputChange}
                                    fullWidth
                                    InputLabelProps={{shrink: true}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Paid By"
                                    name="paidBy"
                                    value={newExpense.paidBy}
                                    onChange={handleInputChange}
                                    fullWidth
                                    placeholder="Enter payer name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary">
                                    Submit Expense
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>
            <div className={styles.expenseCardContainer}>
                {expenses.map((expense) => (
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
