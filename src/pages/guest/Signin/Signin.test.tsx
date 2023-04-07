import { render } from '@testing-library/react';
import Signin from './Signin';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    // Agrega aquí cualquier otra propiedad o método que necesites simular
  }),
}));

describe('Signin', () => {
  test('Render Signin', () => {
    render(<Signin />);
  });
});
