import Hero from "@/components/home/Hero";
import BusinessChallenges from "@/components/home/BusinessChallenges";
import PlatformFeatures from "@/components/home/PlatformFeatures";
import AISearchVisibility from "@/components/home/AISearchVisibility";
import AIContentCreation from "@/components/home/AIContentCreation";
import SocialMediaAutomation from "@/components/home/SocialMediaAutomation";
import HowItWorks from "@/components/home/HowItWorks";
import PlatformIntegrations from "@/components/home/PlatformIntegrations";
import ProvenImpact from "@/components/home/ProvenImpact";
import WhoItsFor from "@/components/home/WhoItsFor";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero /> {/*  Smarter Marketing, Less Effort */}
      <BusinessChallenges /> {/*  A CONNECTED APPROACH */}
      <PlatformFeatures /> {/*  OMNICHANNEL PRESENCE */}
      <AISearchVisibility /> {/*  AI SEARCH READY */}
      <AIContentCreation /> {/* AI CONTENT CREATION  */}
      <SocialMediaAutomation /> {/* SOCIAL PRESENCE */}
      <HowItWorks />       {/* EASY AUTOMATION  */}
      <PlatformIntegrations /> {/* SEAMLESS INTEGRATION  */}
      <ProvenImpact /> {/* PROVEN IMPACT  */}
      <WhoItsFor /> {/* WHO IT'S FOR  */}
      <Pricing /> {/* TRANSPARENT PLANS  */}
      <FAQ /> {/*  NEED HELP? */}
      <CTA /> {/* CTA  */}
    </main>
  );
}
