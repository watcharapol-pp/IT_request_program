// utils/storage.js - LocalStorage Helper Functions

const StorageHelper = {
    // Keys
    REQUESTS_KEY: 'itRequests',
    
    // Get all requests
    getRequests: () => {
        try {
            const data = localStorage.getItem(StorageHelper.REQUESTS_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading requests:', error);
            return [];
        }
    },
    
    // Save all requests
    saveRequests: (requests) => {
        try {
            localStorage.setItem(StorageHelper.REQUESTS_KEY, JSON.stringify(requests));
            return true;
        } catch (error) {
            console.error('Error saving requests:', error);
            return false;
        }
    },
    
    // Add new request
    addRequest: (request) => {
        const requests = StorageHelper.getRequests();
        const newRequest = {
            ...request,
            id: `#${String(Date.now()).slice(-5)}`,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            status: 'Pending',
            sColor: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
        };
        const updatedRequests = [newRequest, ...requests];
        return StorageHelper.saveRequests(updatedRequests) ? newRequest : null;
    },
    
    // Update request status
    updateRequestStatus: (requestId, newStatus) => {
        const requests = StorageHelper.getRequests();
        const statusColors = {
            'Approved': 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
            'Rejected': 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
            'Pending': 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
        };
        
        const updatedRequests = requests.map(req => 
            req.id === requestId 
                ? { ...req, status: newStatus, sColor: statusColors[newStatus] }
                : req
        );
        
        return StorageHelper.saveRequests(updatedRequests);
    },
    
    // Delete request
    deleteRequest: (requestId) => {
        const requests = StorageHelper.getRequests();
        const updatedRequests = requests.filter(req => req.id !== requestId);
        return StorageHelper.saveRequests(updatedRequests);
    },
    
    // Get statistics
    getStatistics: () => {
        const requests = StorageHelper.getRequests();
        return {
            total: requests.length,
            pending: requests.filter(r => r.status === 'Pending').length,
            approved: requests.filter(r => r.status === 'Approved').length,
            rejected: requests.filter(r => r.status === 'Rejected').length
        };
    },
    
    // Clear all data
    clearAll: () => {
        try {
            localStorage.removeItem(StorageHelper.REQUESTS_KEY);
            return true;
        } catch (error) {
            console.error('Error clearing data:', error);
            return false;
        }
    }
};