import styled from "styled-components";
import { Typography } from "../../atoms/Typography";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-dirction: row;
  align-items: center;
  padding: 20px;
  justify-content: center;
  border-bottom: 4px solid rgba(217, 217, 217, 1);
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.25);
`;

export const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <Container>
      <Typography variant="h2" onClick={handleClick}>
        Modern Walk
      </Typography>
    </Container>
  );
};
