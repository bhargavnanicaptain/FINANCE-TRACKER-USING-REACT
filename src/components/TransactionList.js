import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Paper } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const TransactionList = ({ transactions, deleteTransaction }) => {
    return (
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6" gutterBottom>
                History
            </Typography>
            <List>
                {transactions.map(transaction => (
                    <ListItem key={transaction.id}>
                        <ListItemText
                            primary={transaction.text}
                            secondary={`$${transaction.amount}`}
                            sx={{ textDecoration: transaction.amount < 0 ? 'line-through' : 'none' }}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default TransactionList;
