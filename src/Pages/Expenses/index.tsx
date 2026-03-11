import React, {useState} from "react";
import styles from "./index.module.css";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import mockExpenses from "../../utilities/mockExpenses";

const Expenses: React.FC = () => {
    const [expenses, setExpenses] = useState(mockExpenses);
    const [newExpense, setNewExpense] = useState({name: "", amount: "", date: "", paidBy: ""});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setNewExpense({...newExpense, [name]: value});
    };

    const handleAddExpense = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newExpense.name && newExpense.amount && newExpense.date && newExpense.paidBy) {
            const newId = expenses.length + 1;
            const expenseToAdd = {id: newId, ...newExpense, amount: parseFloat(newExpense.amount)};
            setExpenses([...expenses, expenseToAdd]);
            setNewExpense({name: "", amount: "", date: "", paidBy: ""});
            setIsModalOpen(false);
        }
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
                                    label="Name"
                                    name="name"
                                    value={newExpense.name}
                                    onChange={handleInputChange}
                                    fullWidth
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
            <TableContainer component={Paper} className={styles.table}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Paid By</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {expenses.map((expense) => (
                            <TableRow key={expense.id}><TableCell>{expense.name}</TableCell>
                                <TableCell>${expense.amount}</TableCell>
                                <TableCell>{expense.date}</TableCell>
                                <TableCell>{expense.paidBy}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Expenses;


