import { Fragment } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const navigation = [
  { name: 'Services', href: '/' },
  { name: 'Calendar', href: '/calendar' },
];

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <Disclosure as="nav" className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <span className={`text-xl font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      HomeServices
                    </span>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                          location.pathname === item.href
                            ? isDark 
                              ? 'border-b-2 border-indigo-400 text-white'
                              : 'border-b-2 border-indigo-500 text-gray-900'
                            : isDark
                              ? 'text-gray-300 hover:border-gray-300 hover:text-gray-100'
                              : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-md ${
                      isDark 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {isDark ? (
                      <SunIcon className="h-5 w-5" />
                    ) : (
                      <MoonIcon className="h-5 w-5" />
                    )}
                  </button>

                  {user ? (
                    <Menu as="div" className="relative ml-3">
                      <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`}
                          alt=""
                        />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                          isDark ? 'bg-gray-800' : 'bg-white'
                        }`}>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogout}
                                className={`${
                                  active ? isDark ? 'bg-gray-700' : 'bg-gray-100' : ''
                                } block w-full px-4 py-2 text-left text-sm ${
                                  isDark ? 'text-gray-300' : 'text-gray-700'
                                }`}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      to="/login"
                      className={`ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${
                        isDark 
                          ? 'bg-indigo-500 text-white hover:bg-indigo-400' 
                          : 'bg-indigo-600 text-white hover:bg-indigo-500'
                      }`}
                    >
                      Sign in
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>

      <main className="py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}