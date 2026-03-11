import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import styles from './index.module.css';
import * as React from "react";

const EmptyState: React.FC = () => {
    return (
        <Box className={styles.emptyStateContainer}>
            <ReceiptLongIcon className={styles.emptyStateIcon}/>
            <Typography
                variant="h6"
                color="text.secondary"
                className={styles.emptyStateTitle}
            >
                No expenses yet
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                className={styles.emptyStateText}
            >
                Add your first expense using the button above
            </Typography>
        </Box>
    );
};

export default EmptyState;
