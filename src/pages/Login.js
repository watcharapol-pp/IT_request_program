// pages/Login.js

const Login = ({ onLogin }) => {
    const { useState } = React;

    const users = {
        'admin@company.com': { password: 'admin123', role: 'admin' },
        'EMP-ADMIN': { password: 'a123', role: 'admin' },
        'EMP-ADMIN2': { password: 'admin123', role: 'admin' },
        'user@company.com': { password: 'user123', role: 'user' },
        'john.doe@company.com': { password: 'user123', role: 'user' },
        'EMP-001': { password: 'u123', role: 'user' }
    };

    const [loginType, setLoginType] = useState('email');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ identity: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.identity || !formData.password) {
            alert('กรุณากรอกข้อมูลให้ครบ / Please fill in all fields');
            return;
        }

        const user = users[formData.identity];

        if (!user) {
            alert('ไม่พบผู้ใช้งานนี้ / User not found');
            return;
        }

        if (user.password !== formData.password) {
            alert('รหัสผ่านไม่ถูกต้อง / Invalid password');
            return;
        }

        // alert(`เข้าสู่ระบบสำเร็จ / Login successful as ${user.role}!`);
        if (onLogin) onLogin(user.role);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col justify-center items-center text-slate-900 dark:text-white overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
                <div className="absolute top-[30%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-600/5 blur-[100px]"></div>
            </div>

            <div className="relative w-full max-w-md px-6 py-8 z-10">
                {/* Logo */}
                <div className="mb-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-white text-4xl">cloud_done</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                        IT Request Portal
                    </h1>
                    <p className="text-slate-500 dark:text-text-secondary">
                        Sign in to manage and track your requests.
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-2xl overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-slate-200 dark:border-border-dark">
                        <button
                            onClick={() => setLoginType('email')}
                            className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors duration-200 
                                ${loginType === 'email'
                                    ? 'text-primary border-primary bg-slate-50/50 dark:bg-white/5'
                                    : 'text-slate-500 dark:text-slate-400 border-transparent'
                                }`}
                        >
                            Email
                        </button>
                        <button
                            onClick={() => setLoginType('employeeId')}
                            className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors duration-200 
                                ${loginType === 'employeeId'
                                    ? 'text-primary border-primary bg-slate-50/50 dark:bg-white/5'
                                    : 'text-slate-500 dark:text-slate-400 border-transparent'
                                }`}
                        >
                            Employee ID
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                        {/* Identity Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white">
                                {loginType === 'email' ? 'Email' : 'Employee ID'}
                            </label>
                            <input
                                className="block w-full rounded-lg border border-slate-300 dark:border-border-dark py-3 pl-4 text-slate-900 dark:bg-slate-800 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm transition-all"
                                name="identity"
                                placeholder={loginType === 'email' ? 'user@company.com' : 'EMP001'}
                                type={loginType === 'email' ? 'email' : 'text'}
                                value={formData.identity}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700 dark:text-white">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="block w-full rounded-lg border border-slate-300 dark:border-border-dark py-3 pl-4 pr-10 text-slate-900 dark:bg-slate-800 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm transition-all"
                                    name="password"
                                    placeholder="••••••••"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-slate-400 dark:text-text-secondary text-lg">
                                        {showPassword ? 'visibility' : 'visibility_off'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-primary/20"
                        >
                            Sign In
                        </button>

                        {/* Demo Accounts */}
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-gray-500 text-center mb-3">Demo Accounts</p>
                            <div className="text-[11px] text-gray-400 dark:text-gray-500 space-y-1.5 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                                <div><strong>Admin:</strong> EMP-ADMIN / a123</div>
                                <div><strong>User:</strong> EMP-001 / u123</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};