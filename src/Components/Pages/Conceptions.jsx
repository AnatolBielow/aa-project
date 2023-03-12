import { Page } from './Page';
import image from '../Images/conceptions.jpg'
import { conceptions } from '../../Helpers';

const title = "12 Koncepcji AA"

        export const Conceptions = () => {
            return <Page title={title} img={image} items={conceptions} />;
          };
  