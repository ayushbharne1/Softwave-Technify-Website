import React from "react";
import { ProjectCard } from "./ProjectCard";

export const PopularProjects = () => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-4">POPULAR PROJECTS</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectCard
          isLarge
          title="Tide"
          subtitle="Business Account"
          amount="350"
          logo={<span className="text-white text-xl font-bold">tide</span>}
          category="business-account"
          id="tide-business-account"
        />

        <ProjectCard
          isLarge
          title="Bajaj EMI Card"
          subtitle="BNPL"
          amount="220"
          logo={
            <span className="text-white text-xs font-bold text-center leading-4">
              BAJAJ <br /> FINSERV
            </span>
          }
          category="bnpl"
          id="bajaj-emi-card"
        />

        <ProjectCard
          isLarge
          title="Paytm Postpaid"
          subtitle="BNPL"
          amount="180"
          logo={
            <span className="text-white text-sm font-bold text-center leading-4">
              Paytm <br /> Postpaid
            </span>
          }
          category="bnpl"
          id="paytm-postpaid"
        />
      </div>
    </div>
  );
};
