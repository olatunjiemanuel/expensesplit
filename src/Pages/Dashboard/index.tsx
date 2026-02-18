import "./index.css";
import Button from '@mui/material/Button';

//component import
import ExpenseCard from "../../Components/ExpenseCard";

const Dashboard = () => {
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
                <ExpenseCard expenseAmount="85.00" expensePaidBy="Mark" expenseName="Weekly Shop"/>
            </div>
        </div>
    )
}

export default Dashboard

