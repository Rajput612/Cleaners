import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}