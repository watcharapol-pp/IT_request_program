// pages/ProfilePage.js

const ProfilePage = ({ onLogout }) => {
    const navigate = ReactRouterDOM.useNavigate();

    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar title="My Profile" />
            <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-4 md:p-8 flex items-start justify-center">
                <div className="w-full max-w-5xl bg-card-light dark:bg-card-dark rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200 flex flex-col">
                    {/* Header */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="p-3 bg-primary/20 rounded-full shrink-0">
                                <span className="material-icons-round text-primary text-2xl">account_circle</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">My Profile</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Manage your account settings and preferences.</p>
                            </div>
                        </div>
                        <button onClick={() => navigate('/')} className="w-full md:w-auto bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium py-2.5 px-4 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 text-sm">
                            <span className="material-icons-round text-lg">dashboard</span>
                            <span>Dashboard</span>
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 md:p-8 space-y-8 overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Col - Profile Card */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                                    <div className="relative h-32 bg-gradient-to-r from-primary to-green-600">
                                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                                            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 text-2xl font-bold">
                                                JD
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-16 pb-6 px-6 text-center">
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">John Doe</h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Senior Software Engineer</p>
                                        <div className="mt-4 flex flex-col gap-2">
                                            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                <span className="material-icons-round text-gray-400 text-base">business</span>
                                                <span>IT Dept</span>
                                            </div>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                                            <button
                                                onClick={onLogout}
                                                className="w-full bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 
                                                text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 font-medium py-2.5 px-4 rounded-full shadow-sm transition-all flex items-center justify-center gap-2 text-sm"
                                            >
                                                <span className="material-icons-round text-lg">logout</span>
                                                <span>Sign Out</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Col - Settings */}
                            <div className="lg:col-span-2 space-y-6">
                                <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                            <span className="material-icons-round text-primary">badge</span>
                                            Personal Information
                                        </h3>
                                    </div>
                                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                            <input readOnly className="mt-1 block w-full rounded-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm" type="text" defaultValue="John Doe" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                            <input readOnly className="mt-1 block w-full rounded-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm" type="email" defaultValue="john.doe@company.com" />
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
                                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                        <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                            <span className="material-icons-round text-primary">notifications</span>
                                            Notification Preferences
                                        </h3>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input defaultChecked className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded" type="checkbox" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label className="font-medium text-gray-700 dark:text-gray-300">Request Updates</label>
                                                <p className="text-gray-500 dark:text-gray-400">Get notified when the status of your request changes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};