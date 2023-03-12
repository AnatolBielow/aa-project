import { Card } from '../Card';
import { CardItem, CardList } from "./CardSection.styled";
import { NavLink } from "react-router-dom";
import { cards } from '../../Helpers';

export const CardSection = () => {
  return (
    <section>
      <CardList>
        {cards.map((card) => (
          <CardItem key={card.id}>
            <NavLink to={card.id} >
              <Card item={card} />
            </NavLink>
          </CardItem>
        ))}
      </CardList>
    </section>
  );
};
