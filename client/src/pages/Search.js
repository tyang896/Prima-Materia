import { borderRadius, margin } from "@mui/system";
import React, { useState, useEffect } from "react";
import { searchMagicCards } from "../utils/API";
import { alpha, styled } from '@mui/material/styles';

import {
    Container,
    TextField,
    Box,
    Autocomplete,
    FormControlLabel,
    Checkbox
} from "@mui/material";

import FormControl from '@mui/material/FormControl';

const SearchBox = styled(TextField)({
    '& label.Mui-focused': {
        color: '#fff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'teal',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'teal',
        },
        '&:hover fieldset': {
            borderColor: 'teal',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'teal',
        },
    },
});

const AutoSearch = styled(Autocomplete)({
    '& label.Mui-focused': {
        color: '#fff',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'teal',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'teal',
        },
        '&:hover fieldset': {
            borderColor: 'teal',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'teal',
        },
    },
});

const cardTypes = [
    { label: 'Creatures' },
    { label: 'Enchantments' },
    { label: 'Lands' },
    { label: 'Sorceries' },
    { label: 'Artifacts' },
    { label: 'Instants' },

]


export const Search = () => {

    //     const [searchedCards, setSearchedCards] = useState([]);


    //     useEffect(() => {
    //         if(cardData) {
    //             return () => setSearchedCards(cardData);
    //         }
    //     }, []);

    //     if (!cardData) {
    //         return false;
    //     }
    //     console.log(cardData);

    //     const handleFormSubmit = async (event) => {

    //         event.preventDefault();

    //     if (!searchInput) {
    //         return false;
    //     }

    //     try {

    //     const response = searchMagicCards();

    //     if (!response.ok) {
    //         throw new Error('something went wrong!');
    //     }

    //     const { cards } = response.json();

    //     const cardData = cards.map((card) => ({
    //         cardId: card.id,
    //         name: card.name,
    //         type: card.type,
    //         text: card.text,
    //         image: card.imageUrl,
    //     }));

    // } catch (err) {
    //     console.error(err);
    // }

    // };
    return (
        <>
            <Container maxWidth="md" sx={{ margin: "10em" }}>
                <h2 style={{ color: '#fff' }}>Search for Cards</h2>
                <Box
                    component="form"
                    noValidate
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { sm: '1fr 1fr' },
                        gap: 2,
                    }}
                >
                    <SearchBox label="Search by Card Name" id="search-box" sx={{ input: { color: '#fff', }, label: { color: '#fff', } }} />

                    <AutoSearch
                        disablePortal
                        id="search-box"
                        options={cardTypes}
                        sx={{ input: { color: '#fff', }, label: { color: '#fff', } }}
                        renderInput={(params) => <TextField {...params} label="Card Type" />}
                    />

                    <SearchBox label="Search by Subtype (dragon, cat, zombie, squirrel, etc.)" id="custom-css-outlined-input" sx={{ input: { color: '#fff', }, label: { color: '#fff', } }} />

                    <Box>

                        <FormControlLabel control={<Checkbox defaultUnchecked color="secondary" />} label="White" sx={{ color: '#fff' }} />
                        <FormControlLabel control={<Checkbox defaultUnchecked color="secondary" />} label="Blue" sx={{ color: '#fff' }} />
                        <FormControlLabel control={<Checkbox defaultUnchecked color="secondary" />} label="Green" sx={{ color: '#fff' }} />
                        <FormControlLabel control={<Checkbox defaultUnchecked color="secondary" />} label="Red" sx={{ color: '#fff' }} />
                        <FormControlLabel control={<Checkbox defaultUnchecked color="secondary" />} label="Black" sx={{ color: '#fff' }} />

                    </Box>
                </Box>
                {/* <button style={{ color: '#fff', margin: '20em', padding: '2em', backgroundColor: 'green', borderRadius: '8px' }} onClick={() => searchMagicCards()}>Test API</button> */}
            </Container >
        </>
    )
}

export default Search;