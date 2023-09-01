import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from '../src/frontend/Header';
import UserContext from '../src/frontend/UserContext';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  it('renders header with null user', () => {
    const header = render(
      <UserContext.Provider value={{ currentUser: null }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </UserContext.Provider>
    );
    expect(header.container).toMatchSnapshot();
  });

  it('renders header with current user', () => {
    const header = render(
      <UserContext.Provider value={{ currentUser: 'user' }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </UserContext.Provider>
    );
    expect(header.container).toMatchSnapshot();
  });

  // it('Login button takes you to login page', async () => {
  //   const user = userEvent.setup();

  //   render(
  //     <UserContext.Provider value={{ currentUser: null }}>
  //       <MemoryRouter>
  //         <Header />
  //       </MemoryRouter>
  //     </UserContext.Provider>
  //   );

  //   const login = screen.getByText('Login');

  //   await user.click(login);

  //   expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
  // });
});
