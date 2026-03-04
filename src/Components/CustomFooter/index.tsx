import "./index.css"
import * as React from "react";
import Typography from "@mui/material/Typography";

const CustomFooter: React.FC = () => {
    return (
        <footer className="footerBottom">
            <div>
                <Typography variant="subtitle2">© {new Date().getFullYear()} ExpenseSplit. All rights
                    reserved.</Typography>
            </div>
        </footer>
    )
}

export default CustomFooter
