import { useState } from 'react';

const useProduct = () => {

    const [count, setCount] = useState(0);

    const increaseByOne = ( val : number ) => () => setCount( prev => Math.max(prev + val, 0) );

  return [ count, increaseByOne ] as const;
}

export default useProduct