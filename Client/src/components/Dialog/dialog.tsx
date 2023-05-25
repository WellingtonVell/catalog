import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';
import MultipleSelect from './select';

export default function FormDialog(props: any) {

    const [editValues, setEditValues] = React.useState({
        id: props.id,
        name: props.name,
        description: props.description,
        image: props.image,
        price: props.price,
        type: props.type,
    });

    const handleEditProduct = () => {
        Axios.put("http://localhost:5000/edit", {
            id: editValues.id,
            name: editValues.name,
            description: editValues.description,
            image: editValues.image,
            price: editValues.price,
            type: editValues.type,
        });
        handleClose();
    };

    const handleDeleteProduct = () => {
        Axios.delete(`http://localhost:5000/delete/${editValues.id}`);
        handleClose();
    };

    const handleClickOpen = () => {
        props.setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleChanheValues = (value: any) => {
        setEditValues((prevValues: any) => ({
            ...prevValues,
            [value.target.id]: value.target.value,
        }));

    };

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle>Editar</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nome do Produto"
                    defaultValue={props.name}
                    onChange={handleChanheValues}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    label="Descrição"
                    defaultValue={props.description}
                    onChange={handleChanheValues}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="image"
                    label="Imagem"
                    defaultValue={props.image}
                    onChange={handleChanheValues}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="price"
                    label="Preço do Produto"
                    defaultValue={props.price}
                    onChange={handleChanheValues}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="type"
                    label="Tipo do Óculos"
                    defaultValue={props.type}
                    onChange={handleChanheValues}
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleDeleteProduct}>Excluir</Button>
                <Button onClick={handleEditProduct}>Salvar</Button>
            </DialogActions>
        </Dialog>

    );
}