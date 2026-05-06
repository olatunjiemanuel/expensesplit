import React, {useState, useEffect} from "react";
import styles from "./index.module.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ExpenseCard from "../../Components/ExpenseCard";
import ExpensePeopleCard from "../../Components/ExpensePeopleCard";


const Expenses: React.FC = () => {
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem("expenses");
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });
    const [newExpense, setNewExpense] = useState({name: "", amount: "", date: "", paidBy: "", participants: [] as string[]});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);
    const [people] = useState(() => {
        const savedPeople = localStorage.getItem("people");
        return savedPeople ? JSON.parse(savedPeople) : [];
    });


    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    useEffect(() => {
        setNewExpense((prev) => ({ ...prev, participants: selectedParticipants }));
    }, [selectedParticipants]);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setNewExpense({...newExpense, [name]: value});
    };

    const handleAddExpenseSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { name, amount, date, paidBy } = newExpense;
        if (!name || !amount || !date || !paidBy) {
            alert("Please fill in all fields.");
            return;
        }
        if (selectedParticipants.length === 0) {
            alert("Please select at least one participant.");
            return;
        }
        const expenseToAdd = {
            id: Date.now(),
            name,
            amount: parseFloat(amount),
            date,
            paidBy,
            participants: [...selectedParticipants],
        };
        setExpenses((prev: any[]) => [...prev, expenseToAdd]);
        setNewExpense({ name: "", amount: "", date: "", paidBy: "", participants: [] });
        setSelectedParticipants([]);
        setIsModalOpen(false);
    };


    return (
        <div className={styles.expensesCntnr}>
            <div className={styles.expenseHeaderCtnr}>
                <Typography variant="h4" gutterBottom>
                    Expenses
                </Typography>
                <Button variant="contained" color="primary" onClick={() => { setSelectedParticipants([]); setIsModalOpen(true); }}>
                    Add Expense
                </Button>
            </div>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Box className={styles.modal}>
                    <Typography variant="h6" gutterBottom>
                        Add New Expense
                    </Typography>
                    <form
                        onSubmit={handleAddExpenseSubmit}
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
                                {/*todo* add logic for user to add people to a new expense when creating one*/}
                                {/*onClick should potentially also push the selected persons to a new array to be added to the new expense*/}
                                {
                                    people.map((person: string) => (
                                        <ExpensePeopleCard
                                            key={person}
                                            name={person}
                                            selected={selectedParticipants.includes(person)}
                                            onToggle={(name, nextSelected) =>
                                                setSelectedParticipants((prev) =>
                                                    nextSelected
                                                        ? (prev.includes(name) ? prev : [...prev, name])
                                                        : prev.filter((p) => p !== name)
                                                )
                                            }
                                        />
                                    ))
                                }
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
                {expenses.map((expense: { id: number; name: string; amount: number; date: string; paidBy: string; participants: string[] }) => (
                    <ExpenseCard
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        amount={expense.amount}
                        date={expense.date}
                        paidBy={expense.paidBy}
                        participants={expense.participants || []}
                    />
                ))}
            </div>
        </div>
    );
};

export default Expenses;
