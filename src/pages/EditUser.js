// pages/EditUser.js

const EditUser = () => {
    const navigate = ReactRouterDOM.useNavigate();
    
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar title="Edit User" />
            <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-4 md:p-8 space-y-8">
                {/* Header Section */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                            <button 
                                onClick={() => navigate('/user-management')} 
                                className="hover:text-primary transition-colors flex items-center"
                            >
                                <span className="material-icons-outlined text-sm mr-1">arrow_back</span> 
                                Back to User Management
                            </button>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Edit User Settings</h2>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Update account information and permissions for <span className="font-medium text-slate-700 dark:text-slate-300">Jane Smith</span>.
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex gap-3">
                        <button 
                            onClick={() => navigate('/user-management')} 
                            className="inline-flex items-center justify-center rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={() => navigate('/user-management')} 
                            className="inline-flex items-center justify-center rounded-full border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-hover transition-colors"
                        >
                            <span className="material-icons-outlined mr-2">save</span>
                            Save Changes
                        </button>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Form */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
                            <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-white mb-4">Personal Information</h3>
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                {/* Full Name */}
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Full Name
                                    </label>
                                    <input 
                                        className="mt-1 shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-border-light dark:border-border-dark dark:bg-slate-800 dark:text-white rounded-full px-4 py-2" 
                                        type="text" 
                                        defaultValue="Jane Smith"
                                    />
                                </div>
                                
                                {/* Email */}
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Email
                                    </label>
                                    <input 
                                        className="mt-1 shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-border-light dark:border-border-dark dark:bg-slate-800 dark:text-white rounded-full px-4 py-2" 
                                        type="email" 
                                        defaultValue="jane.smith@example.com"
                                    />
                                </div>
                                
                                {/* Department */}
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Department
                                    </label>
                                    <select 
                                        className="mt-1 shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-border-light dark:border-border-dark dark:bg-slate-800 dark:text-white rounded-full px-3 py-2"
                                    >
                                        <option>Engineering</option>
                                        <option>Design</option>
                                        <option>Marketing</option>
                                        <option>IT Support</option>
                                        <option>HR</option>
                                    </select>
                                </div>
                                
                                {/* Role */}
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Role
                                    </label>
                                    <select 
                                        className="mt-1 shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-border-light dark:border-border-dark dark:bg-slate-800 dark:text-white rounded-full px-3 py-2"
                                    >
                                        <option>User</option>
                                        <option>Manager</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column - Profile Card */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6 flex flex-col items-center text-center">
                            <div className="h-24 w-24 rounded-full bg-success/10 flex items-center justify-center text-success font-bold text-3xl mb-4">
                                JS
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Jane Smith</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Design Department</p>
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
                                User Role
                            </span>
                            
                            {/* Account Status */}
                            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 w-full">
                                <div className="text-left space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-600 dark:text-slate-400">Status</span>
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                            Active
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-600 dark:text-slate-400">Joined</span>
                                        <span className="text-sm font-medium text-slate-900 dark:text-white">Jan 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};