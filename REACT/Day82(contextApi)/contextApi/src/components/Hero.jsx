import {useContext} from 'react'
import { userContext } from '../Context/CreateContext';

function Hero() {
    const data = useContext(userContext);
    console.log("hero");
    
  return (
    <div>
      {data}
    </div>
  )
}

export default Hero
