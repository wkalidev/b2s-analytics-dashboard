import React, { useState, useEffect } from 'react';

interface Metrics {
  totalVolume: number;
  activeUsers: number;
  totalStaked: number;
  transactions24h: number;
}

interface AnalyticsDashboardProps {
  contractAddress: string;
  apiEndpoint?: string;
  refreshInterval?: number;
  theme?: 'light' | 'dark';
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  contractAddress,
  apiEndpoint = 'https://api.b2s.xyz',
  refreshInterval = 30000,
  theme = 'dark',
}) => {
  const [metrics, setMetrics] = useState<Metrics>({
    totalVolume: 0,
    activeUsers: 0,
    totalStaked: 0,
    transactions24h: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, refreshInterval);
    return () => clearInterval(interval);
  }, [contractAddress, refreshInterval]);

  const fetchMetrics = async () => {
    try {
      // Mock data for now
      setMetrics({
        totalVolume: 15200000,
        activeUsers: 892,
        totalStaked: 2300000,
        transactions24h: 1247,
      });
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading analytics...</div>;
  }

  return (
    <div className={`analytics-dashboard ${theme}`}>
      <div className="dashboard-header">
        <h1>📊 B2S Analytics Dashboard</h1>
        <p>Real-time metrics and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <MetricCard
          title="Total Volume"
          value={`${(metrics.totalVolume / 1000000).toFixed(1)}M`}
          unit="$B2S"
          change="+12.5%"
          icon="📈"
          theme={theme}
        />
        <MetricCard
          title="Active Users"
          value={metrics.activeUsers.toString()}
          unit="wallets"
          change="+8.3%"
          icon="👥"
          theme={theme}
        />
        <MetricCard
          title="Total Staked"
          value={`${(metrics.totalStaked / 1000000).toFixed(1)}M`}
          unit="$B2S"
          change="+15.2%"
          icon="🔒"
          theme={theme}
        />
        <MetricCard
          title="24h Transactions"
          value={metrics.transactions24h.toString()}
          unit="txns"
          change="+5.7%"
          icon="⚡"
          theme={theme}
        />
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card">
          <h3>📈 Volume Over Time</h3>
          <div className="chart-placeholder">
            <p>Volume chart will be rendered here</p>
            <small>Using Recharts library</small>
          </div>
        </div>

        <div className="chart-card">
          <h3>👥 User Growth</h3>
          <div className="chart-placeholder">
            <p>User growth chart will be rendered here</p>
            <small>Line chart with trend analysis</small>
          </div>
        </div>

        <div className="chart-card">
          <h3>🥧 Token Distribution</h3>
          <div className="chart-placeholder">
            <p>Distribution pie chart will be rendered here</p>
            <small>Top holders breakdown</small>
          </div>
        </div>
      </div>

      <style jsx>{`
        .analytics-dashboard {
          padding: 20px;
          max-width: 1400px;
          margin: 0 auto;
          background: ${theme === 'dark' ? '#0f172a' : '#ffffff'};
          color: ${theme === 'dark' ? '#f1f5f9' : '#0f172a'};
          min-height: 100vh;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .dashboard-header h1 {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .charts-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 20px;
        }

        .chart-card {
          background: ${theme === 'dark' ? '#1e293b' : '#f8fafc'};
          padding: 24px;
          border-radius: 12px;
          border: 1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'};
        }

        .chart-card h3 {
          margin-bottom: 20px;
          font-size: 18px;
        }

        .chart-placeholder {
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: ${theme === 'dark' ? '#0f172a' : '#ffffff'};
          border-radius: 8px;
          border: 2px dashed ${theme === 'dark' ? '#334155' : '#cbd5e1'};
        }

        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  change: string;
  icon: string;
  theme: 'light' | 'dark';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, unit, change, icon, theme }) => {
  const isPositive = change.startsWith('+');

  return (
    <div className={`metric-card ${theme}`}>
      <div className="metric-header">
        <span className="metric-icon">{icon}</span>
        <span className="metric-title">{title}</span>
      </div>
      <div className="metric-value">
        {value} <span className="metric-unit">{unit}</span>
      </div>
      <div className={`metric-change ${isPositive ? 'positive' : 'negative'}`}>
        {change} vs last period
      </div>

      <style jsx>{`
        .metric-card {
          background: ${theme === 'dark' ? '#1e293b' : '#f8fafc'};
          padding: 24px;
          border-radius: 12px;
          border: 1px solid ${theme === 'dark' ? '#334155' : '#e2e8f0'};
          transition: transform 0.2s;
        }

        .metric-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }

        .metric-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          opacity: 0.8;
        }

        .metric-icon {
          font-size: 24px;
        }

        .metric-title {
          font-size: 14px;
          font-weight: 500;
        }

        .metric-value {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .metric-unit {
          font-size: 16px;
          opacity: 0.6;
          font-weight: normal;
        }

        .metric-change {
          font-size: 14px;
        }

        .metric-change.positive {
          color: #10b981;
        }

        .metric-change.negative {
          color: #ef4444;
        }
      `}</style>
    </div>
  );
};