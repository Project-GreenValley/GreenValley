import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../src/app/components/Navbar';
//describe is one of the ways in jest to start a test

const resizeWindow = (x: number, y: number) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

describe('Navbar', () => {
  it('should render correctly', () => {
    render(<Navbar />); //ARRANGE (we have arranged our test)

    const text = screen.getByText('GreenValley'); //ACT (Take an action)

    expect(text).toBeInTheDocument(); //ASSERTION (check to see if everything is what we expected)
  });
  it('should not display GreenValley on smaller screens', () => {
    resizeWindow(500, 300);
    render(<Navbar />);
    //we're using query here because GreenValley will not be static
    const text = screen.queryByText('GreenValley')?.parentElement;
    expect(text).toHaveClass('hidden');
  });

  it('should contain a Login/Signup button', () => {
    render(<Navbar />);

    const button = screen.getByText('Login/Signup');

    expect(button).toBeInTheDocument();
  });

  it('should contain a Start a Campaign button', () => {
    render(<Navbar />);

    const button = screen.getByText('Start a Campaign');

    expect(button).toBeInTheDocument();
  });
});
