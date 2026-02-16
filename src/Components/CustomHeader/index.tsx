import './index.css'
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom';


const CustomHeader = () => {
    return (
        <div>
            <div className="headerCtnr">
                <div className="logo">
                    <p className="logoText">ExpenseSplit</p>
                </div>
                <div className="navContainer">
                    <div>
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div>
                        <Link to="/expenses">Expenses</Link>
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
