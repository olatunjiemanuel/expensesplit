import './index.css'
import Divider from '@mui/material/Divider';
import {NavLink} from 'react-router-dom';


const CustomHeader = () => {
    return (
        <div>
            <div className="headerCtnr">
                <div className="logo">
                    <p className="logoText">ExpenseSplit</p>
                </div>
                <div className="navContainer">
                    <div>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
                    </div>
                    <div>
                        <NavLink to="/expenses" className={({ isActive }) => isActive ? 'active' : ''}>Expenses</NavLink>
                    </div>
                    <div>
                        <NavLink to="/people" className={({ isActive }) => isActive ? 'active' : ''}>People</NavLink>
                    </div>
                </div>
            </div>
            <Divider/>
        </div>
    )
}

export default CustomHeader
