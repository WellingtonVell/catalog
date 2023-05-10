import { Box, Button, TextField, createTheme, styled } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Product from "../components/products";

const themee = createTheme({
    palette: {
        secondary: {
            main: 'rgb(49, 199, 199)',
        },
        primary: {
            main: 'rgb(243, 245, 131)',
        }
    },
});


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: themee.palette.secondary.main,
        color: themee.palette.primary.main,
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


const rows = [
    Product(1, 'ProdutoT2 1', 'This is the first product', 'https://example.com/product1.jpg', 150),
    Product(2, 'ProdutoT2 2', 'This is the second product', 'https://example.com/product1.jpg', 120),
    Product(3, 'ProdutoT2 3', 'This is the third product', 'https://example.com/product1.jpg', 130),
    Product(4, 'ProdutoT2 4', 'This is the third product', 'https://example.com/product1.jpg', 100),
    Product(5, 'ProdutoT2 2', 'This is the third product', 'https://example.com/product1.jpg', 180),
    Product(6, 'ProdutoT2 6', 'This is the third product', 'https://example.com/product1.jpg', 190),
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
                <div style={{ container: 'inherit', padding: '10' }}>
                    <header style={{ container: 'inherit', backgroundColor: 'azure', fontSize: 20, textAlign: "center" }}>Adicionar Óculos de Sol</header>
                    <ul>
                        <TextField
                            required
                            id="{outlined-required}"
                            label="Nome do Produto"
                            placeholder="Nome do Produto"
                        />
                    </ul>
                    <ul>
                        <TextField
                            required
                            id="outlined-required"
                            label="Description"
                            placeholder="Description"
                        />
                    </ul>
                    <ul>
                        <TextField
                            required
                            id="outlined-required"
                            label="Imagem"
                            placeholder="Insira Imagem"
                        />
                    </ul>
                    <ul>
                        <TextField
                            required
                            id="outlined-number"
                            label="Price"
                            type="number"
                            placeholder="R$: 00,00"
                        />
                    </ul>
                    <ul>
                        <Button type="submit" className="btn-add" variant="contained" size="medium" style={{ padding: 8, marginLeft: 8 }}>
                            Adicionar Produto
                        </Button>
                    </ul>
                </div>
                <div style={{ container: 'inherit', padding: '10' }}>
                    <header style={{ container: 'inherit', backgroundColor: 'azure', fontSize: 20, textAlign: "center" }}>Adicionar Óculos de Grau</header>
                    <ul>
                        <TextField
                            required
                            id="{outlined-required}"
                            label="Nome do Produto"
                            placeholder="Nome do Produto"
                        />
                    </ul>
                    <ul>
                        <TextField
                            required
                            id="outlined-required"
                            label="Description"
                            placeholder="Description"
                        />
                    </ul>
                    <ul>
                        <TextField
                            required
                            id="outlined-required"
                            label="Imagem"
                            placeholder="Insira Imagem"
                        />
                    </ul>
                    <ul>
                        <TextField
                            required
                            id="outlined-number"
                            label="Price"
                            type="number"
                            placeholder="R$: 00,00"
                        />
                    </ul>
                    <ul>
                        <Button type="submit" className="btn-add" variant="contained" size="medium" style={{ padding: 8, marginLeft: 8 }}>
                            Adicionar Produto
                        </Button>
                    </ul>
                </div>
            </Box>

            <TableContainer component={Paper} style={{ paddingTop: 20, padding: 10 }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Nome do Produto</StyledTableCell>
                            <StyledTableCell align="right">Descrição</StyledTableCell>
                            <StyledTableCell align="right">Imagem</StyledTableCell>
                            <StyledTableCell align="right">Preço</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.description}</StyledTableCell>
                                <StyledTableCell align="right">{row.imagem}</StyledTableCell>
                                <StyledTableCell align="right">{row.preço}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}



export default Comp;