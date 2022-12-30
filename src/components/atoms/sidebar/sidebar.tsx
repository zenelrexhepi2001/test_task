import React from "react";
import { styled } from "@mui/system";

const SidebarWrapper = styled("aside")({
  background: "#ddd",
  width: 350,
  height: "100vh",
  position: "fixed",
  top: 0,
  right: 0,
});

const SidebarWrapperBody = styled("div")({
  padding: "1rem",
});

export const SidebarItem = styled("div")({});

interface Props {
  totalThreeMonth: number;
  totalOneMonth: number;
  totalOneLiter: number;
  totalWeeksOneCar: number;
  totalFourCarMonth: number;
  totalMinimal: number;
}

const Sidebar = ({ totalThreeMonth, totalOneMonth, totalOneLiter,totalWeeksOneCar,totalFourCarMonth,totalMinimal }: Props) => {
  return (
    <SidebarWrapper>
      <SidebarWrapperBody>
        <SidebarItem>
          <h3> How much € does each car spend for 3 months?</h3>
          <h3>{totalThreeMonth}€ </h3>
          <hr />
        </SidebarItem>
        <SidebarItem>
          <h3>
            If Car1 and Car2 work for 1 month and Car3 and Car4 work for 1.5
            <br />
            months how much € do they spend in total?
          </h3>
          <h3>{totalOneMonth}€</h3>
          <hr />
        </SidebarItem>
        <SidebarItem>
          <h3>
            What is the average cost for one liter for car 1 & 4 if they work 1
            month?
          </h3>
          <h3>{totalOneLiter}€</h3>
          <hr />
        </SidebarItem>
        <SidebarItem>
          <h3>
            How much more weeks can Car1 drive within the same budget as Car4
            spends for 1 month?
          </h3>
          <h3>{totalWeeksOneCar}Weeks</h3>
          <h3><mark>{totalFourCarMonth}</mark>€</h3>
        </SidebarItem>
        <hr/>
        <SidebarItem>
            <h3>What is the minimum monthly cost we
need for two cars to be operational?</h3>
         <h3>{totalMinimal}</h3>
        </SidebarItem>
      </SidebarWrapperBody>
    </SidebarWrapper>
  );
};

export default Sidebar;
