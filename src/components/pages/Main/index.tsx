import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../molecules/header";

const Container = styled.div`
  width: 100%;
`;

export const Main = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
