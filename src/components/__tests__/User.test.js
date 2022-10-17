import {render, screen, cleanup} from '@testing-library/react'
import User from '../User/User.jsx'

test('first-test', () => {
    render(<User/>);
    const userElement = screen.getByTestId('user-1');
    // expect(userElement).toBeInTheDocument();
    
})