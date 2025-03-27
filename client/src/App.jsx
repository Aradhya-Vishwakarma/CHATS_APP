import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Group = lazy(() => import('./pages/Group'));
const Chat = lazy(() => import('./pages/Chat'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Reintroduce the user variable
let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProtectRoute user={user} />}>
          <Route path='/' element={<Home />} />
          <Route path="chat/:chatId" element={<Chat />} />
          <Route path="group" element={<Group />} />
        </Route>
        <Route
         path="/login" 
         element={<ProtectRoute user={!user} redirect='/'>
        <Login />
         </ProtectRoute>
         } />

         <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

