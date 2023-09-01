import { render, waitFor } from '@testing-library/react';
import { expect, vi } from 'vitest';
import ChannelPage from '../src/frontend/pages/ChannelPage';
import UserContext from '../src/frontend/UserContext';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../src/backend/APIFetcher');

describe('ChannelPage', () => {
  it('renders channel page', async () => {
    const channelPage = render(
      <MemoryRouter>
        <ChannelPage />
      </MemoryRouter>
    );

    await waitFor(() => channelPage.getByText('test channel'));
    await waitFor(() => channelPage.getByText('test video3'));

    expect(channelPage.container).toMatchSnapshot();
  });
});
