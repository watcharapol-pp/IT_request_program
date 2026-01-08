// pages/Dashboard.js

const Dashboard = () => {
    const { useEffect, useRef } = React;
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            
            // Cleanup previous chart if any
            if (window.myChart) window.myChart.destroy();

            window.myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Requests',
                        data: [12, 19, 10, 5, 2, 3],
                        backgroundColor: '#38e07b',
                        borderRadius: 4,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, grid: { color: 'rgba(148, 163, 184, 0.1)' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
        return () => { if (window.myChart) window.myChart.destroy(); }
    }, []);

    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            <TopBar title="Dashboard" />
            <div className="flex-1 overflow-auto bg-background-light dark:bg-background-dark p-4 md:p-8 space-y-8">
                {/* Stats Grid */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Dashboard Overview</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {/* All Requests Card */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark transition-all hover:shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                    <span className="material-icons-outlined">folder_open</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">All Requests</p>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">12</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Pending Card */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark transition-all hover:shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-warning/10 text-warning">
                                    <span className="material-icons-outlined">hourglass_empty</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending</p>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">3</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Approved Card */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark transition-all hover:shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-success/10 text-success">
                                    <span className="material-icons-outlined">check_circle</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Approved</p>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">7</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Rejected Card */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 shadow-sm border border-border-light dark:border-border-dark transition-all hover:shadow-md">
                            <div className="flex items-center">
                                <div className="p-3 rounded-full bg-danger/10 text-danger">
                                    <span className="material-icons-outlined">cancel</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Rejected</p>
                                    <p className="text-2xl font-bold text-slate-900 dark:text-white">2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Chart Section */}
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Request Statistics</h3>
                        <div className="h-64 w-full">
                            <canvas ref={chartRef}></canvas>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};