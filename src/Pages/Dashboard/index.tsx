import "./index.css";
import Button from '@mui/material/Button';

//component import
import ExpenseCard from "../../Components/ExpenseCard";
import EmptyState from "../../Components/EmptyState";

const Dashboard = () => {
    // const expenses = [{ amount: "85.00", paidBy: "Mark", name: "Weekly Shop" }];
    const expenses: any[] = [];

    return (
        <div className="dashboardCntnr">
            <div className="recentExpensesHeaderCntnr">
                <div>
                    <h1 className="mainHeaderTxt">Recent Expenses</h1>
                </div>
                <div>
                    <Button variant="contained">Add New Expense</Button>
                </div>
            </div>
            <div className="recentExpensesContainer">
                {expenses.length === 0 ? (
                    <EmptyState />
                ) : (
                    expenses.map((expense, index) => (
                        <ExpenseCard
                            key={index}
                            expenseAmount={expense.amount}
                            expensePaidBy={expense.paidBy}
                            expenseName={expense.name}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;

