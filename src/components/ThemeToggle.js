// components/ThemeToggle.js

const ThemeToggle = () => {
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark');
    };
    
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button 
                className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 p-3 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:focus:ring-white" 
                onClick={toggleTheme}
            >
                <span className="material-icons-round block dark:hidden">dark_mode</span>
                <span className="material-icons-round hidden dark:block">light_mode</span>
            </button>
        </div>
    );
};