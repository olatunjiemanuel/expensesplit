import React, { useState } from "react";

const AddExpenseForm = ({ onAddExpense }: { onAddExpense: (newExpense: any) => void }) => {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState<number | "">("");
    const [paidBy, setPaidBy] = useState("");
    const participants = ["Alice", "Bob", "Charlie"]; // Example participant list

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!name || !amount || !paidBy) {
            alert("Please fill in all fields.");
            return;
        }
        const newExpense = { id: Date.now(), name, amount, paidBy, date: new Date().toISOString() }; 
        onAddExpense(newExpense);
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
            <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>Expense Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: "8px", width: "100%" }}
                />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    style={{ padding: "8px", width: "100%" }}
                />
            </div>
            <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "8px" }}>Paid By:</label>
                <select
                    value={paidBy}
                    onChange={(e) => setPaidBy(e.target.value)}
                    style={{ padding: "8px", width: "100%" }}
                >
                    <option value="" disabled>Select a participant</option>
                    {participants.map(participant => (
                        <option key={participant} value={participant}>{participant}</option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    backgroundColor: "var(--color-primary)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Add Expense
            </button>
        </form>
    );
};

export default AddExpenseForm;
