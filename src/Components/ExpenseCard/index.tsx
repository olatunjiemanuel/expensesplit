import './index.css'

interface ExpenseCardProps {
    expenseName: string;
    expensePaidBy: string;
    expenseAmount: string;

}

const ExpenseCard = ({expenseName, expensePaidBy, expenseAmount}: ExpenseCardProps) => {
    return (
        <div className="expenseCardCtnr">
            <div>
                <h3>{expenseName}</h3>
                <p className="subHeadText">Paid by {expensePaidBy}</p>
            </div>
            <div className="amountCtnr">
                <p>£{expenseAmount}</p>
            </div>
        </div>
    )
}

export default ExpenseCard

