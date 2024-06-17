import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const AddTransaction = ({ addTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text || !amount) return;

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        };

        addTransaction(newTransaction);

        setText('');
        setAmount('');
    };

    return (
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6" gutterBottom>
                Add New Transaction
            </Typography>
            <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
                <TextField
                    fullWidth
                    label="Text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Amount (negative - expense, positive - income)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    margin="normal"
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                    Add Transaction
                </Button>
            </Box>
        </Paper>
    );
};

export default AddTransaction;
