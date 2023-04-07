import { render } from '@testing-library/react';
import Signin from '../src/pages/guest/Signin/Signin';

describe('Signin', () => {
  it('Render Signin', () => {
    render(<Signin />);
  });
});
