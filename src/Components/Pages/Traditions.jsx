import { Page } from './Page';
import image from '../Images/tradition.jpg'
import { traditions } from '../../Helpers';

const title = "12 Tradycji AA"

        export const Traditions = () => {
            return <Page title={title} img={image} items={traditions} />;
          };
  