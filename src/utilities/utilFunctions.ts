import React from "react";

export const handleAddExpense = (
    event: React.SyntheticEvent<HTMLFormElement>,
    newExpense: { name: string; amount: string; date: string; paidBy: string },
    setExpenses: React.Dispatch<React.SetStateAction<{
        id: number;
        name: string;
        amount: number;
        date: string;
        paidBy: string
    }[]>>,
    setNewExpense: React.Dispatch<React.SetStateAction<{ name: string; amount: string; date: string; paidBy: string }>>,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
    event.preventDefault();
    if (!newExpense.name || !newExpense.amount || !newExpense.date || !newExpense.paidBy) {
        alert("Please fill in all fields.");
        return;
    }
    const expenseToAdd = {
        id: Date.now(),
        name: newExpense.name,
        amount: parseFloat(newExpense.amount),
        date: newExpense.date,
        paidBy: newExpense.paidBy,
    };
    setExpenses((currentExpenses) => [...currentExpenses, expenseToAdd]);
    setNewExpense({name: "", amount: "", date: "", paidBy: ""});
    setIsModalOpen(false);
};
