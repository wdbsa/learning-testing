import {screen, render } from '@testing-library/react';
import Users from './users';
import { server } from '../../mocks/server'
import { rest } from 'msw';

describe('Users', () => {
    test("renders correctly", () => {
        render(<Users />)
        const textElement = screen.getByText("Users");
        expect(textElement).toBeInTheDocument();
    })

    test('renders a list of users', async () => {
        render(<Users />);
        const userList = await screen.findAllByRole('listitem');
        expect(userList).toHaveLength(1);
    })

    test('renders error', async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )
        render(<Users />)
        const error = await screen.findByText('Error fetching Users');
        expect(error).toBeInTheDocument();

    })
})