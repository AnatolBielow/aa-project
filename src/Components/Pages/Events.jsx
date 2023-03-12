import { Page } from './Page';
import image from '../Images/newspaper.jpg'

const title = "Wydarzenia Intergrupy AA"

        export const Events = ({events}) => {
            return <Page title={title} img={image} items={events} />;
          };
  