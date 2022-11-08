import { render, screen } from '../../test-utils';
import MuiMode from './mui-mode';

describe('Theme Provider', () => {
    test('renders correctly', () => {
        render(<MuiMode />);

        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent('dark mode');
    })
})