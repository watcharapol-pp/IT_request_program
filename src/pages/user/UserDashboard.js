// pages/user/UserDashboard.js

const UserDashboard = () => {
    const navigate = ReactRouterDOM.useNavigate();
    const { useState, useEffect } = React;
    
    // Load requests from localStorage
    const [requests, setRequests] = useState([]);
    
    useEffect(() => {
        const savedRequests = JSON.parse(localStorage.getItem('itRequests') || '[]');
        setRequests(savedRequests);
    }, []);
    
    // Calculate statistics
    const totalRequests = requests.length;
    const pendingRequests = requests.filter(r => r.status === 'Pending').length;
    const approvedRequests = requests.filter(r => r.status === 'Approved').length;
    const rejectedRequests = requests.filter(r => r.status === 'Rejected').length;
    const cancelRequests = requests.filter(r => r.status === 'Cancelled').length;  
    
    // Get recent requests (last 5)
    const recentRequests = requests.slice(0, 5);

    // Get icon based on item type
    const getItemIcon = (item) => {
        if (item.toLowerCase().includes('laptop') || item.toLowerCase().includes('macbook')) return 'laptop_mac';
        if (item.toLowerCase().includes('monitor')) return 'monitor';
        if (item.toLowerCase().includes('mouse')) return 'mouse';
        if (item.toLowerCase().includes('keyboard')) return 'keyboard';
        if (item.toLowerCase().includes('headset') || item.toLowerCase().includes('headphone')) return 'headset';
        if (item.toLowerCase().includes('software') || item.toLowerCase().includes('license')) return 'extension';
        return 'devices';
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-7xl space-y-6">
                {/* Header */}
                <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                                <span className="material-icons-round text-blue-600 dark:text-blue-400 text-2xl">dashboard</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">User Dashboard</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Manage your IT requests and equipment.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 w-full md:w-auto">
                            <button 
                                onClick={() => navigate('/user/profile')} 
                                className="flex-1 md:flex-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all"
                            >
                                <span className="material-icons-round text-lg">list_alt</span>
                                <span>My Profile</span>
                            </button>
                            <button 
                                onClick={() => navigate('/user/new-request')} 
                                className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm font-semibold shadow-sm transition-all"
                            >
                                <span className="material-icons-round text-lg">add_circle</span>
                                <span>New Request</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div>
                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">My Requests Overview</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total</p>
                                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalRequests}</p>
                                </div>
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                    <span className="material-icons-round text-blue-600 dark:text-blue-400 text-xl">folder_shared</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Pending</p>
                                    <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{pendingRequests}</p>
                                </div>
                                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                                    <span className="material-icons-round text-orange-600 dark:text-orange-400 text-xl">hourglass_bottom</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Approved</p>
                                    <p className="text-3xl font-bold text-green-600 dark:text-green-400">{approvedRequests}</p>
                                </div>
                                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                    <span className="material-icons-round text-green-600 dark:text-green-400 text-xl">check_circle</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Rejected</p>
                                    <p className="text-3xl font-bold text-red-600 dark:text-red-400">{rejectedRequests}</p>
                                </div>
                                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                    <span className="material-icons-round text-red-600 dark:text-red-400 text-xl">cancel</span>
                                </div>
                            </div>
                        </div>

                        {/* cancel requests */}
                        <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Cancel</p>
                                    <p className="text-3xl font-bold text-gray-600 dark:text-gray-400">{cancelRequests}</p>
                                </div>
                                <div className="p-3 bg-gray-100 dark:bg-gray-900/30 rounded-lg">
                                    <span className="material-icons-round text-gray-600 dark:text-gray-400 text-xl">cancel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold flex items-center gap-2 dark:text-white">
                            <span className="material-icons-round text-gray-400 text-xl">history</span>
                            Recent Activity
                        </h2>
                        {/* <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium flex items-center gap-1">
                            View All My Requests
                            <span className="material-icons-round text-sm">arrow_forward</span>
                        </button> */}
                    </div>
                    
                    <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                        {recentRequests.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Request ID</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Device / Item</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Department</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {recentRequests.map((req) => (
                                            <tr 
                                                key={req.id}
                                                className="hover:bg-gray-50 dark:hover:bg-gray-800/30 cursor-pointer transition-colors" 
                                                onClick={() => {
                                                    const cleanId = req.id.replace('#', '');
                                                    navigate(`/user/request/${cleanId}`);
                                                }}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{req.id}</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                                            <span className="material-icons-round text-gray-500 dark:text-gray-400 text-lg">{getItemIcon(req.item)}</span>
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-900 dark:text-white">{req.item}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">{req.dept}</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">{req.date}</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {req.status === 'Pending' && (
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                                            Pending
                                                        </span>
                                                    )}
                                                    {req.status === 'Approved' && (
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                            Approved
                                                        </span>
                                                    )}
                                                    {req.status === 'Rejected' && (
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                                            Rejected
                                                        </span>
                                                    )}
                                                    {req.status === 'Cancelled' && (
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                                            Cancelled
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                                    <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                                        <span className="material-icons-round text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl">more_vert</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Showing recent {recentRequests.length} requests</p>
                                    <button className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
                                        Go to full history
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="px-6 py-16 text-center">
                                <span className="material-icons-round text-6xl text-gray-300 dark:text-gray-600 block mb-4">inbox</span>
                                <p className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-2">No requests yet</p>
                                <p className="text-gray-400 dark:text-gray-500 text-sm mb-6">Create your first request to get started!</p>
                                <button 
                                    onClick={() => navigate('/user/new-request')}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold inline-flex items-center gap-2 transition-all"
                                >
                                    <span className="material-icons-round text-lg">add</span>
                                    Create Request
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 text-xs text-gray-400 dark:text-gray-500">
                    <p>© 2023 IT Services Dept. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Help Center</a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
};