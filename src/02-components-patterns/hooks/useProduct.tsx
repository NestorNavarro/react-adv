import { useState, useEffect } from 'react';
import { onChangeArgs, Product } from '../interfaces/Products.interfaces';

interface useProductProps {
	value ?: number,
	product : Product;
	onChange ?: (args : onChangeArgs) => void;
}

const useProduct = ({ onChange, product, value = 0 } : useProductProps) => {

    const [count, setCount] = useState<number>(value);

    const increaseByOne = ( val : number ) => () =>{ 
		const currentCount = Math.max(count + val, 0);
		setCount(currentCount);
		(onChange) && onChange({ product, count : currentCount });
    };

	useEffect(() => {
	  setCount(value);
	}, [value]);
	
	return [ count, increaseByOne ] as const;
}

export default useProduct