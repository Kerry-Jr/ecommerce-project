import React from 'react';

// import './custom-button.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer  {...props}>{children}</CustomButtonContainer>
);


export default CustomButton;


// const CustomButton = ({ children, isGoogleSignIn, inverted,  ...otherProps }) => (
//     <button className={`${inverted ? 'inverted': ''} custom-button`} { ...otherProps }>
//         { children }
//     </button>
// );


