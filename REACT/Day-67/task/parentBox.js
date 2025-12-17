import b1 from './leftBox.js';
import b2 from './RightBox.js';
const container = React.createElement(
    "div", 
    { className: "boxParent" }, // Optional class for styling
    b1, 
    b2 // Pass b1 and b2 as consecutive arguments
);
export default container