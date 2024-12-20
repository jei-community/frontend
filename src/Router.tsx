import { Navigate, Route, Routes } from 'react-router';

import { PATH } from '@/constants/path';

import App from '@/App';
import Articles from '@/pages/Articles';
import DailyCheck from '@/pages/DailyCheck';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';
import PostPage from '@/pages/Post';
import PostEditor from '@/pages/Post/components/Editor';
import PostList from '@/pages/Post/components/List';
import Project from '@/pages/Project';
import ProjectEditor from '@/pages/ProjectEditor';
import Projects from '@/pages/Projects';
import SignIn from '@/pages/SignIn';
import Swagger from '@/pages/Swagger';

export default function Router() {
  return (
    <Routes>
      <Route path={PATH.SIGN_IN} element={<SignIn />} />
      <Route path={PATH.APP} element={<App />}>
        <Route path={PATH.MAIN} element={<Main />} />
        <Route path={PATH.DAILY_CHECK} element={<DailyCheck />} />
        <Route path={PATH.ARTICLES} element={<Articles />} />
        <Route path={PATH.PROJECTS} element={<Projects />} />
        <Route path={PATH.PROJECT_EDITOR} element={<ProjectEditor />} />
        <Route path={PATH.GET_PROJECT_WITH_ID('/:projectId')} element={<Project />} />
        <Route path={PATH.POST.INDEX} element={<PostPage />}>
          {/* `/posts`를 `/posts/list`로 리다이렉트 */}
          <Route index element={<Navigate to={`${PATH.POST.INDEX}/${PATH.POST.LIST}`} replace />} />
          <Route path={PATH.POST.INDEX} element={<PostList />} />
          <Route path={PATH.POST.EDITOR} element={<PostEditor />} />
          {/* 기타 모든 경로를 `/posts/list`로 리다이렉트 */}
          <Route path='*' element={<Navigate to={`${PATH.POST.INDEX}/${PATH.POST.LIST}`} replace />} />
        </Route>
      </Route>
      <Route path={PATH.SWAGGER} element={<Swagger />} />
      <Route path={PATH.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
