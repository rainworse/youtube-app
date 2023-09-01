import { describe, expect, it } from 'vitest';
import UserContext from '../src/frontend/UserContext';
import { MemoryRouter } from 'react-router-dom';
import SearchPage from '../src/frontend/pages/SearchPage';
import { render, waitFor } from '@testing-library/react';

vi.mock('../src/backend/APIFetcher');

describe('SearchPage', () => {
  it('renders search page', async () => {
    const searchPage = render(
      <UserContext.Provider value={{ currentUser: 'user' }}>
        <MemoryRouter>
          <SearchPage />
        </MemoryRouter>
      </UserContext.Provider>
    );

    await waitFor(() => searchPage.getByText('test video4'));
    expect(searchPage.container).toMatchSnapshot();
  });
});
