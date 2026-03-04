import * as React from "react";
import './index.css'
import Divider from '@mui/material/Divider';
import {NavLink} from 'react-router-dom';
import Typography from "@mui/material/Typography";


const CustomHeader: React.FC = () => {
    return (
        <div>
            <div className="headerCtnr">
                <div className="logo">
                    <p><Typography variant="h6">ExpenseSplit</Typography></p>
                </div>
                <div className="navContainer">
                    <div>
                        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}><Typography
                            variant="button">Dashboard</Typography></NavLink>
                    </div>
                    <div>
                        <NavLink to="/expenses" className={({isActive}) => isActive ? 'active' : ''}><Typography
                            variant="button">Expenses</Typography></NavLink>
                    </div>
                    <div>
                        <NavLink to="/people" className={({isActive}) => isActive ? 'active' : ''}><Typography
                            variant="button">People</Typography></NavLink>
                    </div>
                </div>
            </div>
            <Divider/>
        </div>
    )
}

export default CustomHeader
