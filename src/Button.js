import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './style.css'


library.add(fas)

const Button = ({ icon, onClick }) => {
  return (
    <div className={icon} >
        <FontAwesomeIcon icon={icon} onClick={onClick} />
    </div>
  );
};
export default Button;