// components/Sidebar.js

const Sidebar = () => {
    const navigate = ReactRouterDOM.useNavigate();
    const location = ReactRouterDOM.useLocation();
    const { Link } = ReactRouterDOM;
    
    const isActive = (path) => location.pathname === path;

    return (
        <aside className="w-64 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark hidden md:flex flex-col shadow-sm z-10 h-screen sticky top-0">
            {/* Logo & Title */}
            <div className="h-16 flex items-center px-6 border-b border-border-light dark:border-border-dark">
                <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 shadow-sm">IT</div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">IT Portal</h1>
            </div>
            
            {/* Navigation Menu */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                <Link to="/" className={`flex items-center px-4 py-3 text-sm font-medium rounded-full transition-colors group ${isActive('/') ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'}`}>
                    <span className="material-icons-outlined mr-3 text-lg">dashboard</span>
                    Dashboard
                </Link>
                
                {/* <Link to="/new-request" className={`flex items-center px-4 py-3 text-sm font-medium rounded-full transition-colors group ${isActive('/new-request') ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'}`}>
                    <span className="material-icons-outlined mr-3 text-lg">add_circle_outline</span>
                    New Request
                </Link> */}
                
                <Link to="/request-status" className={`flex items-center px-4 py-3 text-sm font-medium rounded-full transition-colors group ${isActive('/request-status') ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'}`}>
                    <span className="material-icons-outlined mr-3 text-lg">history</span>
                    Request Status
                </Link>
                
                <Link to="/approval" className={`flex items-center px-4 py-3 text-sm font-medium rounded-full transition-colors group ${isActive('/approval') ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'}`}>
                    <span className="material-icons-outlined mr-3 text-lg">fact_check</span>
                    Admin Approval
                </Link>
                
                <Link to="/user-management" className={`flex items-center px-4 py-3 text-sm font-medium rounded-full transition-colors group ${isActive('/user-management') ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'}`}>
                    <span className="material-icons-outlined mr-3 text-lg">people</span>
                    User Management
                </Link>
                
                {/* <Link to="/profile" className={`flex items-center px-4 py-3 text-sm font-medium rounded-full transition-colors group ${isActive('/profile') ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary'}`}>
                    <span className="material-icons-outlined mr-3 text-lg">account_circle</span>
                    My Profile
                </Link> */}
            </nav>
            
            {/* User Profile Section */}
            <div className="p-4 border-t border-border-light dark:border-border-dark">
                <Link to="/profile" className="flex items-center px-3 py-2 space-x-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer">
                    <div className="h-9 w-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300 ring-2 ring-white dark:ring-slate-800">JD</div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">John Doe</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">IT Dept</p>
                    </div>
                </Link>
            </div>
        </aside>
    );
};