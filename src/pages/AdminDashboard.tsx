import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, MapPin, TrendingUp, Calendar, Download, RefreshCw, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface DistanceReport {
    employee_id: number;
    attendance_date: string;
    stations_visited: string;
    total_distance_km: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
    count: number;
    data: DistanceReport[];
}

const AdminDashboard: React.FC = () => {
    const [reports, setReports] = useState<DistanceReport[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
    const navigate = useNavigate();
    const { logout } = useAuth();

    const fetchReports = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://query-q-backend.vercel.app/api/getDailyDistanceReport');
            const data: ApiResponse = await response.json();

            if (data.success) {
                setReports(data.data);
                setLastUpdated(new Date());
            } else {
                setError('Failed to fetch reports');
            }
        } catch (err) {
            setError('Error connecting to server');
            console.error('Error fetching reports:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const totalDistance = reports.reduce((sum, report) => sum + parseFloat(report.total_distance_km), 0);
    const totalStations = reports.reduce((sum, report) => sum + parseInt(report.stations_visited), 0);

    const handleDownloadCSV = () => {
        const headers = ['Employee ID', 'Date', 'Stations Visited', 'Total Distance (km)'];
        const csvData = reports.map(report => [
            report.employee_id,
            formatDate(report.attendance_date),
            report.stations_visited,
            parseFloat(report.total_distance_km).toFixed(2)
        ]);

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `distance-report-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 flex items-start justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
                        <p className="text-gray-600">Daily Distance Report - Tata Power EV Charging</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Last updated: {lastUpdated.toLocaleTimeString('en-IN')}
                        </p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg font-semibold"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-semibold uppercase">Total Employees</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">{reports.length}</p>
                            </div>
                            <Users className="w-12 h-12 text-blue-500 opacity-80" />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-semibold uppercase">Total Stations</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">{totalStations}</p>
                            </div>
                            <MapPin className="w-12 h-12 text-green-500 opacity-80" />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-cyan-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-semibold uppercase">Total Distance</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">{totalDistance.toFixed(2)}</p>
                                <p className="text-xs text-gray-500 mt-1">kilometers</p>
                            </div>
                            <TrendingUp className="w-12 h-12 text-cyan-500 opacity-80" />
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-semibold uppercase">Avg Distance</p>
                                <p className="text-3xl font-bold text-gray-800 mt-2">
                                    {reports.length > 0 ? (totalDistance / reports.length).toFixed(2) : '0'}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">km per employee</p>
                            </div>
                            <Calendar className="w-12 h-12 text-purple-500 opacity-80" />
                        </div>
                    </div>
                </div>

                {/* Actions Bar */}
                <div className="bg-white rounded-xl shadow-lg p-4 mb-6 flex flex-wrap gap-4 items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-800">Distance Reports</h2>
                    <div className="flex gap-3">
                        <button
                            onClick={fetchReports}
                            disabled={loading}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                            Refresh
                        </button>
                        <button
                            onClick={handleDownloadCSV}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                        >
                            <Download className="w-4 h-4" />
                            Download CSV
                        </button>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-lg font-semibold"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="text-center">
                                <RefreshCw className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                                <p className="text-gray-600 text-lg">Loading reports...</p>
                            </div>
                        </div>
                    ) : error ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="text-center">
                                <div className="text-red-500 text-6xl mb-4">⚠️</div>
                                <p className="text-red-600 text-lg font-semibold">{error}</p>
                                <button
                                    onClick={fetchReports}
                                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                                >
                                    Try Again
                                </button>
                            </div>
                        </div>
                    ) : reports.length === 0 ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="text-center">
                                <p className="text-gray-600 text-lg">No reports available</p>
                            </div>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Employee ID
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Stations Visited
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Total Distance (km)
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                                            Avg per Station
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {reports.map((report, index) => {
                                        const avgPerStation = parseFloat(report.total_distance_km) / parseInt(report.stations_visited);
                                        return (
                                            <tr
                                                key={index}
                                                className="hover:bg-blue-50 transition-colors"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold mr-3">
                                                            {report.employee_id.toString().slice(-2)}
                                                        </div>
                                                        <span className="text-sm font-semibold text-gray-800">
                                                            EMP-{report.employee_id}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm text-gray-700">
                                                        {formatDate(report.attendance_date)}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                                                        <MapPin className="w-4 h-4 mr-1" />
                                                        {report.stations_visited}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm font-bold text-gray-800">
                                                        {parseFloat(report.total_distance_km).toFixed(2)} km
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="text-sm text-gray-600">
                                                        {avgPerStation.toFixed(2)} km
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Footer Summary */}
                {!loading && !error && reports.length > 0 && (
                    <div className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-6 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-sm opacity-90">Total Reports</p>
                                <p className="text-3xl font-bold">{reports.length}</p>
                            </div>
                            <div>
                                <p className="text-sm opacity-90">Combined Distance</p>
                                <p className="text-3xl font-bold">{totalDistance.toFixed(2)} km</p>
                            </div>
                            <div>
                                <p className="text-sm opacity-90">Total Stations Covered</p>
                                <p className="text-3xl font-bold">{totalStations}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
