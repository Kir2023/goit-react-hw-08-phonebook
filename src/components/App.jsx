import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/HomePage/HomePage'));
const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const Register = lazy(() => import('pages/RegisterPage/RegisterPage'));
const Contacts = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
