// pages/RequestStatus.js

const RequestStatus = () => {
    const { useState } = React;
    const { Link } = ReactRouterDOM;

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [selectedId, setSelectedId] = useState(null);
    const [showFilter, setShowFilter] = useState(false);

    // Mock Data State
    const [requests, setRequests] = useState([
        { id: "#00123", item: "Laptop (MacBook Pro)", user: "Sarah Smith", dept: "IT", reason: "Replacement for broken device", date: "Jan 1, 2022", status: "Pending", sColor: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
        { id: "#00124", item: "Wireless Mouse", user: "Mike Johnson", dept: "Marketing", reason: "New employee setup", date: "Dec 28, 2021", status: "Approved", sColor: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
        { id: "#00125", item: "4K Monitor", user: "Emily Davis", dept: "Design", reason: "Upgrade for color accuracy", date: "Dec 25, 2021", status: "Rejected", sColor: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
        { id: "#00126", item: "Docking Station", user: "John Doe", dept: "Sales", reason: "Home office setup", date: "Feb 10, 2022", status: "Pending", sColor: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
    ]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved': return "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400";
            case 'Rejected': return "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400";
            case 'Pending': return "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
            default: return "bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
        }
    };

    const handleStatusUpdate = (newStatus) => {
        setRequests(prev => prev.map(req => {
            if (req.id === selectedId) {
                return { ...req, status: newStatus, sColor: getStatusColor(newStatus) };
            }
            return req;
        }));
        setSelectedId(null);
    };

    const filteredRequests = requests.filter(req => {
        const matchesSearch =
            req.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
            req.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
            req.id.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = filterStatus === "All" || req.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const selectedRequest = requests.find(r => r.id === selectedId);

    // List View
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar title="Request Status" />
            <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-4 md:p-8 space-y-6">
                <div className="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex flex-1 items-center gap-3">
                            <div className="relative flex-1 max-w-md">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
                                </span>
                                <input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-border-light dark:border-border-dark rounded-full leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm"
                                    placeholder="Search requests..."
                                    type="text"
                                />
                            </div>
                            <div className="relative">
                                <button
                                    onClick={() => setShowFilter(!showFilter)}
                                    className={`flex items-center px-4 py-2 border rounded-full text-sm font-medium transition-colors shadow-sm ${filterStatus !== 'All'
                                        ? getStatusColor(filterStatus)
                                        : 'bg-white dark:bg-slate-800 border-border-light dark:border-border-dark text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                                        }`}
                                >
                                    <span className="material-symbols-outlined mr-2 text-lg">filter_list</span>
                                    {filterStatus === 'All' ? 'Filter' : filterStatus}
                                </button>
                                {showFilter && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark z-20 p-2 animation-fade-in">
                                        {["All", "Pending", "Approved", "Rejected"].map((status) => (
                                            <button
                                                key={status}
                                                onClick={() => {
                                                    setFilterStatus(status);
                                                    setShowFilter(false);
                                                }}
                                                className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-all mb-1 last:mb-0 ${getStatusColor(status)} ${filterStatus === status
                                                    ? 'ring-2 ring-primary ring-offset-1 dark:ring-offset-surface-dark font-semibold'
                                                    : 'hover:opacity-80'
                                                    }`}
                                            >
                                                {status === "All" ? "All Requests" : status}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <Link to="/new-request" className="flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm">
                                <span className="material-symbols-outlined mr-2 text-lg">add</span>
                                New Request
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-surface-dark shadow-sm rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-border-light dark:divide-border-dark">
                            <thead className="bg-gray-50 dark:bg-slate-800/50">


                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Item</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Requester</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light dark:divide-border-dark bg-white dark:bg-surface-dark">
                                {filteredRequests.length > 0 ? (
                                    filteredRequests.map((req, i) => (
                                        <tr
                                            key={i}
                                            onClick={() => setSelectedId(req.id)}
                                            className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary">{req.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300 font-medium">{req.item}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{req.user}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{req.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${req.sColor}`}>
                                                    {req.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-4xl mb-2 block opacity-50">search_off</span>
                                            No requests found matching your criteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Modal Popup */}
            {selectedRequest && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animation-fade-in" onClick={() => setSelectedId(null)}>
                    <div
                        className="bg-white dark:bg-surface-dark w-full max-w-lg rounded-2xl shadow-xl border border-border-light dark:border-border-dark overflow-hidden animation-scale-in"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <span className="material-symbols-outlined text-primary text-xl">assignment_turned_in</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                        Approval Request {selectedRequest.id}
                                    </h3>
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-1 ${getStatusColor(selectedRequest.status)}`}>
                                        {selectedRequest.status}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedId(null)}
                                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 space-y-6">
                            {/* Request Info */}
                            <div className="grid grid-cols-[100px,1fr] gap-4 items-start">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Request</span>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-slate-400">laptop_mac</span>
                                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{selectedRequest.item}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-[100px,1fr] gap-4 items-start">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Reason</span>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {selectedRequest.reason}
                                </p>
                            </div>

                            <div className="grid grid-cols-[100px,1fr] gap-4 items-center">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Requester</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                                        {selectedRequest.user.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">{selectedRequest.user}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-500">{selectedRequest.dept} Dept</p>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                                <button
                                    onClick={() => handleStatusUpdate('Approved')}
                                    className="flex-1 py-2.5 px-4 bg-slate-700 hover:bg-slate-800 text-white rounded-lg font-medium transition-all shadow-sm flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleStatusUpdate('Rejected')}
                                    className="flex-1 py-2.5 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-all shadow-sm flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-sm">cancel</span>
                                    Reject
                                </button>
                            </div>

                            {/* Comment */}
                            <div className="pt-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Comment:</span>
                                </div>
                                <textarea
                                    className="w-full text-sm p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-gray-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 placeholder-slate-400 resize-none transition-all"
                                    rows="3"
                                    placeholder="Optional comments for the requester..."
                                ></textarea>
                                <p className="text-[10px] text-slate-400 mt-1.5 text-right">
                                    Comments will be visible to the requester upon decision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};