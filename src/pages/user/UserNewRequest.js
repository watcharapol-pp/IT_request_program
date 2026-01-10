// pages/user/UserNewRequest.js

const UserNewRequest = () => {
    const navigate = ReactRouterDOM.useNavigate();
    const { useState } = React;
    
    const [formData, setFormData] = useState({
        itemType: '',
        quantity: 1,
        reason: ''
    });
    
    const [errors, setErrors] = useState({});
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.itemType) {
            newErrors.itemType = 'Device Type is required';
        }
        
        if (!formData.quantity || formData.quantity < 1) {
            newErrors.quantity = 'Quantity must be a positive number';
        }
        
        if (!formData.reason || formData.reason.trim() === '') {
            newErrors.reason = 'Business reason is required';
        }
        
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationErrors = validateForm();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setShowErrorModal(true);
            return;
        }
        
        const newRequest = {
            id: `REQ${String(Date.now()).slice(-5)}`,
            item: formData.itemType,
            user: 'John Doe',
            dept: 'IT',
            reason: formData.reason,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            status: 'Pending',
            sColor: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
            quantity: formData.quantity
        };
        
        const savedRequests = JSON.parse(localStorage.getItem('itRequests') || '[]');
        localStorage.setItem('itRequests', JSON.stringify([newRequest, ...savedRequests]));
        
        alert('Request submitted successfully!');
        navigate('/user/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background-light dark:bg-background-dark">
            <div className="w-full max-w-4xl bg-white dark:bg-card-dark rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/5 to-emerald-500/5 dark:from-primary/10 dark:to-emerald-500/10 px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-primary to-emerald-500 rounded-2xl shadow-lg shadow-primary/30">
                            <span className="material-icons-round text-white text-2xl">post_add</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold dark:text-white">New IT Request</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Submit equipment or software requests.</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => navigate('/user/dashboard')} 
                        className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-primary/50 transition-all"
                    >
                        <span className="material-icons-round text-lg">arrow_back</span>
                        <span>Back to Dashboard</span>
                    </button>
                </div>

                {/* Form */}
                <div className="p-8">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <section>
                            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 dark:border-gray-700 pb-2">
                                Request Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Item Type */}
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-2">
                                        Item Type <span className="text-red-500">*</span>
                                    </label>
                                    <select 
                                        name="itemType"
                                        value={formData.itemType}
                                        onChange={handleInputChange}
                                        className={`w-full px-6 py-3 bg-gray-50 dark:bg-gray-800 border rounded-xl focus:ring-2 focus:ring-primary transition-all dark:text-white ${
                                            errors.itemType 
                                            ? 'border-red-500 bg-red-50 dark:bg-red-900/10' 
                                            : 'border-gray-300 dark:border-gray-600'
                                        }`}
                                    >
                                        <option value="">Select an item type</option>
                                        <option value="Laptop">💻 Laptop / Workstation</option>
                                        <option value="Monitor">🖥️ Monitor / Display</option>
                                        <option value="Software License">📦 Software License</option>
                                        <option value="Mouse/Keyboard">⌨️ Mouse / Keyboard</option>
                                        <option value="Docking Station">🔌 Docking Station</option>
                                    </select>
                                    {errors.itemType && (
                                        <p className="mt-1 text-xs text-red-500 ml-4 font-medium flex items-center gap-1">
                                            <span className="material-icons-round text-sm">error</span>
                                            {errors.itemType}
                                        </p>
                                    )}
                                </div>

                                {/* Quantity */}
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-2">
                                        Quantity <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="number" 
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleInputChange}
                                        min="1"
                                        className={`w-full px-6 py-3 bg-gray-50 dark:bg-gray-800 dark:text-white border rounded-xl focus:ring-2 focus:ring-primary transition-all ${
                                            errors.quantity 
                                            ? 'border-red-500 bg-red-50 dark:bg-red-900/10' 
                                            : 'border-gray-300 dark:border-gray-600'
                                        }`}
                                    />
                                    {errors.quantity && (
                                        <p className="mt-1 text-xs text-red-500 ml-4 font-medium flex items-center gap-1">
                                            <span className="material-icons-round text-sm">error</span>
                                            {errors.quantity}
                                        </p>
                                    )}
                                </div>

                                {/* Business Reason */}
                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ml-2">
                                        Business Reason <span className="text-red-500">*</span>
                                    </label>
                                    <textarea 
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleInputChange}
                                        rows="4" 
                                        className={`w-full px-6 py-4 bg-gray-50 dark:bg-gray-800 dark:text-white border rounded-xl focus:ring-2 focus:ring-primary resize-none transition-all ${
                                            errors.reason 
                                            ? 'border-red-500 bg-red-50 dark:bg-red-900/10' 
                                            : 'border-gray-300 dark:border-gray-600'
                                        }`}
                                        placeholder="Describe why this equipment is needed..."
                                    ></textarea>
                                    {errors.reason && (
                                        <p className="mt-1 text-xs text-red-500 ml-4 font-medium flex items-center gap-1">
                                            <span className="material-icons-round text-sm">error</span>
                                            {errors.reason}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <button 
                                type="button" 
                                onClick={() => navigate('/user/dashboard')} 
                                className="bg-gray-100 dark:bg-gray-700 dark:text-white rounded-full px-8 py-3 font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="bg-primary hover:bg-primary-hover text-white rounded-full px-8 py-3 font-bold shadow-lg shadow-primary/30 transition-all hover:shadow-xl"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                    <p>© 2026 IT Services Dept. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a className="hover:text-primary transition-colors cursor-pointer">Help Center</a>
                        <a className="hover:text-primary transition-colors cursor-pointer">Policy</a>
                    </div>
                </div>

                {/* Error Modal */}
                {showErrorModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
                        <div className="bg-white dark:bg-card-dark rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-red-100 dark:border-red-900/20 relative animate-[scale-in_0.2s_ease-out]">
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-orange-500"></div>
                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 shrink-0">
                                        <span className="material-icons-round">report_problem</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Submission Failed</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Please correct the following errors:</p>
                                        <ul className="mt-4 space-y-2">
                                            {Object.values(errors).map((error, index) => (
                                                <li key={index} className="flex items-center gap-2 text-sm text-red-700 dark:text-red-400 font-medium">
                                                    <span className="material-icons-round text-base">cancel</span>
                                                    {error}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-end">
                                    <button 
                                        onClick={() => setShowErrorModal(false)} 
                                        className="bg-red-600 hover:bg-red-500 text-white px-8 py-2.5 rounded-full font-bold transition-colors shadow-lg"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};