import styled from "styled-components";
import { primaryGreen, primaryRed } from "../../../styles/colors";
import { Typography } from "../../atoms/Typography";
import { Card } from "../../molecules";
import { useNavigate } from "react-router-dom";

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
`;

export const CategoryCards = () => {
  const navigate = useNavigate();
  return (
    <CategoryWrapper>
      <Card
        backgroundColor={primaryGreen}
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"200px"}
        onClick={() => navigate("/mens-clothing")}
      >
        <Typography variant="h1">Men's Clothing</Typography>
      </Card>
      <Card
        backgroundColor={primaryRed}
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"200px"}
        onClick={() => navigate("/womens-clothing")}
      >
        <Typography variant="h1">Women's Clothing</Typography>
      </Card>
    </CategoryWrapper>
  );
};
