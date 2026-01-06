import React from "react";
import { AboutHero } from "../components/AboutHero";
import { AboutStats } from "../components/AboutStats";
import { Timeline } from "../components/Timeline";
import { TeamGrid } from "../components/TeamGrid";
import { Certifications } from "../components/Certifications";
import { AboutCta } from "../components/AboutCta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-[--color-heading] mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                Coarse Construction and Services Limited (CCSL) provides construction, project management and building services focused on disciplined delivery, safety and quality. We partner with developers and organizations to deliver buildings that meet commercial and operational goals.
              </p>
              <p className="text-gray-600">
                Our approach is rooted in clear planning, transparent communication and strong operational controls to minimize risk and deliver to schedule.
              </p>
            </div>
            <aside>
              <AboutStats />
            </aside>
          </div>
        </div>
      </section>

      <Timeline />
      <TeamGrid />
      <Certifications />
      <AboutCta />
    </>
  );
}


