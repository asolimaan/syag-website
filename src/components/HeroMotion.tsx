import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function HeroMotion() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-navy/10 bg-white/80 p-10 shadow-soft backdrop-blur">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan/30 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-electric/30 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
          Institutional Research
        </div>
        <h1 className="text-balance text-4xl font-bold leading-tight text-navy md:text-6xl">
          Market intelligence built for modern investment teams.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate md:text-lg">
          Capture company disclosures, earnings insights, and peer analytics in one place.
          Stay ahead with a research platform designed for speed and clarity.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="accent">Request a demo</Button>
          <Button variant="outline">View platform</Button>
        </div>
      </motion.div>
    </div>
  );
}
