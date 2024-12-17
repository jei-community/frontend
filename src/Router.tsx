import { Route, Routes } from 'react-router';

import App from '@/App';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';
import Projects from '@/pages/Projects';
import SignIn from '@/pages/SignIn';

import Article from './pages/Article';
import Swagger from './pages/Swagger';

export default function Router() {
  return (
    <Routes>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/' element={<App />}>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/article' element={<Article />} />
      </Route>
      <Route path='/api' element={<Swagger />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
