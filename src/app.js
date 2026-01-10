// // App.js - Main Application


// const App = () => {
//   const { MemoryRouter, Routes, Route, Navigate } = ReactRouterDOM;
//   const { useState } = React;

//   // ระบบ Authentication และ Role
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'

//   // แชร์ State ของคำขอ (Requests)
//   const [requests, setRequests] = useState([
//     { id: "#00123", item: "Laptop (MacBook Pro)", user: "Sarah Smith", dept: "IT", reason: "Replacement for broken device", date: "Jan 1, 2022", status: "Pending", sColor: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", quantity: 1 },
//     { id: "#00124", item: "Wireless Mouse", user: "Mike Johnson", dept: "Marketing", reason: "New employee setup", date: "Dec 28, 2021", status: "Approved", sColor: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400", quantity: 2 },
//     { id: "#00125", item: "4K Monitor", user: "Emily Davis", dept: "Design", reason: "Upgrade for color accuracy", date: "Dec 25, 2021", status: "Rejected", sColor: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400", quantity: 1 },
//     { id: "#00126", item: "Docking Station", user: "John Doe", dept: "Sales", reason: "Home office setup", date: "Feb 10, 2022", status: "Pending", sColor: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400", quantity: 1 },
//   ]);

//   // ฟังก์ชันสำหรับ Login
//   const handleLogin = (role = 'user') => {
//     setIsAuthenticated(true);
//     setUserRole(role);
//   };

//   // ฟังก์ชันสำหรับ Logout
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserRole('user');
//   };

//   return (
//     <MemoryRouter>
//       {isAuthenticated ? (
//         <div className="flex bg-background-light dark:bg-background-dark min-h-screen font-sans transition-colors duration-200">
//           {userRole === 'admin' && <Sidebar />}
//           <Routes>
//             {userRole === 'admin' ? (
//               <React.Fragment>
//                 <Route path="/" element={<Dashboard requests={requests} />} />
//                 <Route path="/new-request" element={<NewRequestForm requests={requests} setRequests={setRequests} />} />
//                 <Route path="/request-status" element={<RequestStatus requests={requests} setRequests={setRequests} />} />
//                 <Route path="/approval" element={<ApprovalPage requests={requests} setRequests={setRequests} />} />
//                 <Route path="/user-management" element={<UserManagement />} />
//                 <Route path="/edit-user" element={<EditUser />} />
//                 <Route path="/new-regis-user" element={<NewRegisUser />} />
//                 <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
//                 <Route path="*" element={<Navigate to="/" replace />} />
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 <Route path="/user/dashboard" element={<UserDashboard requests={requests} />} />
//                 <Route path="/user/new-request" element={<UserNewRequest requests={requests} setRequests={setRequests} />} />
//                 <Route path="/user/profile" element={<UserProfile onLogout={handleLogout} />} />
//                 <Route path="/user/request/:id" element={<UserRequestDetails requests={requests} setRequests={setRequests} />} />
//                 <Route path="*" element={<Navigate to="/user/dashboard" replace />} />
//               </React.Fragment>
//             )}
//           </Routes>
//           <ThemeToggle />
//         </div>
//       ) : (
//         <Routes>
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       )}
//     </MemoryRouter>
//   );
// };

// // Render App
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// App.js - Main Application

// const App = () => {
//   const { MemoryRouter, Routes, Route, Navigate } = ReactRouterDOM;
//   const { useState } = React;

//   // ระบบ Authentication และ Role
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'

//   // ฟังก์ชันสำหรับ Login
//   const handleLogin = (role = 'user') => {
//     console.log('Login with role:', role);
//     setIsAuthenticated(true);
//     setUserRole(role);
//   };

//   // ฟังก์ชันสำหรับ Logout
//   const handleLogout = () => {
//     console.log('Logout');
//     setIsAuthenticated(false);
//     setUserRole('user');
//   };

//   return (
//     <MemoryRouter>
//       {isAuthenticated ? (
//         <div className="flex bg-background-light dark:bg-background-dark min-h-screen font-sans transition-colors duration-200">
//           {userRole === 'admin' && <Sidebar />}
//           <Routes>
//             {userRole === 'admin' ? (
//               <React.Fragment>
//                 <Route path="/" element={<Dashboard requests={requests} />} />
//                 <Route path="/new-request" element={<NewRequestForm requests={requests} setRequests={setRequests} />} />
//                 <Route path="/request-status" element={<RequestStatus requests={requests} setRequests={setRequests} />} />
//                 <Route path="/approval" element={<ApprovalPage requests={requests} setRequests={setRequests} />} />
//                 <Route path="/user-management" element={<UserManagement />} />
//                 <Route path="/edit-user" element={<EditUser />} />
//                 <Route path="/new-regis-user" element={<NewRegisUser />} />
//                 <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
//                 <Route path="*" element={<Navigate to="/" replace />} />
//               </React.Fragment>
//             ) : (
//               <React.Fragment>
//                 <Route path="/user/dashboard" element={<UserDashboard requests={requests} />} />
//                 <Route path="/user/new-request" element={<UserNewRequest requests={requests} setRequests={setRequests} />} />
//                 <Route path="/user/profile" element={<UserProfile onLogout={handleLogout} />} />
//                 <Route path="/user/request/:id" element={<UserRequestDetails requests={requests} setRequests={setRequests} />} />
//                 <Route path="*" element={<Navigate to="/user/dashboard" replace />} />
//               </React.Fragment>
//             )}
//           </Routes>
//           <ThemeToggle />
//         </div>
//       ) : (
//         <Routes>
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       )}
//     </MemoryRouter>
//   );
// };

// // Render App
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// App.js - Main Application

const App = () => {
    const { MemoryRouter, Routes, Route, Navigate } = ReactRouterDOM;
    const { useState } = React;

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState('user');

    const handleLogin = (role = 'user') => {
        console.log('Login with role:', role);
        setIsAuthenticated(true);
        setUserRole(role);
    };

    const handleLogout = () => {
        console.log('Logout');
        setIsAuthenticated(false);
        setUserRole('user');
    };

    return (
        <MemoryRouter>
            {isAuthenticated ? (
                <div className="flex bg-background-light dark:bg-background-dark min-h-screen font-sans transition-colors duration-200">
                    {userRole === 'admin' && <Sidebar />}

                    {/* Main Content Area */}
                    <div className={`flex-1 ${userRole === 'user' ? 'flex items-center justify-center' : ''}`}>
                        <Routes>
                            {userRole === 'admin' ? (
                                <React.Fragment>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/new-request" element={<NewRequestForm />} />
                                    <Route path="/request-status" element={<RequestStatus />} />
                                    <Route path="/approval" element={<ApprovalPage />} />
                                    <Route path="/user-management" element={<UserManagement />} />
                                    <Route path="/edit-user" element={<EditUser />} />
                                    <Route path="/new-regis-user" element={<NewRegisUser />} />
                                    <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
                                    <Route path="*" element={<Navigate to="/" replace />} />
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Route path="/user/dashboard" element={<UserDashboard />} />
                                    <Route path="/user/new-request" element={<UserNewRequest />} />
                                    <Route path="/user/request/:id" element={<UserRequestDetails />} />
                                    <Route path="/user/profile" element={<UserProfile onLogout={handleLogout} />} />
                                    <Route path="*" element={<Navigate to="/user/dashboard" replace />} />
                                </React.Fragment>
                            )}
                        </Routes>
                    </div>

                    <ThemeToggle />
                </div>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            )}
        </MemoryRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);