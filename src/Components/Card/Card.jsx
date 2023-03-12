import {
  CardContainer,
  Content,
  HeaderWrapper,
  IconContainer,
  Title,
} from "./Card.styled";

export const Card = ({ item }) => {
  return (
    <CardContainer>
      <HeaderWrapper>
        <IconContainer>{item.icon}</IconContainer>
        <Title>{item.title}</Title>
      </HeaderWrapper>
      <Content>{item.prev}</Content>
    </CardContainer>
  );
};
