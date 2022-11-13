import {render, screen} from '@testing-library/react';
import Counter from './counter';
import  user  from '@testing-library/user-event';
import { count } from 'console';


describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />);
        const countHeader = screen.getByRole("heading");
        expect(countHeader).toBeInTheDocument();

        const countButton = screen.getByRole("button", {
            name: "Increment",
        });
        expect(countButton).toBeInTheDocument();
    });

    test('renders count value', () => {
        render(<Counter />);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("0");
    });

    test('renders count 1 when clicked', async () => {
        render(<Counter />);
        user.setup();
        const countButton = screen.getByRole("button", {
            name: "Increment",
        })
        await user.click(countButton);
        
        const countHeading = screen.getByRole("heading");
        expect(countHeading).toHaveTextContent("1");
    })

    test('count 2', async () => {
        user.setup();
        render(<Counter />);

        const CountElement = screen.getByRole("button", {
            name: "Increment",
        })

        await user.dblClick(CountElement);
        
        const countHeading = screen.getByRole("heading")
        expect(countHeading).toHaveTextContent("2");
    })

    test('renders count of 10', async () => {
        user.setup();
        render(<Counter />)

        const amountInput = screen.getByRole('spinbutton')

        await user.type(amountInput, '10');
        expect(amountInput).toHaveValue(10)

        const setButton = screen.getByRole('button', {
            name: 'Set'
        });

        await user.click(setButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("10");
    })

    test('test focus', async () => {
        user.setup();
        render(<Counter />);

        const incrementElement = screen.getByRole("button", { name: 'Increment' });
        const setElement = screen.getByRole("button", { name: 'Set' });
        const amountElement = screen.getByRole('spinbutton');

        await user.tab();
        expect(incrementElement).toHaveFocus();

        await user.tab();
        expect(amountElement).toHaveFocus();

        await user.tab();
        expect(setElement).toHaveFocus();

      

    })


})