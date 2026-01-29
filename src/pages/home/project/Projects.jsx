import React from "react";
import { PopularProjects } from "./PopularProjects";
import { AllProjects } from "./AllProjects";

export { PopularProjects, AllProjects };

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <PopularProjects />
      <AllProjects />
    </div>
  );
}
