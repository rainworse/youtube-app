import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import UserContext from '../src/frontend/UserContext';
import LoginPage from '../src/frontend/pages/LoginPage';

describe('LoginPage', () => {
  it('renders the login page', () => {
    const loginPage = render(
      <UserContext.Provider value={{ currentUser: 'user' }}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </UserContext.Provider>
    );
    expect(loginPage.container).toMatchSnapshot();
  });
});
