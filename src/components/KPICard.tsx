import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingBag } from 'lucide-react';
import { KPICard as KPICardType } from '../types/dashboard';

interface KPICardProps {
  data: KPICardType;
}

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  ShoppingBag
};

export const KPICard: React.FC<KPICardProps> = ({ data }) => {
  const IconComponent = iconMap[data.icon as keyof typeof iconMap] || TrendingUp;
  const isPositive = data.changeType === 'increase';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${data.color}`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-medium ${
          isPositive 
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
            : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span>{Math.abs(data.change)}%</span>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
          {data.title}
        </h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {data.value}
        </p>
      </div>
    </div>
  );
};