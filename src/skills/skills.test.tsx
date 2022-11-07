import {render, screen} from '@testing-library/react'
import Skills from './skills' 

describe('SKills', () => {
    const skills =  ["HTML", "CSS", "JAVASCRIPT"]
    
    test('renders correctly', () => {
        render(<Skills skills={skills} />)
        const skillElement = screen.getByRole("list");
        expect(skillElement).toBeInTheDocument();
    })

    test('renders list item correctly', () => {
        render(<Skills skills={skills} />)
        const skillElement = screen.getAllByRole("listitem");
        expect(skillElement).toHaveLength(skills.length);
    })

    test('check button loggedin', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole("button", {
            name: "Login"
        })
        expect(loginButton).toBeInTheDocument();
    })

    test('check button start learning', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.queryByRole("button", {
            name: "Start learning"
        })
        expect(loginButton).not.toBeInTheDocument();
    })
})