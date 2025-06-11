export interface KPICard {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  color: string;
}

export interface ChartData {
  name: string;
  value: number;
  revenue?: number;
  users?: number;
  sales?: number;
  growth?: number;
  date?: string;
  category?: string;
}

export interface TimeRange {
  label: string;
  value: string;
  days: number;
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}