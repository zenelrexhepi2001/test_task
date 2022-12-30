import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface Props {
  id: number | string;
  imageUrl?: string;
  title: string;
  price: number;
  calculateForThreeMonth: (id: number | string) => void;
  calculateOneMonth: (id: number | string) => void;
  calculateOneMonthFourMonth: (id: number | string) => void;
  calculateWeeksCarOne: (id: number | string) => void;
  calculateConstMinimal: (id: number | string) => void;
}

const Cart = ({
  id,
  imageUrl,
  title,
  price,
  calculateForThreeMonth,
  calculateOneMonth,
  calculateOneMonthFourMonth,
  calculateWeeksCarOne,
  calculateConstMinimal,
}: Props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 200 }} image={imageUrl} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <footer>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="How much € does each car spend for 3 months?"
                  control={<Radio />}
                  label="How much € does each car spend for 3 months?"
                  onClick={() => calculateForThreeMonth(id)}
                />
                <FormControlLabel
                  value="If Car1 and Car2 work for 1 month and Car3 and Car4 work for 1.5
                  months how much € do they spend in total?"
                  control={<Radio />}
                  label="If Car1 and Car2 work for 1 month and Car3 and Car4 work for 1.5
                  months how much € do they spend in total?"
                  onClick={() => calculateOneMonth(id)}
                />
                {id === 1 ? (
                  <>
                    <FormControlLabel
                      value="What is the average cost for one liter
                  for car 1 & 4 if they work 1 month?"
                      control={<Radio />}
                      label="What is the average cost for one liter
                  for car 1 & 4 if they work 1 month?"
                      onClick={() => calculateOneMonthFourMonth(id)}
                    />
                  </>
                ) : (
                  <></>
                )}
                {id === 4 ? (
                  <>
                    <FormControlLabel
                      value="What is the average cost for one liter
                  for car 1 & 4 if they work 1 month?"
                      control={<Radio />}
                      label="What is the average cost for one liter
                  for car 1 & 4 if they work 1 month?"
                      onClick={() => calculateOneMonthFourMonth(id)}
                    />
                  </>
                ) : (
                  <></>
                )}
                {id === 1 ? (
                  <FormControlLabel
                    value="How much more weeks can Car1 drive
                    within the same budget as Car4 spends for
                    1 month?"
                    control={<Radio />}
                    onClick={() => calculateWeeksCarOne(id)}
                    label="How much more weeks can Car1 drive
                    within the same budget as Car4 spends for
                    1 month?"
                  />
                ) : (
                  <></>
                )}

                {id === 4 ? (
                  <FormControlLabel
                    value="How much more weeks can Car1 drive
                    within the same budget as Car4 spends for
                    1 month?"
                    control={<Radio />}
                    onClick={() => calculateWeeksCarOne(id)}
                    label="How much more weeks can Car1 drive
                    within the same budget as Car4 spends for
                    1 month?"
                  />
                ) : (
                  <></>
                )}

                <FormControlLabel
                  value="What is the minimum monthly cost we need for two cars to be operational?"
                  control={<Radio />}
                  onClick={()=>calculateConstMinimal(id)}
                  label="What is the minimum monthly cost we need for two cars to be operational?"
                />
              </RadioGroup>
            </FormControl>
          </footer>
        </CardActions>
      </Card>
    </>
  );
};

export default Cart;
