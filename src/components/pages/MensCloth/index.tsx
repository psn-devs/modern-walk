import styled from "styled-components";
import { Typography } from "../../atoms/Typography";
import { SaleCards } from "../../organisms/sale-cards";
import { useGetMensProductsQuery } from "../../../services/clothesAPI";
import { ErrorMsg, Spinner } from "../../molecules";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
`;

export const MensCloth = () => {
  const { isLoading, isError, data } = useGetMensProductsQuery();

  return (
    <Container>
      <Typography variant="h3">Men's Clothing</Typography>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorMsg />
      ) : (
        <SaleCards items={data} />
      )}
    </Container>
  );
};
