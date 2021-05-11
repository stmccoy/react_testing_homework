import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })

  it('should be able to add 1 and 4 together', () =>{
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('add');
    const buttonEqual = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonEqual);
    expect(runningTotal).toHaveTextContent('5');
    
  });

  it('should be able to subtract 4 from 7', () =>{
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const buttonSubtract = container.getByTestId('subtract');
    const buttonEqual = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEqual);
    expect(runningTotal).toHaveTextContent('3');
    
  });

  it('should be able to multiply 3 by 5', () =>{
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('multiply');
    const buttonEqual = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEqual);
    expect(runningTotal).toHaveTextContent('15');
    
  });

  it('should be able to divide 21 by 7', () =>{
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('divide');
    const buttonEqual = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEqual);
    expect(runningTotal).toHaveTextContent('3');
    
  });

  it('should be able to concatenate multiple number button clicks', () =>{
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal).toHaveTextContent('217');
    
  });

  it('should be able to chain multiple operations together', () =>{
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('divide');
    const buttonMultiply = container.getByTestId('multiply');
    const buttonSubtract = container.getByTestId('subtract');
    const buttonAdd = container.getByTestId('add');
    const buttonEqual = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(buttonDivide);
    fireEvent.click(button1);
    fireEvent.click(buttonEqual);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button2);
    fireEvent.click(buttonEqual);
    fireEvent.click(buttonAdd);
    fireEvent.click(button7);
    fireEvent.click(buttonEqual);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button1);
    fireEvent.click(buttonEqual);
    expect(runningTotal).toHaveTextContent('10');
    
  });

  it('should be able to clear the running total without affecting the calculation', () =>{
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('divide');
    const buttonMultiply = container.getByTestId('multiply');
    const buttonSubtract = container.getByTestId('subtract');
    const buttonAdd = container.getByTestId('add');
    const buttonEqual = container.getByTestId('equals');
    const buttonClear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button7);
    fireEvent.click(buttonEqual);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button7);
    fireEvent.click(buttonClear);
    fireEvent.click(button1);
    fireEvent.click(buttonEqual);
    expect(runningTotal).toHaveTextContent('8');
    
  });
})

