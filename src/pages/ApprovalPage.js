// pages/ApprovalPage.js

const ApprovalPage = () => {
    const { useState } = React;
    const navigate = ReactRouterDOM.useNavigate();
    
    // Mock Data State for Prototype
    const [requests, setRequests] = useState([
        { id: "#00125", item: "Notebook - MacBook Pro 16\"", reason: "For new project development requiring high-performance computing resources for local rendering and compilation tasks.", requester: "John Doe", dept: "IT Dept", status: "Pending", date: "2023-10-25" },
        { id: "#00126", item: "4K Monitor - Dell U2720Q", reason: "Existing monitor has dead pixels and color accuracy issues critical for design work.", requester: "Jane Smith", dept: "Design", status: "Pending", date: "2023-10-26" },
        { id: "#00127", item: "Software - JetBrains All Products", reason: "Annual license renewal for the backend team.", requester: "Robert Johnson", dept: "Engineering", status: "Pending", date: "2023-10-27" }
    ]);
    const [selectedId, setSelectedId] = useState(null);

    const selectedRequest = requests.find(r => r.id === selectedId);
    const pendingRequests = requests.filter(r => r.status === "Pending");

    const handleUpdateStatus = (newStatus) => {
        setRequests(prev => prev.map(r => r.id === selectedId ? {...r, status: newStatus} : r));
        // alert(`Request ${selectedId} marked as ${newStatus}`);
        setSelectedId(null);
    };

    // List View
    if (!selectedId) {
        return (
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <TopBar title="Admin Approval" />
                <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-4 md:p-8">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Pending Approvals</h2>
                    {pendingRequests.length === 0 ? (
                        <div className="text-center py-20 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
                            <span className="material-icons-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4">task_alt</span>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">All caught up! No pending requests.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4">
                            {pendingRequests.map(req => (
                                <div key={req.id} onClick={() => setSelectedId(req.id)} className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark cursor-pointer hover:shadow-md transition-all group">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-start gap-4">
                                            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                <span className="material-icons-outlined">inventory_2</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{req.item}</h3>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Requester: <span className="font-medium text-slate-700 dark:text-slate-300">{req.requester}</span> • {req.dept}</p>
                                                <p className="text-xs text-slate-400 mt-2">Requested on {req.date}</p>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800">
                                            Review
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Detail View
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar title="Admin Approval" />
            <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-4 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-2xl bg-surface-light dark:bg-surface-dark shadow-xl rounded-xl border border-border-light dark:border-border-dark overflow-hidden transition-colors duration-200">
                    <div className="px-6 py-5 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                        <div className="flex items-center gap-3">
                            <button onClick={() => setSelectedId(null)} className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors">
                                <span className="material-icons text-slate-500">arrow_back</span>
                            </button>
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                Approval Request {selectedRequest.id}
                            </h1>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800">
                            Pending Review
                        </span>
                    </div>
                    <div className="p-6 space-y-8">
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-baseline">
                                <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide w-32 shrink-0">Request</label>
                                <div className="mt-1 sm:mt-0 text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                    <span className="material-icons text-gray-400 dark:text-gray-500 text-base">laptop_mac</span>
                                    {selectedRequest.item}
                                </div>
                            </div>
                            <hr className="border-border-light dark:border-border-dark border-dashed"/>
                            <div className="flex flex-col sm:flex-row sm:items-baseline">
                                <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide w-32 shrink-0">Reason</label>
                                <div className="mt-1 sm:mt-0 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {selectedRequest.reason}
                                </div>
                            </div>
                            <hr className="border-border-light dark:border-border-dark border-dashed"/>
                            <div className="flex flex-col sm:flex-row sm:items-baseline">
                                <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide w-32 shrink-0">Requester</label>
                                <div className="mt-1 sm:mt-0 flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                                        {selectedRequest.requester.split(' ').map(n=>n[0]).join('')}
                                    </div>
                                    <span className="text-base text-gray-700 dark:text-gray-300">{selectedRequest.requester} ({selectedRequest.dept})</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4">
                            <button onClick={() => handleUpdateStatus('Approved')} className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 border 
                            border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors" type="button">
                                <span className="material-icons text-sm">check_circle</span>
                                Approve
                            </button>
                            <button onClick={() => handleUpdateStatus('Rejected')} className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 
                            border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-danger hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-danger transition-colors" type="button">
                                <span className="material-icons text-sm">cancel</span>
                                Reject
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-6 border-t border-border-light dark:border-border-dark">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 pt-2 w-32 shrink-0" htmlFor="comment">
                                Comment:
                            </label>
                            <div className="w-full">
                                <textarea className="shadow-sm block w-full focus:ring-primary focus:border-primary sm:text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors p-3" id="comment" name="comment" placeholder="Optional comments for the requester..." rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};