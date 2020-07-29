import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
//import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <NavWrapper>
        <Navbar />
        {props.children}
      </NavWrapper>
      {/* <Footer /> */}
    </>
  );
}
export default Layout;

const NavWrapper = styled.div`
  min-height: vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
