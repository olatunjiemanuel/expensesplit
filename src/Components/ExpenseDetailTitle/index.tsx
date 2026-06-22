import React from 'react'
import {CardHeader} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const ExpenseDetailTitle: React.FC = () => {
    return (
        <Card variant="outlined" sx={{maxWidth: 345}}>
            <CardHeader title="Food Shop" subheader="2026-06-02" avatar={
                <Avatar>F</Avatar>
            }/>
            <CardContent>
                <Typography variant="body2">
                    Amount: $56
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ExpenseDetailTitle
