import { createPortal } from 'react-dom'
import './wave.scss'

const backgroundRoot = document.querySelector('#background-root');
export const Wave = () => {
    return createPortal(
        <div className="wave-wrapper custom-wave">
        <div className="wave wave-one"></div>
        <div className="wave wave-two"></div>
        <div className="wave wave-three"></div>
      </div>, 
      backgroundRoot
    )
}