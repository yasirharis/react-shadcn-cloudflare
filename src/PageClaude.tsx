"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, Check, Menu, Zap, GitBranch, Gauge, Bell, Lock, Waypoints } from "lucide-react";

const nav = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const features = [
  { icon: Waypoints, title: "Pipeline mapping", desc: "See every deploy path from commit to production, auto-drawn as it happens." },
  { icon: Gauge, title: "Latency budgets", desc: "Set a budget per route. Waypoint flags the commit that blew it, not just the symptom." },
  { icon: GitBranch, title: "Rollback lineage", desc: "Every rollback keeps its reason attached, so the next person isn't guessing." },
  { icon: Bell, title: "Signal routing", desc: "Alerts go to the owner of the code that broke, worked out automatically from blame." },
  { icon: Lock, title: "Change gates", desc: "Require a second pair of eyes on anything touching billing, auth, or payouts." },
  { icon: Zap, title: "Instant replay", desc: "Re-run any deploy against last week's traffic before it ever reaches real users." },
];

const tiers = [
  {
    name: "Trail",
    monthly: 0,
    yearly: 0,
    desc: "For a single service finding its footing.",
    features: ["1 pipeline", "7-day history", "Community routing", "Email alerts"],
    cta: "Start free",
  },
  {
    name: "Waypoint",
    monthly: 48,
    yearly: 38,
    desc: "For teams shipping several times a day.",
    features: ["Unlimited pipelines", "1-year history", "Owner-based routing", "Change gates", "Replay against live traffic"],
    cta: "Start trial",
    highlighted: true,
  },
  {
    name: "Summit",
    monthly: 129,
    yearly: 103,
    desc: "For orgs with compliance on the line.",
    features: ["Everything in Waypoint", "SSO + audit export", "Custom retention", "Dedicated routing rules", "Priority response"],
    cta: "Talk to us",
  },
];

const faqs = [
  { q: "What counts as a pipeline?", a: "Any path from a commit to a running service. Most teams start with one per repo, then split by environment as they grow." },
  { q: "Does the free tier expire?", a: "No. Trail stays free for one pipeline indefinitely. You'll only be asked to upgrade when you add a second." },
  { q: "Can I self-host?", a: "Summit includes a self-hosted option with the same feature set as our cloud, deployed into your own VPC." },
  { q: "How does owner-based routing work?", a: "We resolve blame on the offending change and route the alert to that author's on-call channel, falling back to the service owner if they're unreachable." },
  { q: "Is there a yearly discount?", a: "Yes, paying yearly saves roughly 20% on both paid tiers, reflected automatically in the toggle above." },
];

export default function Page() {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#EDEFF4] font-sans selection:bg-[#FF8A3D] selection:text-[#0B0E14]">
      <div className="flex">
        <aside className="hidden lg:flex flex-col w-60 shrink-0 h-screen sticky top-0 border-r border-white/10 px-6 py-8">
          <a href="#overview" className="flex items-center gap-2 mb-10">
            <span className="h-6 w-6 rounded-sm bg-[#FF8A3D]" />
            <span className="font-[Space_Grotesk] text-lg tracking-tight">Waypoint</span>
          </a>
          <nav className="flex flex-col gap-1 text-sm">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-md px-3 py-2 text-[#8B93A7] hover:text-[#EDEFF4] hover:bg-white/5 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <Separator className="my-6 bg-white/10" />
          <div className="mt-auto flex flex-col gap-3 text-xs text-[#8B93A7] font-mono">
            <span>v2.4 · deployed 3m ago</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3DDC97]" /> all systems normal
            </span>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0B0E14]/90 backdrop-blur">
            <a href="#overview" className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-sm bg-[#FF8A3D]" />
              <span className="font-[Space_Grotesk] text-base">Waypoint</span>
            </a>
            <Sheet>
              <SheetTrigger>
                <Button variant="ghost" size="icon" className="text-[#EDEFF4]">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0B0E14] border-white/10 text-[#EDEFF4]">
                <nav className="flex flex-col gap-2 mt-10">
                  {nav.map((n) => (
                    <a key={n.href} href={n.href} className="rounded-md px-3 py-3 text-sm hover:bg-white/5">
                      {n.label}
                    </a>
                  ))}
                  <Button className="mt-4 bg-[#FF8A3D] text-[#0B0E14] hover:bg-[#FF8A3D]/90">Start free</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </header>

          <main>
            <section id="overview" className="relative px-6 sm:px-10 lg:px-16 pt-16 pb-24 overflow-hidden">
              <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#FF8A3D]/10 blur-3xl" />
              <Badge variant="outline" className="border-[#FF8A3D]/40 text-[#FF8A3D] font-mono text-xs mb-6">
                now tracing rollbacks, not just deploys
              </Badge>
              <h1 className="font-[Space_Grotesk] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-2xl">
                Know which commit broke prod before your on-call does.
              </h1>
              <p className="mt-6 max-w-xl text-[#8B93A7] text-base sm:text-lg leading-relaxed">
                Waypoint maps every deploy from commit to production, budgets latency per route, and routes the alert to whoever's change actually caused it.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-[#FF8A3D] text-[#0B0E14] hover:bg-[#FF8A3D]/90">
                  Start free <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/15 text-[#EDEFF4] hover:bg-white/5">
                  View a live pipeline
                </Button>
              </div>

              <Card className="mt-14 bg-[#11151F] border-white/10 p-5 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
                <div className="flex items-center gap-2 text-[#8B93A7] mb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3DDC97]" />
                  <span className="ml-2">checkout-service — deploy #482</span>
                </div>
                <div className="space-y-1.5 text-[#8B93A7]">
                  <div><span className="text-[#3DDC97]">✓</span> commit a3f9c1 · build passed · 41s</div>
                  <div><span className="text-[#3DDC97]">✓</span> canary 5% · p99 214ms · within budget</div>
                  <div><span className="text-[#FF8A3D]">▲</span> p99 rising on /checkout · 312ms · budget 250ms</div>
                  <div className="text-[#EDEFF4]">→ routed to @priya, last touched payment step</div>
                </div>
              </Card>
            </section>

            <Separator className="bg-white/10" />

            <section id="features" className="px-6 sm:px-10 lg:px-16 py-24">
              <div className="max-w-xl mb-14">
                <span className="font-mono text-xs text-[#FF8A3D]">what it does</span>
                <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl mt-3 tracking-tight">
                  Built for the moment something goes wrong.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((f) => (
                  <Card key={f.title} className="bg-[#11151F] border-white/10 p-6 hover:border-[#FF8A3D]/40 transition-colors">
                    <f.icon className="h-5 w-5 text-[#FF8A3D] mb-4" />
                    <h3 className="font-medium text-[#EDEFF4] mb-2">{f.title}</h3>
                    <p className="text-sm text-[#8B93A7] leading-relaxed">{f.desc}</p>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="bg-white/10" />

            <section id="pricing" className="px-6 sm:px-10 lg:px-16 py-24">
              <div className="flex flex-col items-center text-center mb-12">
                <span className="font-mono text-xs text-[#FF8A3D]">pricing</span>
                <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl mt-3 tracking-tight">
                  Pay for pipelines, not seats.
                </h2>
                <div className="flex items-center gap-3 mt-8 font-mono text-sm">
                  <span className={!yearly ? "text-[#EDEFF4]" : "text-[#8B93A7]"}>monthly</span>
                  <Switch checked={yearly} onCheckedChange={setYearly} />
                  <span className={yearly ? "text-[#EDEFF4]" : "text-[#8B93A7]"}>yearly</span>
                  <Badge variant="outline" className="border-[#3DDC97]/40 text-[#3DDC97] ml-1">save 20%</Badge>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {tiers.map((t) => (
                  <Card
                    key={t.name}
                    className={`p-7 flex flex-col ${
                      t.highlighted
                        ? "bg-[#161B26] border-[#FF8A3D]/50 lg:-translate-y-3 shadow-xl shadow-[#FF8A3D]/5"
                        : "bg-[#11151F] border-white/10"
                    }`}
                  >
                    {t.highlighted && (
                      <Badge className="w-fit mb-4 bg-[#FF8A3D] text-[#0B0E14]">most teams pick this</Badge>
                    )}
                    <h3 className="font-[Space_Grotesk] text-xl">{t.name}</h3>
                    <p className="text-sm text-[#8B93A7] mt-1">{t.desc}</p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl font-[Space_Grotesk]">
                        ${yearly ? t.yearly : t.monthly}
                      </span>
                      <span className="text-[#8B93A7] text-sm">/mo</span>
                    </div>
                    <ul className="mt-6 space-y-3 flex-1">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[#C7CBD6]">
                          <Check className="h-4 w-4 text-[#3DDC97] mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`mt-8 ${
                        t.highlighted
                          ? "bg-[#FF8A3D] text-[#0B0E14] hover:bg-[#FF8A3D]/90"
                          : "bg-white/5 text-[#EDEFF4] hover:bg-white/10"
                      }`}
                    >
                      {t.cta}
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="bg-white/10" />

            <section id="faq" className="px-6 sm:px-10 lg:px-16 py-24">
              <div className="max-w-xl mb-10">
                <span className="font-mono text-xs text-[#FF8A3D]">faq</span>
                <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl mt-3 tracking-tight">Questions, answered.</h2>
              </div>
              <Accordion className="max-w-2xl">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                    <AccordionTrigger className="text-left hover:no-underline">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-[#8B93A7]">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <Separator className="bg-white/10" />

            <section className="px-6 sm:px-10 lg:px-16 py-24 text-center">
              <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl tracking-tight max-w-lg mx-auto">
                Trace your next deploy in under five minutes.
              </h2>
              <Button size="lg" className="mt-8 bg-[#FF8A3D] text-[#0B0E14] hover:bg-[#FF8A3D]/90">
                Start free <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </section>

            <footer className="px-6 sm:px-10 lg:px-16 py-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#8B93A7] font-mono">
              <span>© {new Date().getFullYear()} Waypoint</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#EDEFF4]">Privacy</a>
                <a href="#" className="hover:text-[#EDEFF4]">Terms</a>
                <a href="#" className="hover:text-[#EDEFF4]">Status</a>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}