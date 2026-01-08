// pages/NewRegisUser.js

const NewRegisUser = () => {
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar title="Register New User" />
            <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-4 md:p-8 space-y-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium flex items-center" href="#">
                                <span className="material-icons-outlined text-base mr-1">arrow_back</span>
                                Back to User Management
                            </a>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Register New User</h2>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Fill in the details below to create a new user account.</p>
                    </div>
                </div>

                <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
                    <form className="p-6 sm:p-8">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-white border-b border-border-light dark:border-border-dark pb-2 mb-4">Personal Information</h3>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="name">Full Name</label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-icons-outlined text-slate-400 text-lg">badge</span>
                                            </div>
                                            <input className="block w-full pl-10 rounded-md border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-2" id="name" name="name" placeholder="e.g. Jane Doe" type="text" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">Email Address</label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-icons-outlined text-slate-400 text-lg">email</span>
                                            </div>
                                            <input className="block w-full pl-10 rounded-md border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-2" id="email" name="email" placeholder="e.g. jane.doe@company.com" type="email" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-white border-b border-border-light dark:border-border-dark pb-2 mb-4">Professional Details</h3>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="employee_id">Employee ID</label>
                                        <input className="block w-full rounded-md border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-2 px-3" id="employee_id" name="employee_id" placeholder="ID-XXXX" type="text" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="department">Department</label>
                                        <input className="block w-full rounded-md border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-2 px-3" id="department" name="department" placeholder="e.g. Engineering" type="text" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="role">Role</label>
                                        <div className="relative">
                                            <select className="block w-full rounded-md border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-2 px-3" id="role" name="role">
                                                <option value="user">User</option>
                                                <option value="manager">Manager</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-white border-b border-border-light dark:border-border-dark pb-2 mb-4">Security</h3>
                                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="password">Initial Password</label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-icons-outlined text-slate-400 text-lg">lock</span>
                                            </div>
                                            <input className="block w-full pl-10 rounded-md border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-2" id="password" name="password" type="password" />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="password_confirmation">Confirm Password</label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-icons-outlined text-slate-400 text-lg">lock_reset</span>
                                            </div>
                                            <input className="block w-full pl-10 rounded-md border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary sm:text-sm py-2" id="password_confirmation" name="password_confirmation" type="password" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark flex items-center justify-end gap-3">
                            <a className="px-4 py-2 border border-border-light dark:border-border-dark shadow-sm text-sm font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors" href="#">
                                Cancel
                            </a>
                            <button className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors" type="submit">
                                Register User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};