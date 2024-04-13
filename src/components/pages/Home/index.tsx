import styled from "styled-components";
import { Typography } from "../../atoms/Typography";
import { SaleCards, CategoryCards } from "../../organisms";
import {
  useGetMensProductsQuery,
  useGetWomensProductsQuery,
} from "../../../services/clothesAPI";
import { Spinner, ErrorMsg } from "../../molecules";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
`;

export const Home = () => {
  const {
    isLoading: menIsLoading,
    isError: menIsError,
    data: menData,
  } = useGetMensProductsQuery();
  const { isLoading, isError, data } = useGetWomensProductsQuery();

  console.log(isLoading, isError, data);
  console.log(menIsLoading, menIsError, menData);

  return (
    <Container>
      <Typography variant="h3">Flash Sale</Typography>
      {isLoading || menIsLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorMsg />
      ) : (
        <SaleCards
          items={
            Array.isArray(data) && Array.isArray(menData)
              ? [...data, ...menData]
              : []
          }
        />
      )}
      <Typography variant="h3">Categories</Typography>
      <CategoryCards />
    </Container>
  );
};
