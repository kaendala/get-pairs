import { render, screen, act,fireEvent} from '@testing-library/react';
import App from './App';

it('Test Case 1', async() => {
    render(<App />);
    await act(async () => {
        const inputList =screen.getByTestId("inputList");
        const inputSum =screen.getByTestId("inputSum");
         fireEvent.change(inputList, {
                target: { value: "1,9,5,0,20,-4,12,16,7" }
        })
        fireEvent.change(inputSum, {
                target: { value: "12" }
        })
        screen.getByTestId("button").click()
    })
    expect(screen.getByText("0,12")).toBeInTheDocument();
    expect(screen.getByText("-4,16")).toBeInTheDocument();
     expect(screen.getByText("5,7")).toBeInTheDocument();
  });

  it('Test Case 2', async() => {
    render(<App />);
    await act(async () => {
        const inputList =screen.getByTestId("inputList");
        const inputSum =screen.getByTestId("inputSum");
         fireEvent.change(inputList, {
                target: { value: "1,2,3,4,5,6,7" }
        })
        fireEvent.change(inputSum, {
                target: { value: "10" }
        })
        screen.getByTestId("button").click()
    })
    expect(screen.getByText("3,7")).toBeInTheDocument();
    expect(screen.getByText("4,6")).toBeInTheDocument();
  });

  it('Test Case 3', async() => {
    render(<App />);
    await act(async () => {
        const inputList =screen.getByTestId("inputList");
        const inputSum =screen.getByTestId("inputSum");
         fireEvent.change(inputList, {
                target: { value: "-1,-2,-3,-4,-5,-6,-7" }
        })
        fireEvent.change(inputSum, {
                target: { value: "-10" }
        })
        screen.getByTestId("button").click()
    })
    expect(screen.getByText("-3,-7")).toBeInTheDocument();
    expect(screen.getByText("-4,-6")).toBeInTheDocument();
  });