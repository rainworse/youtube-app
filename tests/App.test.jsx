import { render, waitFor } from '@testing-library/react';
import { expect, vi } from 'vitest';
import App from '../src/App';

vi.mock('../src/backend/APIFetcher');

describe('App', () => {
  it('renders header and home page with two videos', async () => {
    const app = render(<App />);
    await waitFor(() => app.getByText('test video1'));
    expect(app.container).toMatchSnapshot();
  });
});
