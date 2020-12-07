import React, {useEffect} from 'react';
import { StyledOption, StyledSelect } from './styles/selectStyle'

const Select = ({value, setter, setPayment, price}) => {
    const handleChange = (value) => {
        setter(value)
    }
    useEffect(() => {
        if(price > 0 && value !== null){
            setPayment( (price * value/100).toLocaleString() + '')
        } else {
            setPayment(null)
        }
    }, [price, value, setPayment]) 
    return (
        <StyledSelect value={value} onChange={handleChange}>
            <StyledOption value={10}>10%</StyledOption>
            <StyledOption value={15}>15%</StyledOption>
            <StyledOption value={20}>20%</StyledOption>
            <StyledOption value={25}>25%</StyledOption>
            <StyledOption value={30}>30%</StyledOption>
        </StyledSelect>
    );
};

export default Select;