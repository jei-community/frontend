import { Route, Routes } from 'react-router';

import { PATH } from '@/constants/path';

import App from '@/App';
import Articles from '@/pages/Articles';
import DailyCheck from '@/pages/DailyCheck';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';
import Project from '@/pages/Project';
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
        <Route path={PATH.GET_PROJECT_WITH_ID('/:projectId')} element={<Project />} />
      </Route>
      <Route path={PATH.SWAGGER} element={<Swagger />} />
      <Route path={PATH.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
