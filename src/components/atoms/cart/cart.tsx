import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

interface Props {
  id: number | string;
  imageUrl?: string;
  title: string;
  price: number;
  calculateForThreeMonth: (id: number | string) => void;
  calculateOneMonth: (id: number | string) => void;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Cart = ({
  id,
  imageUrl,
  title,
  price,
  calculateForThreeMonth,
  calculateOneMonth,
  handleChange,
}: Props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={() => calculateForThreeMonth(id)}>
        <CardMedia sx={{ height: 200 }} image={imageUrl} title="green iguana" />
        <CardContent onClick={() => calculateOneMonth(id)}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <select onChange={handleChange}>
            <>
              <option>
                
              </option>
              <option>4months</option>
              <option>5months</option>
            </>
          </select>
        </CardActions>
      </Card>
    </>
  );
};

export default Cart;
