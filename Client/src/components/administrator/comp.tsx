import { Box, Button, Grid } from "@mui/material";
import "./comp.css"
import { useEffect, useState } from "react";
import Axios from "axios";
import Cards from "../Cards/cards";

function Comp() {

    const [values, setValues] = useState<any>();
    const [products, setProducts] = useState<any>();

    const handleChangeValues = (value: any) => {
        setValues((prevValues: any) => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = () => {
        Axios.post("http://localhost:5000/register", {
            name: values.name,
            description: values.description,
            image: values.image,
            price: values.price,
            type: values.type,
        }).then((response) => {
            console.log(response);
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:5000/getProducts").then((response) => {
            setProducts(response.data);
        });
    }, []);

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
                <div className="comp-test">
                    <h1 style={{ container: 'inherit', backgroundColor: 'azure', fontSize: 20, textAlign: "center" }}>Adicionar Óculos</h1>
                    <ul>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            className="registro-input"
                            onChange={handleChangeValues} />
                    </ul>
                    <ul>
                        <input
                            type="text"
                            name="description"
                            placeholder="Descrição"
                            className="registro-input"
                            onChange={handleChangeValues} />
                    </ul>
                    <ul>
                        <input
                            type="text"
                            name="image"
                            placeholder="Imagem"
                            className="registro-input"
                            onChange={handleChangeValues} />
                    </ul>
                    <ul>
                        <input
                            type="text"
                            name="price"
                            placeholder="Preço"
                            className="registro-input"
                            onChange={handleChangeValues} />
                    </ul>
                    <ul>
                        <input 
                            type="text"
                            name="type"
                            placeholder="Tipo de Óculos"
                            className="registro-input"
                            onChange={handleChangeValues} />
                    </ul>
                    <ul>
                        <Button className="btn-add" variant="contained" size="large"
                            onClick={handleClickButton}>
                            Adicionar Produto
                        </Button>
                    </ul>
                </div>
                <Grid container spacing={2} paddingY={5} paddingX={2}>
                    {typeof products !== "undefined" && products.map((value: any) => (
                        <Grid item xs={12} sm={6} md={4} key={value.id}>
                            <Cards
                                key={value.id}
                                listCards={products}
                                setListCards={setProducts}
                                id={value.id}
                                name={value.name}
                                description={value.description}
                                image={value.image}
                                price={value.price}
                                type={value.type}>
                            </Cards>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}

export default Comp;