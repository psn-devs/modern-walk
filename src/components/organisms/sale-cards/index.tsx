import styled from "styled-components";
import {
  primaryBlue,
  primaryGreen,
  primaryRed,
  primaryWhite,
} from "../../../styles/colors";
import { Card } from "../../molecules";
import { Typography } from "../../atoms/Typography";
import { breakpoints } from "../../../styles/breakpoints";

interface Item {
  id: string;
  image: string;
  price: string;
  description: string;
  title: string;
  category: string;
}

interface IProps {
  items: Item[] | unknown;
}

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

const DescriptionWrapper = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;
  max-width: 200px;
  min-height: 140px;
  max-height: 140px;
  width: calc(100% - 32px);
  gap: 12px;
  border-radius: 16px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : primaryWhite};

  @media ${breakpoints.viewport_s} {
    max-width: calc(100% - 32px);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  max-width: calc(100% - 24px);
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 150px;
    height: 125px;
  }
`;

export const SaleCards = ({ items }: IProps) => {
  return (
    <ItemsWrapper>
      {items && Array.isArray(items) && items.length > 0 ? (
        items.map((value: Item, index: number) => (
          <Card
            backgroundColor={primaryWhite}
            gap={20}
            alignItems="center"
            justifyContent="space-between"
            key={index}
          >
            <TitleWrapper>
              <Typography variant="h3">
                {value.title && value.title.length > 20
                  ? `${value.title.substring(0, 20)}...`
                  : value.title}
              </Typography>
            </TitleWrapper>

            <ImageWrapper>
              <img src={value.image} alt="shirt" />
            </ImageWrapper>

            <DescriptionWrapper
              backgroundColor={
                value.category === "men's clothing" ? primaryGreen : primaryRed
              }
            >
              <Typography variant="h3" color={primaryBlue}>
                Rs {value.price}
              </Typography>
              <Typography variant="h4">
                {value.description && value.description.length > 100
                  ? `${value.description.substring(0, 100)}...`
                  : value.description}
              </Typography>
            </DescriptionWrapper>
          </Card>
        ))
      ) : (
        <Typography variant="h4" color={primaryBlue}>
          No data to display
        </Typography>
      )}
    </ItemsWrapper>
  );
};
