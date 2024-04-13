import styled from "styled-components";
import { Typography } from "../../atoms/Typography";
import { Card } from "../../molecules";
import { primaryGreen, primaryRed } from "../../../styles/colors";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 12px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Home = () => {
  return (
    <Container>
      <Typography variant="h4">Flash Sale</Typography>

      <ItemsWrapper>
        <Card backgroundColor={primaryRed}>
          <Typography variant="h2">Mens cloth</Typography>
        </Card>
        <Card backgroundColor={primaryRed}>
          <Typography variant="h2">Mens cloth</Typography>
        </Card>
      </ItemsWrapper>

      <Typography variant="h4">Categories</Typography>

      <CategoryWrapper>
        <Card backgroundColor={primaryGreen}>
          <Typography variant="h1">Men's Clothing</Typography>
        </Card>
        <Card backgroundColor={primaryRed}>
          <Typography variant="h1">Women's Clothing</Typography>
        </Card>
      </CategoryWrapper>
    </Container>
  );
};
