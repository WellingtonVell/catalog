import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import FormDialog from "../Dialog/dialog";
import React from "react";


function Cards(props: any) {
    const [open, setOpen] = React.useState(false);
    const handleClickCard = () =>{
        setOpen(true);
    }

    return (
        <>
        <FormDialog open={open} setOpen={setOpen}
        id={props.id} 
        name={props.name}
        description={props.description}
        image={props.image}
        price={props.price}
        type={props.type}
        listCards={props.listCards}
        setListCards={props.setListCards}
        />
        <Card className="grid-hover" onClick={() => handleClickCard()}>
            <CardMedia
                component="img"
                image={props.image}
                alt={props.name}
                height="200" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}  R$: {props.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
        </>
        

    );




}

export default Cards;