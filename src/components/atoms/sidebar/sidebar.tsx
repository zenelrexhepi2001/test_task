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
    padding: '1rem'
});

export const SidebarItem = styled("div")({});

interface Props {
    totalThreeMonth: number;
    totalOneMonth: number;
}

const Sidebar = ({totalThreeMonth,totalOneMonth}:Props) => {
  return (
    <SidebarWrapper>
      <SidebarWrapperBody>
        <SidebarItem>
          <h3> How much € does each car spend for 3 months?</h3>
          <h3>{totalThreeMonth}€ </h3>
          <hr/>
        </SidebarItem>
        <SidebarItem>
            <h3>If Car1 and Car2 work for 1 month and Car3 and Car4 work for 1.5<br/>
                months how much € do they spend in total?</h3>
                <h3>{totalOneMonth}€</h3>
                <br/>
        </SidebarItem>
      </SidebarWrapperBody>
    </SidebarWrapper>
  );
};

export default Sidebar;
