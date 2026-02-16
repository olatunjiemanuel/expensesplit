import './index.css'
import Divider from '@mui/material/Divider';


const CustomHeader = () => {
    return (
        <div>
            <div className="headerCtnr">
                <div className="logo">
                    <p className="logoText">ExpenseSplit</p>
                </div>
                <div className="navContainer">
                    <div>
                        <a href="/">Dashboard</a>
                    </div>
                    <div>
                        <a href="/">Expenses</a>
                    </div>
                    <div>
                        <a href="/">People</a>
                    </div>
                </div>
            </div>
            <Divider/>
        </div>
    )
}

export default CustomHeader
