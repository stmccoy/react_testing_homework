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
})

