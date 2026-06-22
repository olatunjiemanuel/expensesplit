import React from 'react'
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';

// style imports
import {CardHeader} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';

const WhoPaid: React.FC = () => {
    return (
        <Card variant="outlined" sx={{maxWidth: 345}}>
            <CardHeader title="Paid By" subheader="Alex Smith" avatar={
                <Avatar>A</Avatar>
            }/>
            <CardContent>
                <Typography variant="body2">
                    Amount: $56
                </Typography>
            </CardContent>
        </Card>
    )
}

export default WhoPaid
