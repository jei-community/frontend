import { Navigate, Route, Routes } from 'react-router';

import { PATH } from '@/constants/path';

import App from '@/App';
import AlbumEditor from '@/pages/AlbumEditor';
import AlbumList from '@/pages/AlbumList';
import AlbumPage from '@/pages/AlbumsRouter';
import DailyCheck from '@/pages/DailyCheck';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';
import PostEditor from '@/pages/PostEditor';
import PostList from '@/pages/PostList';
import PostPage from '@/pages/PostRouter';
import PrivateRouter from '@/pages/PrivateRouter';
import ProjectEditor from '@/pages/ProjectEditor';
import ProjectItem from '@/pages/ProjectItem';
import ProjectItemRouter from '@/pages/ProjectItem/ProjectItemRouter';
import ProjectList from '@/pages/ProjectList';
import ProjectListRouter from '@/pages/ProjectList/router';
import ProjectRouter from '@/pages/ProjectRouter';
import SignIn from '@/pages/SignIn';
import Swagger from '@/pages/Swagger';

export default function Router() {
  return (
    <Routes>
      <Route path={PATH.SIGN_IN} element={<SignIn />} />
      <Route path={PATH.SWAGGER} element={<Swagger />} />
      <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      <Route path={PATH.PRIVATE_ROUTER} element={<PrivateRouter />}>
        <Route path={PATH.APP} element={<App />}>
          <Route path={PATH.MAIN} element={<Main />} />
          <Route path={PATH.DAILY_CHECK} element={<DailyCheck />} />

          {/* Project 페이지 */}
          <Route path={PATH.PROJECT.INDEX} element={<ProjectRouter />}>
            <Route index element={<Navigate to={PATH.PROJECT.ABSOLUTE.LIST.INDEX} replace />} />
            <Route path={PATH.PROJECT.RELATIVE.LIST.INDEX} element={<ProjectListRouter />}>
              <Route path='' element={<ProjectList />} />
              <Route path={PATH.PROJECT.RELATIVE.LIST.ITEM.INDEX} element={<ProjectItemRouter />}>
                <Route path='' element={<ProjectItem />} />
                <Route path={PATH.PROJECT.RELATIVE.LIST.ITEM.EDITOR} element={<ProjectEditor />} />
              </Route>
            </Route>
            <Route path={PATH.PROJECT.RELATIVE.CREATE} element={<ProjectEditor />} />
          </Route>

          <Route path={PATH.POSTS.INDEX} element={<PostPage />}>
            {/* `/posts`를 `/posts/list`로 리다이렉트 */}
            <Route index element={<Navigate to={`${PATH.POSTS.INDEX}/${PATH.POSTS.LIST}`} replace />} />
            <Route path={PATH.POSTS.LIST} element={<PostList />} />
            <Route path={PATH.POSTS.EDITOR} element={<PostEditor />} />
            {/* 기타 모든 경로를 `/posts/list`로 리다이렉트 */}
            <Route path='*' element={<Navigate to={`${PATH.POSTS.INDEX}/${PATH.POSTS.LIST}`} replace />} />
          </Route>

          <Route path={PATH.ALBUMS.INDEX} element={<AlbumPage />}>
            {/* `/albums`를 `/albums/list`로 리다이렉트 */}
            <Route index element={<Navigate to={`${PATH.ALBUMS.INDEX}/${PATH.ALBUMS.LIST}`} replace />} />
            <Route path={PATH.ALBUMS.LIST} element={<AlbumList />} />
            <Route path={PATH.ALBUMS.EDITOR} element={<AlbumEditor />} />
            {/* 기타 모든 경로를 `/albums/list`로 리다이렉트 */}
            <Route path='*' element={<Navigate to={`${PATH.ALBUMS.INDEX}/${PATH.ALBUMS.LIST}`} replace />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
