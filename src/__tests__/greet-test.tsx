import { render, screen } from "@testing-library/react"
import Greet from "../components/greet/greet";


describe('Greet', () => {
    test('renders correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText("Hello");
        expect(textElement).toBeInTheDocument();
    })
})

describe('Nested', () => {
    test('renders with a name', () => {
        render(<Greet name='Mark' />);
        const textElement = screen.getByText("Hello Mark");
        expect(textElement).toBeInTheDocument();
    })
})

