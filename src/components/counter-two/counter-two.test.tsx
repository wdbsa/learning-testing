import {screen, render} from '@testing-library/react';
import  CounterTwoProps from './counter-two';
import user from '@testing-library/user-event';

describe("Counter Two", () => {
    test('renders correctly', () => {
        render(<CounterTwoProps count={0} />);
        const textElement = screen.getByText("Counter Two");
        expect(textElement).toBeInTheDocument();
    })

    test('handlers are called', async () => {
        user.setup();
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()

        render(<CounterTwoProps count={0} handleDecrement={decrementHandler} handleIncrement={incrementHandler} />)

        const incrementButton = screen.getByRole('button', { name: "Increment" })
        const decrementButton = screen.getByRole('button', { name: "Decrement" })
        
        await user.click(incrementButton)
        await user.click(decrementButton)

        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    })
})