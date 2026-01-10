import { TrendingUp, Eye, MousePointer, Users } from "lucide-react";

const metrics = [
  { label: "Total Sent", value: "1.2M", change: "+12%", icon: TrendingUp },
  { label: "Open Rate", value: "42.8%", change: "+5.2%", icon: Eye },
  { label: "Click Rate", value: "18.3%", change: "+2.1%", icon: MousePointer },
  { label: "Engaged Users", value: "24.5K", change: "+8.7%", icon: Users },
];

const AnalyticsSection = () => {
  return (
    <section id="analytics" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Analytics & Insights</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Data-driven decisions, <span className="gradient-text">real-time results</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Track every campaign with precision. Understand what works, optimize what doesn't, 
              and watch your engagement metrics soar.
            </p>
            
            {/* Mini feature list */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">Live campaign monitoring</span>
                  <p className="text-sm text-muted-foreground">Watch engagement unfold in real-time</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">Cohort analysis</span>
                  <p className="text-sm text-muted-foreground">Understand user behavior over time</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">Custom reporting</span>
                  <p className="text-sm text-muted-foreground">Export data and build custom dashboards</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Right - Analytics preview card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            
            <div className="relative p-6 md:p-8 rounded-3xl card-elevated border border-border/50">
              {/* Chart header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-foreground">Campaign Performance</h3>
                  <p className="text-sm text-muted-foreground">Last 30 days</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  +23% vs last period
                </div>
              </div>
              
              {/* Fake chart visualization */}
              <div className="h-48 mb-6 flex items-end justify-between gap-2">
                {[35, 45, 30, 55, 65, 50, 75, 85, 70, 90, 80, 95].map((height, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-sm transition-all duration-300 hover:from-primary/30 hover:to-primary"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              
              {/* Metrics row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="text-center p-3 rounded-xl bg-secondary/50">
                    <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                    <div className="text-xs text-primary font-medium mt-1">{metric.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
