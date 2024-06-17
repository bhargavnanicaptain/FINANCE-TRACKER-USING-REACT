import React from 'react';
import { Paper, Typography } from '@mui/material';

const Balance = ({ transactions }) => {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <Paper elevation={3} sx={{ p: 2, mt: 2, textAlign: 'center' }}>
            <Typography variant="h5">Your Balance</Typography>
            <Typography variant="h6">${total}</Typography>
        </Paper>
    );
};

export default Balance;
