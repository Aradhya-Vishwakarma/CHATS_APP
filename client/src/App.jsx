import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Group = lazy(() => import('./pages/Group'));
const Chat = lazy(() => import('./pages/Chat'));
const NotFound = lazy(() => import('./pages/NotFound'));
import { LayoutLoader } from './components/layout/Loaders';
const DashBoard = lazy(() => import('./pages/admin/DashBoard'))
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin')); 
const UserManagement = lazy(() => import('./pages/admin/UserManagement'));
const ChatMangement = lazy (() => import('./pages/admin/ChatMangement'))
const MessageManagement = lazy(() => import('./pages/admin/MessageManagement'));




// Reintroduce the user variable
let user = true;

const App = () => {
  return (
    <BrowserRouter>
  <Suspense fallback={<LayoutLoader/>}>
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


         <Route path='/admin' element={<AdminLogin/>}/>
         <Route path='/admin/dashboard' element={<DashBoard/>}/>
         <Route path='/admin/users' element={<UserManagement/>}/>
         <Route path='/admin/chats' element={<ChatMangement/>}/>
         <Route path='/admin/messages' element={<MessageManagement/>}/>

         <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
  </Suspense>
    </BrowserRouter>
  );
};

export default App;

