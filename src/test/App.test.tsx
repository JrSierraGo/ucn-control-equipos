import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders button prestamo', () => {
  render(<App />);
  const buttonElment = screen.getByText("Registrar");
  expect(buttonElment).toBeInTheDocument();
});
