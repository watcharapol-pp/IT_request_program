// components/TopBar.js

const TopBar = ({ title }) => {
    const { Link } = ReactRouterDOM;
    
    return (
        <header className="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark shadow-sm z-10 sticky top-0 flex md:hidden items-center justify-between px-4 h-16">
            <div className="flex items-center">
                <span className="material-icons-outlined text-primary text-3xl mr-2">dns</span>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h1>
            </div>
            <div className="flex items-center gap-2">
                <Link to="/profile" className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">JD</Link>
            </div>
        </header>
    );
};