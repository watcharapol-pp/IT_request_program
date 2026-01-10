// pages/user/UserProfile.js

const UserProfile = ({ onLogout }) => {
    const navigate = ReactRouterDOM.useNavigate();
    const { useState } = React;

    const [formData, setFormData] = useState({
        fullName: 'Alex Morgan',
        email: 'alex.morgan@company.com',
        phone: '+1 (555) 123-4567',
        department: 'Engineering',
        notifications: {
            requestUpdates: true,
            newEquipment: false,
            systemMaintenance: true
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNotificationToggle = (key) => {
        setFormData(prev => ({
            ...prev,
            notifications: {
                ...prev.notifications,
                [key]: !prev.notifications[key]
            }
        }));
    };

    const handleSignOut = () => {
        if (onLogout) onLogout();
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                            <span className="material-icons-round text-blue-600 dark:text-blue-400 text-2xl">account_circle</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Profile</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Manage your account settings and preferences.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/user/dashboard')}
                        className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                        <span className="material-icons-round text-lg">dashboard</span>
                        <span>Dashboard</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Profile Card */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Profile Card */}
                    <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                        {/* Banner */}
                        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                                <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 p-1 shadow-lg">
                                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative">
                                        <span className="material-icons-round text-gray-400 dark:text-gray-500 text-5xl">person</span>
                                        <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
                                            <span className="material-icons-round text-white text-sm">camera_alt</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-14 pb-6 px-6 text-center">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{formData.fullName}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Senior Software Engineer</p>
                            
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-icons-round text-gray-400 text-base">business</span>
                                    <span>Engineering Dept</span>
                                </div>
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="material-icons-round text-gray-400 text-base">location_on</span>
                                    <span>Building A, Floor 3</span>
                                </div>
                            </div>

                            <button
                                onClick={handleSignOut}
                                className="w-full py-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg font-semibold flex items-center justify-center gap-2 border border-red-100 dark:border-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                            >
                                <span className="material-icons-round text-lg">logout</span>
                                Sign Out
                            </button>
                        </div>
                    </div>

                    {/* Employee Status Card */}
                    <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-icons-round text-yellow-500 text-xl">verified_user</span>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white">Employee Status</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 dark:text-gray-400">Employee ID</span>
                                <span className="font-semibold text-gray-900 dark:text-white">EMP-2049</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 dark:text-gray-400">Joined</span>
                                <span className="font-semibold text-gray-900 dark:text-white">Mar 15, 2021</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 dark:text-gray-400">Active Requests</span>
                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold rounded">3 Pending</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Forms */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Personal Information */}
                    <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <span className="material-icons-round text-blue-600 dark:text-blue-400 text-xl">badge</span>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Personal Information</h3>
                            </div>
                            <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
                                Edit
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                    Department
                                </label>
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white"
                                >
                                    <option value="Engineering">Engineering</option>
                                    <option value="IT">IT</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Sales">Sales</option>
                                    <option value="HR">HR</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <button className="px-6 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                Cancel
                            </button>
                            <button
                                onClick={() => alert('Profile updated successfully!')}
                                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-sm transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Notification Preferences */}
                    <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-icons-round text-blue-600 dark:text-blue-400 text-xl">notifications</span>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Notification Preferences</h3>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <input
                                    type="checkbox"
                                    checked={formData.notifications.requestUpdates}
                                    onChange={() => handleNotificationToggle('requestUpdates')}
                                    className="mt-1 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <div className="flex-1">
                                    <label className="text-sm font-semibold text-gray-900 dark:text-white block mb-1">
                                        Request Updates
                                    </label>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Get notified when the status of your request changes.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <input
                                    type="checkbox"
                                    checked={formData.notifications.newEquipment}
                                    onChange={() => handleNotificationToggle('newEquipment')}
                                    className="mt-1 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <div className="flex-1">
                                    <label className="text-sm font-semibold text-gray-900 dark:text-white block mb-1">
                                        New Equipment Availability
                                    </label>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Receive alerts when new devices are added to the inventory.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <input
                                    type="checkbox"
                                    checked={formData.notifications.systemMaintenance}
                                    onChange={() => handleNotificationToggle('systemMaintenance')}
                                    className="mt-1 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <div className="flex-1">
                                    <label className="text-sm font-semibold text-gray-900 dark:text-white block mb-1">
                                        System Maintenance Alerts
                                    </label>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Notify me about planned system downtimes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                            <button
                                onClick={() => alert('Preferences updated!')}
                                className="px-6 py-2.5 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg font-semibold shadow-sm transition-colors"
                            >
                                Update Preferences
                            </button>
                        </div>
                    </div>

                    {/* Security & Password */}
                    <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <button className="w-full flex items-center justify-between group">
                            <div className="flex items-center gap-2">
                                <span className="material-icons-round text-blue-600 dark:text-blue-400 text-xl">lock</span>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Security & Password</h3>
                            </div>
                            <span className="material-icons-round text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                expand_more
                            </span>
                        </button>
                    </div>
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
    );
};