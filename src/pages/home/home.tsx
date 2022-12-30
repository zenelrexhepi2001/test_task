import React, { useRef } from "react";
import { Grid } from "@mui/material";
import { Cart } from "../../components/atoms/cart";
import { Header } from "../../components/atoms/header";
import { styled } from "@mui/system";
import Sidebar from "../../components/atoms/sidebar/sidebar";
import {data} from '../../data/data';

const Wrapper = styled("div")({
  paddingTop: 20,
});


const Home = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const [totalThreeMonth,setTotalThreeMonth] = React.useState(0);
  const [totalOneMonth,setTotalOneMonth] = React.useState(0)

  const calculateEvryCarForThreeMonth = (id: number | string) => {
      setSidebar(!sidebar);
      const days = 90;//total three month
      let total = 0;
      const findIdx = data.find((item)=> item?.id === id);
      if(findIdx) {
         const calculate = findIdx.liter + findIdx.price * days;
         total = calculate;
         setTotalThreeMonth(total);
      }
  }

  const calculateOneMonth = (id: number | string) => {
    const days = 30;
    let total = 0;
    const findIndex = data.find((item) => item?.id === id);
    if(findIndex) {
        const calc = findIndex.liter + findIndex.price * days;
        total = calc;
        setTotalOneMonth(total)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {

  }

  return (
    <>
      <Header />
      <Wrapper>
        <Grid
          container
          spacing={1}
          justifyContent="space-between"
          sx={{ gridRowGap: "20px" }}
        >
          {data.map((item) => (
            <Grid item xs={4} key={item?.id}>
              <Cart
                id={item?.id}
                imageUrl={item?.imageUrl}
                title={item?.nameCar}
                price={item?.price}
                handleChange={handleChange}
                calculateForThreeMonth={calculateEvryCarForThreeMonth}
                calculateOneMonth={calculateOneMonth}
                //showForm={showForm}
              />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
      {
        sidebar &&<Sidebar totalThreeMonth={totalThreeMonth} totalOneMonth={totalOneMonth}/>
      }
    </>
  );
};

export default Home;
