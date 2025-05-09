
import React from "react";
import StatCard from "./stat-card";

const StatsSection: React.FC = () => {
  return (
    <section className="mb-24">
      <div className="flex flex-col md:flex-row gap-4">
        <StatCard 
          number="12,510" 
          description={
            <>
              Minutes Processed<br/>
              not hours.
            </>
          }
        />
        <StatCard 
          number="99 %" 
          description={
            <>
              AI-powered pis-<br/>
              cision for transcripts
            </>
          }
        />
        <StatCard 
          number="961" 
          description={
            <>
              Multi-language<br/>
              Support for over 5+<br/>
              languages worldwide
            </>
          }
        />
      </div>
    </section>
  );
};

export default StatsSection;
