import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = ({ onSearch }) => {
    return (
        <Box sx={{ padding:3, backgroundColor: '#252525' }}>
            <TextField
                fullWidth
                label="Rechercher un Pokémon"
                variant="outlined"
                onChange={(event) => onSearch(event.target.value)}
                sx={{
                    input: { color: 'white' }, // couleur du texte
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "white", // bordure par défaut
                        },
                        "&:hover fieldset": {
                            borderColor: "white", // bordure au survol
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "white", // bordure lors du focus
                        },
                    },
                }}
                InputLabelProps={{
                    style: { color: 'white' }, // couleur du label
                }}
            />
        </Box>
    );
};

export default SearchBar;
