// pages/UserManagement.js

const UserManagement = () => {
    const navigate = ReactRouterDOM.useNavigate();
    const { useState } = React;
    
    const [searchTerm, setSearchTerm] = useState("");
    
    const users = [
        {
            id: "#USR-001",
            name: "John Doe",
            email: "john.doe@company.com",
            dept: "IT Support",
            role: "Admin",
            init: "JD",
            color: "bg-primary/10 text-primary",
            status: "Active"
        },
        {
            id: "#USR-002",
            name: "Jane Smith",
            email: "jane.smith@company.com",
            dept: "Design",
            role: "User",
            init: "JS",
            color: "bg-success/10 text-success",
            status: "Active"
        },
        {
            id: "#USR-003",
            name: "Robert Brown",
            email: "robert.brown@company.com",
            dept: "Engineering",
            role: "Manager",
            init: "RB",
            color: "bg-warning/10 text-warning",
            status: "Active"
        },
        {
            id: "#USR-004",
            name: "Sarah Wilson",
            email: "sarah.wilson@company.com",
            dept: "Marketing",
            role: "User",
            init: "SW",
            color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
            status: "Inactive"
        },
    ];
    
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.dept.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar title="User Management" />
            <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-4 md:p-8 space-y-6">
                {/* Header Section */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Admin User Management</h2>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">View, edit, and manage system user accounts and roles.</p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <button 
                            onClick={() => navigate('/new-regis-user')} 
                            className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary 
                            px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-hover 
                            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full sm:w-auto transition-colors" 
                            type="button"
                        >
                            <span className="material-icons-outlined mr-2 text-lg">person_add</span>
                            Add New User
                        </button>
                    </div>
                </div>

                {/* Search Bar Section */}
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative w-full md:flex-1 max-w-md">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-icons-outlined text-slate-400 text-lg">search</span>
                            </div>
                            <input 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-2 border border-border-light dark:border-border-dark rounded-full leading-5 
                                bg-white dark:bg-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary 
                                sm:text-sm text-slate-900 dark:text-white transition-all shadow-sm" 
                                placeholder="Search by name, email, or department..." 
                                type="text"
                            />
                        </div>
                        {/* <div className="flex gap-2">
                            <button className="flex items-center px-4 py-2 bg-white dark:bg-slate-700 border border-border-light dark:border-border-dark rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors shadow-sm">
                                <span className="material-icons-outlined mr-2 text-lg">filter_list</span>
                                Filter
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-border-light dark:border-border-dark">
                        <div className="flex items-center">
                            <div className="p-2 rounded-full bg-primary/10 text-primary">
                                <span className="material-icons-outlined text-2xl">people</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Total Users</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">{users.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-border-light dark:border-border-dark">
                        <div className="flex items-center">
                            <div className="p-2 rounded-full bg-success/10 text-success">
                                <span className="material-icons-outlined text-2xl">check_circle</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Active</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">{users.filter(u => u.status === 'Active').length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-border-light dark:border-border-dark">
                        <div className="flex items-center">
                            <div className="p-2 rounded-full bg-warning/10 text-warning">
                                <span className="material-icons-outlined text-2xl">admin_panel_settings</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Admins</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">{users.filter(u => u.role === 'Admin').length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-border-light dark:border-border-dark">
                        <div className="flex items-center">
                            <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                <span className="material-icons-outlined text-2xl">business</span>
                            </div>
                            <div className="ml-3">
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Departments</p>
                                <p className="text-xl font-bold text-slate-900 dark:text-white">4</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User Table */}
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-border-light dark:divide-border-dark">
                            <thead className="bg-slate-50 dark:bg-slate-800">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">User ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Department</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                                    <th className="relative px-6 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-surface-light dark:bg-surface-dark divide-y divide-border-light dark:divide-border-dark">
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map(user => (
                                        <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">
                                                {user.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className={`h-10 w-10 rounded-full ${user.color} flex items-center justify-center font-bold text-sm mr-3 shadow-sm`}>
                                                        {user.init}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-slate-900 dark:text-white">
                                                            {user.name}
                                                        </div>
                                                        <div className="text-xs text-slate-500 dark:text-slate-400">
                                                            {user.email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                                                {user.dept}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    user.status === 'Active' 
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                                                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                                }`}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button 
                                                    onClick={() => navigate('/edit-user')} 
                                                    className="text-slate-400 hover:text-primary transition-colors mr-3" 
                                                    title="Edit"
                                                >
                                                    <span className="material-icons-outlined text-xl">edit</span>
                                                </button>
                                                <button 
                                                    className="text-slate-400 hover:text-danger transition-colors" 
                                                    title="Delete"
                                                    onClick={() => {
                                                        if (confirm(`Are you sure you want to delete ${user.name}?`)) {
                                                            alert('User deleted (demo only)');
                                                        }
                                                    }}
                                                >
                                                    <span className="material-icons-outlined text-xl">delete</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                                            <span className="material-icons-outlined text-4xl mb-2 block opacity-50">search_off</span>
                                            No users found matching your search criteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination (Optional - for demo) */}
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                            Showing <span className="font-medium text-slate-900 dark:text-white">{filteredUsers.length}</span> of <span className="font-medium text-slate-900 dark:text-white">{users.length}</span> users
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-border-light dark:border-border-dark rounded-full hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors disabled:opacity-50" disabled>
                                Previous
                            </button>
                            <button className="px-3 py-1 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-border-light dark:border-border-dark rounded-full hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors disabled:opacity-50" disabled>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};