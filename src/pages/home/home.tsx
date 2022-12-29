import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useRef } from "react";
import { Cart } from "../../components/atoms/cart";
import { Header } from "../../components/atoms/header";
import { styled } from "@mui/system";
import Sidebar from "../../components/atoms/sidebar/sidebar";
import { Calculate } from "../../@types/Calculate";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Wrapper = styled("div")({
  paddingTop: 20,
});

type I = {
  weeks: {
    week1: number;
    week2: number;
    week3: number;
    week4: number;
  };
};

const Home = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      nameCar: "Car 1",
      imageUrl:
        "https://imgd.aeplcdn.com/0x0/cw/ec/40369/Ford-EcoSport-Right-Front-Three-Quarter-159249.jpg?wm=0",
      price: 1.1,
      liter: 30,
    },

    {
      id: 2,
      nameCar: "Car 2",
      imageUrl:
        "https://cdn.autoportal.com/img/new-cars-gallery/ford/ecosport/colors/5f70790ece3b06ada3b1a67905dd6781.jpg",
      price: 1.22,
      liter: 35,
    },

    {
      id: 3,
      nameCar: "Car 3",
      imageUrl:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ford/Ford-Ecosport-2013-2015/2461/front-left-side-47.jpg?impolicy=resize&imwidth=480",
      price: 1.47,
      liter: 40,
    },

    {
      id: 4,
      nameCar: "Car 4",
      imageUrl:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Ford/Ford-Ecosport-2013-2015/2461/front-left-side-47.jpg?impolicy=resize&imwidth=480",
      price: 1.77,
      liter: 45,
    },
  ]);
  const [sidebar, setSidebar] = React.useState(false);
  const [totalThreeMonth,setTotalThreeMonth] = React.useState(0);
  const [totalOneMonth,setTotalOneMonth] = React.useState(0)

  const calculateEvryCarForThreeMonth = (id: number | string) => {
      setSidebar(!sidebar);
      const days = 90;//total three month
      const findIdx = data.find((item)=> item?.id === id);
      if(findIdx) {
         const calculate = findIdx.liter + findIdx.price * days;
         setTotalThreeMonth(calculate);
      }
  }

  const calculateOneMonth = (id: number | string) => {
    const days = 30;
    const findIndex = data.find((item) => item?.id === id);
    if(findIndex) {
        const calc = findIndex.liter + findIndex.price * 30;
        setTotalOneMonth(calc)
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
