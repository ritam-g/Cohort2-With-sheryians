import h1,{p} from './leftHadingTags.js';
const b1 = React.createElement(
  "div", // 1. Element Type
  { className: "box1" }, // 2. Props Object (where you put className)
  h1,p // 3. Children (content)
);
export default b1