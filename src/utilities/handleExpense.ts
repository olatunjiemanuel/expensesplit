interface Expense {
    name: string;
    amount: number;
    paidBy: string;
    date: string;
    participants: string[];
    percentages: number[];
}

interface ExpenseSummary {
    [participant: string]: number; // Maps participant's name to the amount they owe
}

function handleExpense(expense: Expense): ExpenseSummary {
    const { amount, participants, percentages, paidBy } = expense;

    // Validate that percentages total 100
    const totalPercentage = percentages.reduce((sum, percentage) => sum + percentage, 0);
    if (totalPercentage !== 100) {
        throw new Error("The percentages must add up to 100.");
    }

    // Calculate each participant's amount owed
    const summary: ExpenseSummary = {};
    participants.forEach((participant, index) => {
        if (participant !== paidBy) {
            const share = (percentages[index] / 100) * amount;
            summary[participant] = parseFloat(share.toFixed(2)); // Round to 2 decimal places
        }
    });

    return summary;
}

export default handleExpense;