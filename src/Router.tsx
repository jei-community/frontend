import { Route, Routes } from 'react-router';

import App from '@/App';
import Main from '@/pages/Main';
import NotFound from '@/pages/NotFound';
import SignIn from '@/pages/SignIn';

export default function Router() {
  return (
    <Routes>
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/' element={<App />}>
        <Route path='/' element={<Main />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
