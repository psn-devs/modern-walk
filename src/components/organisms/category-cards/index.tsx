import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { primaryGreen, primaryRed, primaryWhite } from "../../../styles/colors";
import { Typography } from "../../atoms/Typography";
import { Card } from "../../molecules";
import { breakpoints } from "../../../styles/breakpoints";

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 30px;

  div:nth-child(1),
  div:nth-child(2) {
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }

  @media ${breakpoints.viewport_s} {
    flex-direction: column;
  }
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
        <Typography variant="h1" color={primaryWhite}>Men's Clothing</Typography>
      </Card>
      <Card
        backgroundColor={primaryRed}
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"200px"}
        onClick={() => navigate("/womens-clothing")}
      >
        <Typography variant="h1" color={primaryWhite}>Women's Clothing</Typography>
      </Card>
    </CategoryWrapper>
  );
};
