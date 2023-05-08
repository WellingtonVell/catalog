import { Box, Button, TextField, styled } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];


function Comp() {
    return (
        <div className="Comp">
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{ alignContent: 'center' }}
            >
                <div >
                    <TextField
                        required
                        id="outlined-required"
                        label="Nome do Produto"
                        placeholder="Nome do Produto"
                    />
                    <TextField
                        required
                        id="outlined-number"
                        label="Price"
                        type="number"
                        placeholder="R$: 00,00"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Description"
                        placeholder="Description"
                    />
                </div>
                <Button type="submit" className="btn-add" variant="contained" size="medium" style={{ padding: 8, marginLeft: 8 }}>
                    Adicionar Produto
                </Button>
            </Box>

            <TableContainer component={Paper} style={{paddingTop:20, padding:10}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nome do Produto</StyledTableCell>
                            <StyledTableCell align="right">Preço</StyledTableCell>
                            <StyledTableCell align="right">Descrição</StyledTableCell>
                            <StyledTableCell align="right">Imagem</StyledTableCell>    
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>      
        </div>
    );
}



export default Comp;