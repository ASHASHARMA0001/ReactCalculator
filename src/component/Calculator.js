import React, { useState } from 'react';
import { Button, Container, Current, Previous, Screen } from '../styles/Main';






const Calculator = () => {
    const[currentValue, setCurrentValue] = useState('');
    const[previous,setPrevious] = useState('')
    const [operation , setOperation] = useState('')


    const handlebtn = (el) => {
        const value = el.target.getAttribute('data')
        if(value ==='.' && currentValue.includes('.')) return
        setCurrentValue(currentValue+value);
        console.log("btn is clicked");

    };
    const handleDeleteBtn = ()=>{
        setCurrentValue(String(currentValue).slice(0,-1))
    };
    const handleAllClear =()=>{
        setCurrentValue('');
        setOperation('');
        setPrevious(' ')
    };
    const handleOperationBtn =(ele)=>{
        if(currentValue ==='') return
        if(previous !== ''){
            let value = compute()
            setPrevious(value)
        }else{
            setPrevious(currentValue)
        }
        setCurrentValue('')
     setOperation(ele.target.getAttribute('data'))
    }
    const handleEquals = () => {
        let value = compute()
        if(value === undefined || value == null)return
        setCurrentValue(value);
        setOperation('')
        setPrevious('')
    }

    const compute = () => {
        let result;
        let previousNumber = parseFloat(previous)
        let currentNumber = parseFloat (currentValue)
        if(isNaN(previousNumber)|| isNaN(currentNumber))return
        switch(operation){
        case '+' :
         result = previousNumber + currentNumber
         break;  
         case '-' :
         result = previousNumber - currentNumber
        break;  
        case '*' :
        result = previousNumber * currentNumber
        break;
        case '%' :
        result = previousNumber / currentNumber * previousNumber
         break; 
        case '÷' :
         result = previousNumber / currentNumber
          break; 
         default:return;


    }
    return result;

    }
    

    return(
        <>
        <Container>
            <Screen>
            <Previous>{previous}  {operation}</Previous>
            <Current>{currentValue}</Current>

            </Screen>
            <Button onClick={handleAllClear}>AC</Button>
            <Button data={'+'} onClick={handleOperationBtn}>+</Button>
            <Button data={'%'} onClick={handleOperationBtn} operation>%</Button>
            <Button data={'÷' } onClick={handleOperationBtn}operation>÷ </Button>
            <Button  data={7}onClick={handlebtn}>7</Button>
            <Button  data={8}onClick={handlebtn}>8</Button>
            <Button  data={9}onClick={handlebtn}>9</Button>
            <Button data={'*'} onClick={handleOperationBtn} operation>*</Button>
            <Button  data={4}onClick={handlebtn}>4</Button>
            <Button  data={5}onClick={handlebtn}>5</Button>
            <Button  data={6}onClick={handlebtn}>6</Button>
            <Button data={'+'} onClick={handleOperationBtn}operation>+</Button>
            <Button  data={1}onClick={handlebtn}>1</Button>
            <Button  data={2}onClick={handlebtn}>2</Button>
            <Button  data={3}onClick={handlebtn}>3</Button>
            <Button data={'-'} onClick={handleOperationBtn} operation>-</Button>
            <Button  data={0} onClick={handlebtn} zero>0</Button> 
            <Button data={'.'} onClick={handlebtn}>.</Button>
            <Button onClick={handleDeleteBtn}>⌫</Button>
            <Button equals onClick={handleEquals}>=</Button>
    

        </Container>
           

        </>
   
    )
}

export default Calculator

