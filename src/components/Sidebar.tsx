import React from 'react';
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  Settings,
  Download,
  Filter,
  Calendar
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const navigationItems = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  { id: 'users', label: 'Users', icon: Users },
  { id: 'sales', label: 'Sales', icon: PieChart },
];

const actions = [
  { id: 'filter', label: 'Filters', icon: Filter },
  { id: 'export', label: 'Export', icon: Download },
  { id: 'settings', label: 'Settings', icon: Settings }
];

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 h-full shadow-lg border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">DataViz</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Analytics Dashboard</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <nav className="p-4 space-y-2 flex-1">
          <div className="mb-6">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3">
              Navigation
            </h3>
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeView === item.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mb-6">
            <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3">
              Actions
            </h3>
            {actions.map((action) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={action.id}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{action.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Profile Section - Fixed at bottom with black background */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <div className="flex items-center space-x-3 p-3 bg-black rounded-lg">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-400 flex-shrink-0">
              <img 
                src="/public/My Profile.jpg" 
                alt="Aayush Sapkota"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Aayush Sapkota</p>
              <p className="text-xs text-gray-300">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};