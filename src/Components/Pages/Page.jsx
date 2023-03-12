import { BackButton } from "../BackButton";
import {
  ContentWrapper,
  PageTitle,
  SectionStyled,
  SecondTitle,
  List,
} from "./Page.styled";

export const Page = ({ title, items, img }) => {
  return (
    <SectionStyled img={img}>
      <PageTitle>{title}</PageTitle>
      <ContentWrapper>
        <List>
          {items.map((item, index) => (
            <li key={index}>
              <SecondTitle>{item.title}</SecondTitle>
              <p>{item.item}</p>
            </li>
          ))}
        </List>
        <BackButton/>
      </ContentWrapper>
    </SectionStyled>
  );
};
