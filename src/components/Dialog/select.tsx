import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props: any) {

    return (
        <FormControl sx={{width:210}} >
            <InputLabel id="demo-simple-select-label">Tipo de Óculos</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="type"    
                name="type"           
                label="Tipo de Óculos"
                input={props.type}
            >
                <MenuItem value={'sol'}>Óculos de Sol</MenuItem>
                <MenuItem value={'grau'}>Óculos de Grau</MenuItem>

            </Select>
        </FormControl>
    );
}