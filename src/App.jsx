import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CommunityPage from './pages/CommunityPage';
import Learn from './pages/Learn'
import Events from './pages/Events'



const App = () => {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/events' element={<Events />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
