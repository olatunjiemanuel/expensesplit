import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import './index.css';
import * as React from "react";

const EmptyState:React.FC = () => {
    return (
        <Box className="emptyStateContainer">
            <ReceiptLongIcon className="emptyStateIcon" />
            <Typography 
                variant="h6" 
                color="text.secondary" 
                className="emptyStateTitle"
            >
                No expenses yet
            </Typography>
            <Typography 
                variant="body2" 
                color="text.secondary" 
                className="emptyStateText"
            >
                Add your first expense using the button above
            </Typography>
        </Box>
    );
};

export default EmptyState;
