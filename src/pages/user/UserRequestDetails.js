// pages/user/UserRequestDetails.js

const UserRequestDetails = () => {
    const navigate = ReactRouterDOM.useNavigate();
    const location = ReactRouterDOM.useLocation();
    const { useState, useEffect } = React;

    const [showCancelConfirm, setShowCancelConfirm] = useState(false);
    const [request, setRequest] = useState(null);

    // Get request ID from URL
    const urlId = location.pathname.split('/').pop();

    useEffect(() => {
        console.log('URL ID:', urlId); // Debug
        
        // Load from localStorage
        const savedRequests = JSON.parse(localStorage.getItem('itRequests') || '[]');
        console.log('All Requests:', savedRequests); // Debug
        
        // Find request - try with and without #
        let foundRequest = savedRequests.find(r => r.id === urlId);
        if (!foundRequest) {
            foundRequest = savedRequests.find(r => r.id === `#${urlId}`);
        }
        if (!foundRequest) {
            foundRequest = savedRequests.find(r => r.id.replace('#', '') === urlId);
        }
        
        console.log('Found Request:', foundRequest); // Debug
        setRequest(foundRequest);
    }, [urlId]);

    const handleCancelRequest = () => {
        const savedRequests = JSON.parse(localStorage.getItem('itRequests') || '[]');
        const updatedRequests = savedRequests.map(r => {
            const cleanId = r.id.replace('#', '');
            const cleanUrlId = urlId.replace('#', '');
            
            if (cleanId === cleanUrlId) {
                return { ...r, status: 'Cancelled', sColor: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300' };
            }
            return r;
        });
        
        localStorage.setItem('itRequests', JSON.stringify(updatedRequests));
        
        // Update local state
        const updated = updatedRequests.find(r => {
            const cleanId = r.id.replace('#', '');
            const cleanUrlId = urlId.replace('#', '');
            return cleanId === cleanUrlId;
        });
        setRequest(updated);
        setShowCancelConfirm(false);
    };

    if (!request) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background-dark p-4">
                <div className="text-center">
                    <span className="material-icons-round text-6xl text-gray-400 dark:text-gray-600 mb-4 block">search_off</span>
                    <p className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-4">Request not found</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">The request you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/user/dashboard')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-sm transition-all inline-flex items-center gap-2"
                    >
                        <span className="material-icons-round text-lg">arrow_back</span>
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-background-dark p-6">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                <span className="material-icons-round text-white text-2xl">receipt_long</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                                    {request.id}
                                </h1>
                                <p className="text-sm text-blue-100">Submitted {request.date}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            {request.status === 'Pending' && (
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                    Pending
                                </span>
                            )}
                            {request.status === 'Approved' && (
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                    Approved
                                </span>
                            )}
                            {request.status === 'Rejected' && (
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    Rejected
                                </span>
                            )}
                            {request.status === 'Cancelled' && (
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                                    <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                                    Cancelled
                                </span>
                            )}
                            <button
                                onClick={() => navigate('/user/dashboard')}
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2 transition-all"
                            >
                                <span className="material-icons-round text-sm">arrow_back</span>
                                <span>Back</span>
                            </button>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Details */}
                            <div className="lg:col-span-2 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Requester</p>
                                        <p className="text-base font-bold text-gray-900 dark:text-white">{request.user}</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Department</p>
                                        <p className="text-base font-bold text-gray-900 dark:text-white">{request.dept}</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Device</p>
                                        <p className="text-base font-bold text-gray-900 dark:text-white">{request.item}</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Quantity</p>
                                        <p className="text-base font-bold text-gray-900 dark:text-white">{request.quantity} Unit{request.quantity > 1 ? 's' : ''}</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider flex items-center gap-2 mb-3">
                                        <span className="material-icons-round text-base">description</span>
                                        Justification
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">"{request.reason}"</p>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="lg:col-span-1">
                                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                                    <h3 className="text-sm font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                                        <span className="material-icons-round text-blue-600 dark:text-blue-400 text-base">history</span>
                                        Timeline
                                    </h3>
                                    <div className="space-y-6 border-l-2 border-blue-200 dark:border-blue-800 ml-2 pl-6 relative">
                                        {request.status === 'Pending' && (
                                            <React.Fragment>
                                                <div className="relative">
                                                    <div className="absolute -left-[1.88rem] top-1 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-800 animate-pulse"></div>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">In Review</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Currently with Manager</p>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute -left-[1.88rem] top-1 w-4 h-4 rounded-full bg-blue-300 dark:bg-blue-700 ring-4 ring-white dark:ring-gray-800"></div>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Submitted</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{request.date}</p>
                                                </div>
                                            </React.Fragment>
                                        )}
                                        {request.status === 'Approved' && (
                                            <React.Fragment>
                                                <div className="relative">
                                                    <div className="absolute -left-[1.88rem] top-1 w-4 h-4 rounded-full bg-green-500 ring-4 ring-white dark:ring-gray-800"></div>
                                                    <p className="text-sm font-bold text-green-700 dark:text-green-400">Approved</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Request approved</p>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute -left-[1.88rem] top-1 w-4 h-4 rounded-full bg-blue-300 dark:bg-blue-700 ring-4 ring-white dark:ring-gray-800"></div>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Submitted</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{request.date}</p>
                                                </div>
                                            </React.Fragment>
                                        )}
                                        {request.status === 'Rejected' && (
                                            <React.Fragment>
                                                <div className="relative">
                                                    <div className="absolute -left-[1.88rem] top-1 w-4 h-4 rounded-full bg-red-500 ring-4 ring-white dark:ring-gray-800"></div>
                                                    <p className="text-sm font-bold text-red-700 dark:text-red-400">Rejected</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Request not approved</p>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute -left-[1.88rem] top-1 w-4 h-4 rounded-full bg-blue-300 dark:bg-blue-700 ring-4 ring-white dark:ring-gray-800"></div>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Submitted</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{request.date}</p>
                                                </div>
                                            </React.Fragment>
                                        )}
                                        {request.status === 'Cancelled' && (
                                            <React.Fragment>
                                                <div className="relative">
                                                    <div className="absolute -left-[1.88rem] top-1 w-4 h-4 rounded-full bg-gray-400 ring-4 ring-white dark:ring-gray-800"></div>
                                                    <p className="text-sm font-bold text-gray-700 dark:text-gray-400">Cancelled</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Withdrawn by user</p>
                                                </div>
                                                <div className="relative">
                                                    <div className="absolute -left-[1.88rem] top-1 w-4 h-4 rounded-full bg-blue-300 dark:bg-blue-700 ring-4 ring-white dark:ring-gray-800"></div>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Submitted</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{request.date}</p>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </div>
                                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 px-8 py-5 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        {request.status === 'Pending' ? (
                            <button
                                onClick={() => setShowCancelConfirm(true)}
                                className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-bold flex items-center gap-2 transition-colors"
                            >
                                <span className="material-icons-round text-lg">cancel</span>
                                Cancel Request
                            </button>
                        ) : (
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium italic">
                                {request.status === 'Cancelled' && 'Request has been withdrawn'}
                                {request.status === 'Approved' && 'Request has been approved'}
                                {request.status === 'Rejected' && 'Request was not approved'}
                            </span>
                        )}
                        <button
                            onClick={() => navigate('/user/dashboard')}
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2.5 font-semibold shadow-sm transition-all"
                        >
                            Close Details
                        </button>
                    </div>

                    {/* Cancel Confirmation Modal */}
                    {showCancelConfirm && (
                        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6">
                            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                                        <span className="material-icons-round text-2xl">warning</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cancel Request?</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            This action is permanent. You will need to submit a new request if you change your mind.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setShowCancelConfirm(false)}
                                        className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 dark:text-white font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        Keep It
                                    </button>
                                    <button
                                        onClick={handleCancelRequest}
                                        className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                                    >
                                        Yes, Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};