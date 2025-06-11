import { ChartData, KPICard, TimeRange, FilterOption } from '../types/dashboard';

export const kpiData: KPICard[] = [
  {
    title: 'Total Revenue',
    value: '$124,592',
    change: 12.5,
    changeType: 'increase',
    icon: 'DollarSign',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Active Users',
    value: '12,847',
    change: 8.2,
    changeType: 'increase',
    icon: 'Users',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    change: -2.1,
    changeType: 'decrease',
    icon: 'TrendingUp',
    color: 'from-amber-500 to-amber-600'
  },
  {
    title: 'Total Orders',
    value: '1,429',
    change: 15.3,
    changeType: 'increase',
    icon: 'ShoppingBag',
    color: 'from-purple-500 to-purple-600'
  }
];

export const revenueData: ChartData[] = [
  { name: 'Jan', revenue: 12000, users: 800, sales: 45 },
  { name: 'Feb', revenue: 15000, users: 1200, sales: 52 },
  { name: 'Mar', revenue: 18000, users: 1400, sales: 61 },
  { name: 'Apr', revenue: 22000, users: 1800, sales: 68 },
  { name: 'May', revenue: 25000, users: 2100, sales: 75 },
  { name: 'Jun', revenue: 28000, users: 2400, sales: 82 },
  { name: 'Jul', revenue: 32000, users: 2800, sales: 89 },
  { name: 'Aug', revenue: 35000, users: 3200, sales: 95 },
  { name: 'Sep', revenue: 38000, users: 3600, sales: 102 },
  { name: 'Oct', revenue: 42000, users: 4000, sales: 108 },
  { name: 'Nov', revenue: 45000, users: 4400, sales: 115 },
  { name: 'Dec', revenue: 48000, users: 4800, sales: 122 }
];

export const categoryData: ChartData[] = [
  { name: 'Electronics', value: 35, sales: 2450 },
  { name: 'Clothing', value: 28, sales: 1960 },
  { name: 'Home & Garden', value: 15, sales: 1050 },
  { name: 'Sports', value: 12, sales: 840 },
  { name: 'Books', value: 10, sales: 700 }
];

export const growthData: ChartData[] = [
  { name: 'Q1 2023', growth: 15, value: 15 },
  { name: 'Q2 2023', growth: 22, value: 22 },
  { name: 'Q3 2023', growth: 18, value: 18 },
  { name: 'Q4 2023', growth: 28, value: 28 },
  { name: 'Q1 2024', growth: 35, value: 35 },
  { name: 'Q2 2024', growth: 42, value: 42 }
];

export const dailyActivityData: ChartData[] = Array.from({ length: 30 }, (_, i) => ({
  name: `Day ${i + 1}`,
  value: Math.floor(Math.random() * 100) + 50,
  users: Math.floor(Math.random() * 500) + 200,
  date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
}));

export const timeRanges: TimeRange[] = [
  { label: 'Last 7 days', value: '7d', days: 7 },
  { label: 'Last 30 days', value: '30d', days: 30 },
  { label: 'Last 90 days', value: '90d', days: 90 },
  { label: 'Last year', value: '1y', days: 365 }
];

export const filterOptions: FilterOption[] = [
  { label: 'All Categories', value: 'all', count: 145 },
  { label: 'Electronics', value: 'electronics', count: 35 },
  { label: 'Clothing', value: 'clothing', count: 28 },
  { label: 'Home & Garden', value: 'home', count: 15 },
  { label: 'Sports', value: 'sports', count: 12 }
];