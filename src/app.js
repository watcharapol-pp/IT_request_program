// App.js - Main Application

const App = () => {
    const { MemoryRouter, Routes, Route, Navigate } = ReactRouterDOM;
    const { useState } = React;

    // Simple auth state management
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <MemoryRouter>
            {isAuthenticated ? (
                <div className="flex bg-background-light dark:bg-background-dark min-h-screen font-sans transition-colors duration-200">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/new-request" element={<NewRequestForm />} />
                        <Route path="/profile" element={<ProfilePage onLogout={() => setIsAuthenticated(false)} />} />
                        <Route path="/user-management" element={<UserManagement />} />
                        <Route path="/edit-user" element={<EditUser />} />
                        <Route path="/approval" element={<ApprovalPage />} />
                        <Route path="/request-status" element={<RequestStatus />} />
                        <Route path="/new-user" element={<NewRegisUser />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                    <ThemeToggle />
                </div>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            )}
        </MemoryRouter>
    );
};

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



// App.js - Main Application

// const App = () => {
//     const { MemoryRouter, Routes, Route, Navigate } = ReactRouterDOM;
//     const { useState } = React;

//     // Simple auth state management
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'

//     const handleLogin = (role = 'user') => {
//         setIsAuthenticated(true);
//         setUserRole(role);
//     };

//     const handleLogout = () => {
//         setIsAuthenticated(false);
//         setUserRole('user');
//     };

//     return (
//         <MemoryRouter>
//             {isAuthenticated ? (
//                 <div className="flex bg-background-light dark:bg-background-dark min-h-screen font-sans transition-colors duration-200">
//                     {userRole === 'admin' && <Sidebar />}
//                     <Routes>
//                         {/* Admin Routes */}
//                         {userRole === 'admin' && (
//                             <>
//                                 <Route path="/" element={<Dashboard />} />
//                                 <Route path="/new-request" element={<NewRequestForm />} />
//                                 <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
//                                 <Route path="/user-management" element={<UserManagement />} />
//                                 <Route path="/edit-user" element={<EditUser />} />
//                                 <Route path="/approval" element={<ApprovalPage />} />
//                                 <Route path="/request-status" element={<RequestStatus />} />
//                                 <Route path="/new-user" element={<NewRegisUser />} />
//                                 <Route path="*" element={<Navigate to="/" replace />} />
//                             </>
//                         )}

//                         {/* User Routes */}
//                         {userRole === 'user' && (
//                             <>
//                                 <Route path="/user/dashboard" element={<UserDashboard />} />
//                                 <Route path="/user/new-request" element={<UserNewRequest />} />
//                                 <Route path="/user/request/:id" element={<UserRequestDetails />} />
//                                 <Route path="/user/profile" element={<UserProfile onLogout={handleLogout} />} />
//                                 <Route path="*" element={<Navigate to="/user/dashboard" replace />} />
//                             </>
//                         )}

//                         <Route path="*" element={<Navigate to="/" replace />} />
//                     </Routes>
//                     <ThemeToggle />
//                 </div>
//             ) : (
//                 <Routes>
//                     <Route path="/login" element={<Login onLogin={handleLogin} />} />
//                     <Route path="*" element={<Navigate to="/login" replace />} />
//                 </Routes>
//             )}
//         </MemoryRouter>
//     );
// };

// // Render App
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);