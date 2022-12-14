import { render, screen } from "@testing-library/react"
import  Application  from "./application";

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);

        const headingElement = screen.getByRole("heading", {
            level: 1
        })
        expect(headingElement).toBeInTheDocument();

        const sectionElememt = screen.getByRole("heading", {
            level: 2
        })
        expect(sectionElememt).toBeInTheDocument();

        const imageElement = screen.getByAltText("hello work");
        expect(imageElement).toBeInTheDocument();

        const paragraphElement = screen.getByText("All fields are mandatory");
        expect(paragraphElement).toBeInTheDocument();

        const paragraphElement2 = screen.getByText(/mandatory/);
        expect(paragraphElement2).toBeInTheDocument();

        const paragraphElement3 = screen.getByText((content) => content.startsWith("All"));
        expect(paragraphElement3).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText("Name", {
            selector: "input"
        });
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText("Fullname");
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue("Mark");
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", {
            name: 'Bio'
        })
        expect(bioElement).toBeInTheDocument();
        
        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termElement = screen.getByRole("checkbox");
        expect(termElement).toBeInTheDocument();

        const termElement2 = screen.getByLabelText("I agree to the terms and conditions");
        expect(termElement2).toBeInTheDocument();

        const submitButtonElement =  screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    })
})