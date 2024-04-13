import styled from "styled-components";
import LoadingImg from "../../../assets/loader.webp";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
`;

export const Spinner = () => {
  return (
    <Container>
      <img src={LoadingImg} width={75} alt="loading" />
    </Container>
  );
};
