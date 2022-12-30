import React, { useRef } from "react";
import { Grid } from "@mui/material";
import { Cart } from "../../components/atoms/cart";
import { Header } from "../../components/atoms/header";
import { styled } from "@mui/system";
import Sidebar from "../../components/atoms/sidebar/sidebar";
import { data } from "../../data/data";

const Wrapper = styled("div")({
  paddingTop: 20,
});

const Home = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const [totalThreeMonth, setTotalThreeMonth] = React.useState(0);
  const [totalOneMonth, setTotalOneMonth] = React.useState(0);
  const [totalOneLiter, setTotalOneLiter] = React.useState(0);
  const [totalWeeksOneCar, setTotalWeeksOneCar] = React.useState(0);
  const [totalFourCarMonth,setTotalFourCarMonth] = React.useState(0);
  const [totalMinimal,setTotalMinimal]=React.useState(0);

  const calculateEvryCarForThreeMonth = (id: number | string) => {
    setSidebar(!sidebar);
    const days = 90; //total three month
    let total = 0;
    const findIdx = data.find((item) => item?.id === id);
    if (findIdx) {
      const calculate = findIdx.liter + findIdx.price * days;
      total = calculate;
      setTotalThreeMonth(total);
    }
  };

  const calculateOneMonth = (id: number | string) => {
    const days = 30;
    let total = 0;
    const findIndex = data.find((item) => item?.id === id);
    if (findIndex) {
      const calc = findIndex.liter + findIndex.price * days;
      total = calc;
      setTotalOneMonth(total);
    }
  };

  const calculateOneMonthFourMonth = (id: number | string) => {
    
    const days = 31;
    let total = 0;
    const findIdx = data.find((i) => i.id === id);
    if (findIdx) {
      const res = findIdx.liter + findIdx.price * days;
      total = res;
      setTotalOneLiter(res);
    }
  };

  const calculateWeeksCarOne = (id: number | string) => {
    
     const res = data.find((item) => item.id === id);
     if(res) {
        const d = new Date().getDay();
        const calcWeeks = res.liter * res.price + d;
        setTotalWeeksOneCar(calcWeeks)
     }
        if(res?.id === 1) {
            setTotalFourCarMonth(0);
        }
        if(res?.id === 4) {
            const calculateCarFourCost = res.liter + res.price * 30;
            setTotalFourCarMonth(calculateCarFourCost)
        }
  };

  const calculateConstMinimal=(id: number|string)=>{
    const month = 31;
    var  total = 0;
    const calcMinimalConst = data.find((j) => j.id === id);
    if(calcMinimalConst) {
         const calculateConstMinimal  =
         calcMinimalConst?.liter * calcMinimalConst.price + month;
         total = calculateConstMinimal;
           setTotalMinimal(total);
    }
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
                calculateForThreeMonth={calculateEvryCarForThreeMonth}
                calculateOneMonth={calculateOneMonth}
                calculateOneMonthFourMonth={calculateOneMonthFourMonth}
                calculateWeeksCarOne={calculateWeeksCarOne}
                calculateConstMinimal={calculateConstMinimal}
              />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
      {sidebar && (
        <Sidebar
          totalThreeMonth={totalThreeMonth}
          totalOneMonth={totalOneMonth}
          totalOneLiter={totalOneLiter}
          totalWeeksOneCar={totalWeeksOneCar}
          totalFourCarMonth={totalFourCarMonth}
          totalMinimal={totalMinimal}
        />
      )}
    </>
  );
};

export default Home;
