import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Selects = ({data, setDifficultyChange}) => {
    const handleChange = (e) => {
        setDifficultyChange(e.target.value);
    };

    return (
        <Box sx={{minWidth: 350, height: "50%", border: 1, borderRadius: 2, borderColor: "grey.500"}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Difficulty"
                    onChange={handleChange}>
                    {data.map((dt, i) => (
                        <MenuItem value={dt}>{dt}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Selects;
