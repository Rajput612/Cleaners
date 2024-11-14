import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Services from './components/Services';
import Calendar from './components/Calendar';
import BookingForm from './components/BookingForm';
import Login from './components/Login';
import Signup from './components/Signup';
import { useAuth } from './contexts/AuthContext';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Services />} />
        <Route
          path="calendar"
          element={
            <PrivateRoute>
              <Calendar />
            </PrivateRoute>
          }
        />
        <Route
          path="book/:serviceId"
          element={
            <PrivateRoute>
              <BookingForm />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}