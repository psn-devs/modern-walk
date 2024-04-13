import styled from "styled-components";
import { Typography } from "../../atoms/Typography";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMsg = () => {
  return (
    <Container>
      <Typography variant="h4" color="red">
        Oops, failed loading resources!
      </Typography>
    </Container>
  );
};
