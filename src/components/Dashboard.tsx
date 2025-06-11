import React, { useState } from 'react';
import { Calendar, Filter, Download, RefreshCw } from 'lucide-react';
import { KPICard } from './KPICard';
import { RevenueChart } from './RevenueChart';
import { CategoryChart } from './CategoryChart';
import { GrowthChart } from './GrowthChart';
import { 
  kpiData, 
  revenueData, 
  categoryData, 
  growthData, 
  dailyActivityData,
  timeRanges,
  filterOptions 
} from '../data/mockData';

interface DashboardProps {
  activeView: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ activeView }) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} data={kpi} />
        ))}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart data={revenueData} title="Revenue Overview" type="area" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryChart data={categoryData} title="Sales by Category" type="pie" />
        <GrowthChart data={growthData} title="Quarterly Growth" />
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={revenueData} title="Revenue Trend" type="line" />
        <CategoryChart data={categoryData} title="Category Performance" type="bar" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart data={dailyActivityData} title="Daily Activity" type="area" />
        <GrowthChart data={growthData} title="Growth Analysis" />
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpiData.slice(1, 4).map((kpi, index) => (
          <KPICard key={index} data={kpi} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart 
          data={revenueData.map(d => ({ ...d, revenue: d.users }))} 
          title="User Growth" 
          type="line" 
        />
        <CategoryChart data={categoryData} title="User Demographics" type="pie" />
      </div>
    </div>
  );

  const renderSales = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[kpiData[0], kpiData[3]].map((kpi, index) => (
          <KPICard key={index} data={kpi} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryChart data={categoryData} title="Sales Distribution" type="bar" />
        <RevenueChart data={revenueData} title="Sales Trend" type="area" />
      </div>
    </div>
  );

  const getViewTitle = () => {
    switch (activeView) {
      case 'analytics': return 'Analytics Dashboard';
      case 'users': return 'User Analytics';
      case 'sales': return 'Sales Dashboard';
      default: return 'Dashboard Overview';
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case 'analytics': return renderAnalytics();
      case 'users': return renderUsers();
      case 'sales': return renderSales();
      default: return renderOverview();
    }
  };

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {getViewTitle()}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Real-time insights and analytics
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Time Range Selector */}
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            {/* Filter Dropdown */}
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Action Buttons */}
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg transition-colors duration-200"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  );
};