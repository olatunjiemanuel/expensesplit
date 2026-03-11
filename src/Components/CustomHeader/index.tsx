import * as React from "react";
import styles from './index.module.css'
import Divider from '@mui/material/Divider';
import {NavLink} from 'react-router-dom';
import Typography from "@mui/material/Typography";


const CustomHeader: React.FC = () => {
    return (
        <div>
            <div className={styles.headerCtnr}>
                <div className="logo">
                    <p><Typography variant="h6">ExpenseSplit</Typography></p>
                </div>
                <div className={styles.navContainer}>
                    <div>
                        <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}><Typography
                            variant="button">Dashboard</Typography></NavLink>
                    </div>
                    <div>
                        <NavLink to="/expenses" className={({isActive}) => isActive ? styles.active : ''}><Typography
                            variant="button">Expenses</Typography></NavLink>
                    </div>
                    <div>
                        <NavLink to="/people" className={({isActive}) => isActive ? styles.active : ''}><Typography
                            variant="button">People</Typography></NavLink>
                    </div>
                </div>
            </div>
            <Divider/>
        </div>
    )
}

export default CustomHeader
