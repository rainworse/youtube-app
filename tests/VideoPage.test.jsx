import { fireEvent, render, waitFor } from '@testing-library/react';
import { expect, vi } from 'vitest';
import VideoPage from '../src/frontend/pages/VideoPage';
import UserContext from '../src/frontend/UserContext';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

vi.mock('../src/backend/APIFetcher');
vi.mock('../src/backend/LocalStorageDB');

describe('VideoPage', () => {
  it('renders video page', async () => {
    const videoPage = render(
      <UserContext.Provider value={{ currentUser: 'user' }}>
        <MemoryRouter>
          <VideoPage />
        </MemoryRouter>
      </UserContext.Provider>
    );

    await waitFor(() => videoPage.getByText('test video1'));
    await waitFor(() => videoPage.getByText('john pork'));
    await waitFor(() => videoPage.getByText('local man'));

    expect(videoPage.container).toMatchSnapshot();
  });

  // it('add comment to video page', async () => {
  //   // const user = userEvent.setup()

  //   const videoPage = render(
  //     <UserContext.Provider value={{ currentUser: 'testUserComment' }}>
  //       <MemoryRouter>
  //         <VideoPage />
  //       </MemoryRouter>
  //     </UserContext.Provider>
  //   );

  //   await waitFor(() => videoPage.getByText('test video1'));
  //   await waitFor(() => videoPage.getByText('john pork'));
  //   await waitFor(() => videoPage.getByText('local man'));

  //   const commentField = videoPage.getByPlaceholderText('Add a comment...');
  //   const postButton = videoPage.getByText('Post');

  //   fireEvent.change(commentField, {
  //     target: { value: 'a newly posted comment' },
  //   });
  //   fireEvent.click(postButton);

  //   // await user.type(commentField, 'a newly posted comment');
  //   // await user.click(postButton);

  //   await waitFor(() => videoPage.getByText('a newly posted comment'));
  //   expect(videoPage.container).toMatchSnapshot();
  // });
});
