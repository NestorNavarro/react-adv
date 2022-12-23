import { useState, useEffect, useRef } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/Products.interfaces';

interface useProductProps {
	value ?: number;
	product : Product;
	onChange ?: (args : onChangeArgs) => void;
	initialValues ?: InitialValues;
}

const useProduct = ({ onChange, product, value = 0, initialValues } : useProductProps) => {

    const [count, setCount] = useState<number>( initialValues?.count ?? value);
	const isMounted = useRef<boolean>(false);

    const increaseBy = ( val : number ) => () =>{ 
		let newCount =  Math.max(count + val, 0);

		if (initialValues?.maxCount) {
			const maxCount = initialValues.maxCount;
			newCount = Math.min(newCount, maxCount);
		}

		setCount(newCount);
		
		(onChange) && onChange({ product, count : newCount });
    };

	const reset = () => {
		setCount(initialValues?.count ?? value)
	}

	useEffect(() => {
		if (!isMounted.current) {
			return;
		}
		setCount(value);
	}, [value]);

	useEffect(() => {
		isMounted.current = true;
	}, []);


	
	return {
		count, 
		maxCount : initialValues?.maxCount,
		isMaxCountReached : !!initialValues?.maxCount && initialValues.maxCount === count,
		
		reset,
		increaseBy,
	};
}

export default useProduct