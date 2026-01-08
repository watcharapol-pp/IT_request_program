// pages/NewRequestForm.js

const NewRequestForm = () => {
    const { useState } = React;
    const navigate = ReactRouterDOM.useNavigate();
    const [popup, setPopup] = useState({ show: false, type: 'success', title: '', message: '', solution: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const reason = formData.get('reason');
        const quantity = formData.get('quantity');

        // Validation Logic
        if (!reason || reason.trim() === "") {
            setPopup({
                show: true,
                type: 'error',
                title: 'Submission Failed',
                message: 'The "Reason" field is missing.',
                solution: 'Please describe why this equipment is needed in the "Reason" text box.'
            });
            return;
        }

        if (quantity < 1) {
            setPopup({
                show: true,
                type: 'error',
                title: 'Submission Failed',
                message: 'Invalid Quantity.',
                solution: 'Please ensure the quantity is at least 1.'
            });
            return;
        }

        // Success
        setPopup({
            show: true,
            type: 'success',
            title: 'Success!',
            message: 'Your request has been submitted successfully.',
            solution: ''
        });
    };

    const handleClosePopup = () => {
        if (popup.type === 'success') {
            setPopup({ ...popup, show: false });
            navigate('/request-status');
        } else {
            setPopup({ ...popup, show: false });
        }
    };

    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
            {/* Popup Modal */}
            {popup.show && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className={`bg-white dark:bg-surface-dark rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all scale-100 border ${popup.type === 'success' ? 'border-green-500' : 'border-red-500'}`}>
                        <div className={`p-4 flex items-center justify-center ${popup.type === 'success' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                            <div className={`h-16 w-16 rounded-full flex items-center justify-center ${popup.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                <span className="material-icons-round text-4xl">{popup.type === 'success' ? 'check_circle' : 'error'}</span>
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className={`text-xl font-bold mb-2 ${popup.type === 'success' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                                {popup.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">
                                {popup.message}
                            </p>
                            {popup.type === 'error' && (
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-6 text-left text-sm border border-gray-200 dark:border-gray-700">
                                    <p className="font-bold text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1">
                                        <span className="material-icons-round text-sm text-blue-500">info</span> 
                                        How to fix:
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 pl-5">{popup.solution}</p>
                                </div>
                            )}
                            <button 
                                onClick={handleClosePopup}
                                className={`w-full py-3 rounded-xl font-bold text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 ${popup.type === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                            >
                                {popup.type === 'success' ? 'Go to Status' : 'Try Again'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <TopBar title="New Request" />
            <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-4 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-3xl bg-card-light dark:bg-card-dark rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-200">
                    <div className="bg-gray-50 dark:bg-gray-800/50 px-8 py-5 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="material-icons-round text-primary text-2xl">post_add</span>
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">New IT Request</h1>
                        </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center">
                            <label className="md:col-span-3 block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="requester">
                                Requester:
                            </label>
                            <div className="md:col-span-9 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-icons-round text-gray-400 text-lg">person</span>
                                </div>
                                <select className="pl-10 block w-full rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors py-2" id="requester" name="requester">
                                    <option>John Doe</option>
                                    <option>Jane Smith</option>
                                    <option>Alex Johnson</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center">
                            <label className="md:col-span-3 block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="department">
                                Department:
                            </label>
                            <div className="md:col-span-9 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-icons-round text-gray-400 text-lg">business</span>
                                </div>
                                <select className="pl-10 block w-full rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors py-2" id="department" name="department">
                                    <option>IT</option>
                                    <option>Human Resources</option>
                                    <option>Finance</option>
                                    <option>Marketing</option>
                                    <option>Production</option>
                                    <option>Quality</option>
                                    <option>Research and Development</option>
                                    <option>Supply Chain</option>
                                </select>
                            </div>
                        </div>
                        
                        <hr className="border-gray-200 dark:border-gray-700 my-6"/>
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center">
                            <label className="md:col-span-3 block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="device-type">
                                Device Type:
                            </label>
                            <div className="md:col-span-9 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-icons-round text-gray-400 text-lg">laptop_mac</span>
                                </div>
                                <select className="pl-10 block w-full rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors py-2" id="device-type" name="device-type">
                                    <option>Notebook</option>
                                    <option>Desktop Workstation</option>
                                    <option>Monitor (27")</option>
                                    <option>Peripheral (Mouse/Keyboard)</option>
                                    <option>Printer</option>
                                    <option>Scanner</option>
                                    <option>Server</option>
                                    <option>Storage</option>
                                    <option>Tablet</option>
                                    <option>Workstation</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center">
                            <label className="md:col-span-3 block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="quantity">
                                Quantity:
                            </label>
                            <div className="md:col-span-3 relative">
                                <input className="block w-full rounded-full border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors px-4 py-2" id="quantity" min="1" name="quantity" type="number" defaultValue="1"/>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <label className="md:col-span-3 block text-sm font-semibold text-gray-700 dark:text-gray-300 pt-2" htmlFor="reason">
                                Reason:
                            </label>
                            <div className="md:col-span-9">
                                <textarea className="block w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors resize-none p-3" id="reason" name="reason" placeholder="Please describe why this equipment is needed..." rows="4"></textarea>
                                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Briefly explain the business justification for this request.</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                            <button onClick={() => navigate(-1)} className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium transition-colors" type="button">
                                Cancel
                            </button>
                            <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900 flex items-center justify-center gap-2" type="submit">
                                <span>Submit Request</span>
                                <span className="material-icons-round text-sm">send</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};