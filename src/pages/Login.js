// // pages/Login.js

// const Login = ({ onLogin }) => {
//     const { useState } = React;
    
//     const [loginType, setLoginType] = useState('email'); // 'email' or 'employeeId'
//     const [showPassword, setShowPassword] = useState(false);
//     const [formData, setFormData] = useState({
//         identity: '',
//         password: ''
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         // Simple validation
//         if (!formData.identity || !formData.password) {
//             alert('Please fill in all fields');
//             return;
//         }

//         // Demo login - call onLogin callback
//         // alert('Login successful! (Demo)');
//         if (onLogin) onLogin();
//     };

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     return (
//         <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col justify-center items-center text-slate-900 dark:text-white overflow-hidden relative selection:bg-primary/30 selection:text-white">
//             {/* Background Decoration */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
//                 <div className="absolute top-[30%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-600/5 blur-[100px]"></div>
//             </div>

//             {/* Main Content Container */}
//             <div className="relative w-full max-w-md px-6 py-8 z-10">
//                 {/* Logo / Branding Area */}
//                 <div className="mb-8 text-center flex flex-col items-center">
//                     <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
//                         <span className="material-symbols-outlined text-white text-4xl">cloud_done</span>
//                     </div>
//                     <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
//                         IT Request Portal
//                     </h1>
//                     <p className="text-slate-500 dark:text-text-secondary">
//                         Sign in to manage and track your requests.
//                     </p>
//                 </div>

//                 {/* Login Card */}
//                 <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
//                     {/* Tabs */}
//                     <div className="flex border-b border-slate-200 dark:border-border-dark">
//                         <button 
//                             onClick={() => setLoginType('email')}
//                             className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-white/5 ${
//                                 loginType === 'email' 
//                                 ? 'text-primary border-primary bg-slate-50/50 dark:bg-white/5' 
//                                 : 'text-slate-500 dark:text-text-secondary border-transparent'
//                             }`}
//                         >
//                             Log in with Email
//                         </button>
//                         <button 
//                             onClick={() => setLoginType('employeeId')}
//                             className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-white/5 ${
//                                 loginType === 'employeeId' 
//                                 ? 'text-primary border-primary bg-slate-50/50 dark:bg-white/5' 
//                                 : 'text-slate-500 dark:text-text-secondary border-transparent'
//                             }`}
//                         >
//                             Log in with Employee ID
//                         </button>
//                     </div>

//                     {/* Form Content */}
//                     <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
//                         {/* Input Group 1: Email or Employee ID */}
//                         <div className="space-y-2">
//                             <label 
//                                 className="block text-sm font-medium text-slate-700 dark:text-white" 
//                                 htmlFor="identity"
//                             >
//                                 {loginType === 'email' ? 'Work Email' : 'Employee ID'}
//                             </label>
//                             <div className="relative rounded-lg shadow-sm">
//                                 <input 
//                                     className="form-input block w-full rounded-lg border-0 py-3 pl-4 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-[#151a25] dark:text-white dark:ring-border-dark dark:placeholder-text-secondary sm:text-sm sm:leading-6 h-12 transition-all" 
//                                     id="identity" 
//                                     name="identity" 
//                                     placeholder={loginType === 'email' ? 'user@company.com' : 'EMP001'} 
//                                     type={loginType === 'email' ? 'email' : 'text'}
//                                     value={formData.identity}
//                                     onChange={handleInputChange}
//                                 />
//                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
//                                     <span className="material-symbols-outlined text-slate-400 dark:text-text-secondary" style={{fontSize: '20px'}}>
//                                         {loginType === 'email' ? 'mail' : 'badge'}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Input Group 2: Password */}
//                         <div className="space-y-2">
//                             <div className="flex items-center justify-between">
//                                 <label 
//                                     className="block text-sm font-medium text-slate-700 dark:text-white" 
//                                     htmlFor="password"
//                                 >
//                                     Password
//                                 </label>
//                             </div>
//                             <div className="relative rounded-lg shadow-sm">
//                                 <input 
//                                     className="form-input block w-full rounded-lg border-0 py-3 pl-4 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-[#151a25] dark:text-white dark:ring-border-dark dark:placeholder-text-secondary sm:text-sm sm:leading-6 h-12 transition-all" 
//                                     id="password" 
//                                     name="password" 
//                                     placeholder="••••••••" 
//                                     type={showPassword ? 'text' : 'password'}
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                 />
//                                 <div 
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer group"
//                                 >
//                                     <span className="material-symbols-outlined text-slate-400 dark:text-text-secondary group-hover:text-primary transition-colors" style={{fontSize: '20px'}}>
//                                         {showPassword ? 'visibility' : 'visibility_off'}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Action Button */}
//                         <div>
//                             <button 
//                                 type="submit"
//                                 className="flex w-full justify-center items-center rounded-lg bg-primary px-3 py-3 text-sm font-bold leading-6 text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 h-12"
//                             >
//                                 Sign In
//                             </button>
//                         </div>

//                         {/* Footer Links */}
//                         <div className="flex flex-col gap-4 text-center">
//                             <a 
//                                 className="text-sm font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer" 
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     alert('Password reset feature (Demo)');
//                                 }}
//                             >
//                                 Forgot your password?
//                             </a>
//                         </div>
//                     </form>
//                 </div>

//                 {/* Bottom Help Text */}
//                 <p className="mt-8 text-center text-xs text-slate-400 dark:text-gray-500">
//                     Need help accessing your account? {' '}
//                     <a 
//                         className="font-medium text-slate-600 dark:text-text-secondary hover:text-primary dark:hover:text-white underline transition-colors cursor-pointer" 
//                         onClick={(e) => {
//                             e.preventDefault();
//                             alert('Contact IT Support feature (Demo)');
//                         }}
//                     >
//                         Contact IT Support
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// };




// pages/Login.js

const Login = ({ onLogin }) => {
    const { useState } = React;
    
    const [loginType, setLoginType] = useState('email'); // 'email' or 'employeeId'
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        identity: '',
        password: ''
    });
    const [userRole, setUserRole] = useState('user'); // 'user' or 'admin'

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!formData.identity || !formData.password) {
            alert('Please fill in all fields');
            return;
        }

        // Demo login - call onLogin callback with role
        // alert(`Login successful as ${userRole}! (Demo)`);
        if (onLogin) onLogin(userRole);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col justify-center items-center text-slate-900 dark:text-white overflow-hidden relative selection:bg-primary/30 selection:text-white">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
                <div className="absolute top-[30%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-600/5 blur-[100px]"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative w-full max-w-md px-6 py-8 z-10">
                {/* Logo / Branding Area */}
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
                <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
                    {/* Tabs */}
                    <div className="flex border-b border-slate-200 dark:border-border-dark">
                        <button 
                            onClick={() => setLoginType('email')}
                            className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-white/5 ${
                                loginType === 'email' 
                                ? 'text-primary border-primary bg-slate-50/50 dark:bg-white/5' 
                                : 'text-slate-500 dark:text-text-secondary border-transparent'
                            }`}
                        >
                            Log in with Email
                        </button>
                        <button 
                            onClick={() => setLoginType('employeeId')}
                            className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors duration-200 hover:bg-slate-50 dark:hover:bg-white/5 ${
                                loginType === 'employeeId' 
                                ? 'text-primary border-primary bg-slate-50/50 dark:bg-white/5' 
                                : 'text-slate-500 dark:text-text-secondary border-transparent'
                            }`}
                        >
                            Log in with Employee ID
                        </button>
                    </div>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                        {/* Input Group 1: Email or Employee ID */}
                        <div className="space-y-2">
                            <label 
                                className="block text-sm font-medium text-slate-700 dark:text-white" 
                                htmlFor="identity"
                            >
                                {loginType === 'email' ? 'Work Email' : 'Employee ID'}
                            </label>
                            <div className="relative rounded-lg shadow-sm">
                                <input 
                                    className="form-input block w-full rounded-lg border-0 py-3 pl-4 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-[#151a25] dark:text-white dark:ring-border-dark dark:placeholder-text-secondary sm:text-sm sm:leading-6 h-12 transition-all" 
                                    id="identity" 
                                    name="identity" 
                                    placeholder={loginType === 'email' ? 'user@company.com' : 'EMP001'} 
                                    type={loginType === 'email' ? 'email' : 'text'}
                                    value={formData.identity}
                                    onChange={handleInputChange}
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <span className="material-symbols-outlined text-slate-400 dark:text-text-secondary" style={{fontSize: '20px'}}>
                                        {loginType === 'email' ? 'mail' : 'badge'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Input Group 2: Password */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label 
                                    className="block text-sm font-medium text-slate-700 dark:text-white" 
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="relative rounded-lg shadow-sm">
                                <input 
                                    className="form-input block w-full rounded-lg border-0 py-3 pl-4 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary dark:bg-[#151a25] dark:text-white dark:ring-border-dark dark:placeholder-text-secondary sm:text-sm sm:leading-6 h-12 transition-all" 
                                    id="password" 
                                    name="password" 
                                    placeholder="••••••••" 
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <div 
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer group"
                                >
                                    <span className="material-symbols-outlined text-slate-400 dark:text-text-secondary group-hover:text-primary transition-colors" style={{fontSize: '20px'}}>
                                        {showPassword ? 'visibility' : 'visibility_off'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div>
                            <button 
                                type="submit"
                                className="flex w-full justify-center items-center rounded-lg bg-primary px-3 py-3 text-sm font-bold leading-6 text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 h-12"
                            >
                                Sign In
                            </button>
                        </div>

                        {/* Footer Links */}
                        <div className="flex flex-col gap-4 text-center">
                            <a 
                                className="text-sm font-medium text-primary hover:text-primary-hover transition-colors cursor-pointer" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert('Password reset feature (Demo)');
                                }}
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </form>
                </div>

                {/* Bottom Help Text */}
                <p className="mt-8 text-center text-xs text-slate-400 dark:text-gray-500">
                    Need help accessing your account? {' '}
                    <a 
                        className="font-medium text-slate-600 dark:text-text-secondary hover:text-primary dark:hover:text-white underline transition-colors cursor-pointer" 
                        onClick={(e) => {
                            e.preventDefault();
                            // alert('Contact IT Support feature (Demo)');
                        }}
                    >
                        Contact IT Support
                    </a>
                </p>
            </div>
        </div>
    );
};