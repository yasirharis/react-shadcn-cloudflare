import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Users,
  BarChart,
  Shield,
  Globe,
  ChevronDown,
  Play,
  GitBranch,
  Cpu,
  Network,
  Activity,
  Clock,
  MapPin,
  ShieldCheck,
  Key,
  HelpCircle,
  Sun,
  Moon,
} from "lucide-react";

function Landing() {
  const { theme, setTheme } = useTheme();
  const [logs, setLogs] = useState<string[]>([]);
  const [isDeploying, setIsDeploying] = useState(false);

  const handleDeploy = () => {
    setIsDeploying(true);
    setLogs([]);
    const steps = [
      "🔍 Detecting framework: Next.js (v14.2.3)",
      "📦 Installing dependencies... (23 packages)",
      "🏗️ Building application... (optimized)",
      "🌍 Bundling for edge deployment...",
      "🚀 Deploying to 300+ PoPs...",
      "📍 Tokyo (JP) - ✅ Live",
      "📍 London (UK) - ✅ Live",
      "📍 Virginia (US) - ✅ Live",
      "📍 São Paulo (BR) - ✅ Live",
      "✨ Deployment complete! (3.2s)",
      "🔗 Preview URL: https://preview-abc123.paasify.dev",
    ];
    steps.forEach((step, i) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (i === steps.length - 1) setIsDeploying(false);
      }, (i + 1) * 400);
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Navigation Bar (Concierge Bar) */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <span className="text-xl font-bold">PaaSify</span>
            <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary">
                  Product <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Features</DropdownMenuItem>
                  <DropdownMenuItem>Integrations</DropdownMenuItem>
                  <DropdownMenuItem>Changelog</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#docs" className="hover:text-primary">Docs</a>
              <a href="#enterprise" className="hover:text-primary">Enterprise</a>
              <a href="#pricing" className="hover:text-primary">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 mr-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="text-xs">Used by 500+ Engineering Teams</Badge>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">Sign In</Button>
            <Button variant="default" size="sm" className="hidden md:inline-flex">Contact Sales</Button>
            <Button variant="outline" size="sm">Start Free Trial</Button>
          </div>
        </div>
      </header>

      {/* Outcome-First Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">🚀 Now in beta</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Ship to the Global Edge in <span className="text-primary">&lt; 5 Seconds</span>. Zero Infrastructure to Manage.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                Connect your repository. We handle auto-scaling, SSL, DDoS protection, and global routing—so your team focuses on code, not YAML.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  Start free trial <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">Learn more</Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg border bg-muted/50 p-4 shadow-2xl">
                <div className="flex items-center gap-2 border-b pb-2 text-sm font-mono">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-muted-foreground">terminal — git push</span>
                </div>
                <div className="mt-4 space-y-1 font-mono text-xs sm:text-sm">
                  <p className="text-green-400">$ git push paasify main</p>
                  <p className="text-blue-400">🔍 Detecting framework... Next.js</p>
                  <p className="text-yellow-400">🏗️ Building... (optimized)</p>
                  <p className="text-purple-400">🌍 Deploying to 300+ PoPs...</p>
                  <p className="text-green-400">✅ Live on Tokyo, London, Virginia, São Paulo</p>
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="h-4 w-4" />
                    <span className="font-bold">Deploy time: 3.2s</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-full bg-primary/10 p-2 backdrop-blur">
                <Badge variant="default" className="gap-1">
                  <Globe className="h-3 w-3" /> 300+ PoPs
                </Badge>
              </div>
            </div>
          </div>
          {/* Social Proof Bar */}
          <div className="mt-16 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">Trusted by leading engineering teams</p>
            <div className="mt-4 flex flex-wrap justify-center gap-8 opacity-70 grayscale">
              <span className="text-xl font-semibold">Vercel</span>
              <span className="text-xl font-semibold">Netlify</span>
              <span className="text-xl font-semibold">Cloudflare</span>
              <span className="text-xl font-semibold">AWS</span>
              <span className="text-xl font-semibold">Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Velocity Metric Strip */}
      <section className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">99.99%</p>
              <p className="text-sm text-muted-foreground">Uptime SLA</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">&lt; 5s</p>
              <p className="text-sm text-muted-foreground">Average Deploy Time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">300+</p>
              <p className="text-sm text-muted-foreground">Edge Locations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Ops Tickets Related to Scaling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Compatibility */}
      <section className="border-t py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bring Your Own Stack. We Deploy It.</h2>
            <p className="mt-2 text-muted-foreground">
              Whether it's a static site, a Next.js SSR app, or a Rust-based API—we detect the entry point and build it instantly.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {["Next.js", "React", "Vue", "Svelte", "Node.js", "Python", "Go", "Rust", "PHP", "Docker", "WASM", "Angular"].map(
              (tech) => (
                <div key={tech} className="flex items-center justify-center rounded-lg border bg-muted/30 p-4 text-sm font-medium">
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Three Pillars of Edge Excellence */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Three Pillars of Edge Excellence</h2>
            <p className="mt-2 text-muted-foreground">Architectural advantages that set us apart.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-primary" />
                <CardTitle>Instant Edge Network</CardTitle>
                <CardDescription>
                  Global cache invalidation and smart routing ensure sub-50ms latency worldwide.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <GitBranch className="h-8 w-8 text-primary" />
                <CardTitle>Git-Native Workflows</CardTitle>
                <CardDescription>
                  Auto-preview deployments for every PR, with shareable URLs for instant stakeholder feedback.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle>Auto-Healing Infrastructure</CardTitle>
                <CardDescription>
                  Zero-configuration vertical/horizontal scaling. If a pod crashes, it reboots instantly without a human pager.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Product Walkthrough (Sandbox) */}
      <section className="border-t py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Try It Now — Deploy in Seconds</h2>
            <p className="mt-2 text-muted-foreground">Experience the developer experience without signing up.</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-lg border bg-muted/30 p-6">
              <div className="flex flex-wrap items-end gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium">Framework</label>
                </div>
                <Button onClick={handleDeploy} disabled={isDeploying} className="gap-2">
                  {isDeploying ? "Deploying..." : "Deploy"} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4 rounded-lg border bg-black/90 p-4 font-mono text-xs text-green-400 h-48 overflow-y-auto">
                {logs.length === 0 ? (
                  <p className="text-muted-foreground">Select a framework and click Deploy to see the live log stream.</p>
                ) : (
                  logs.map((log, i) => <p key={i}>{log}</p>)
                )}
                {isDeploying && <p className="animate-pulse">⏳ Processing...</p>}
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>💡 Toggle to see the complexity you're avoiding: <span className="cursor-pointer underline">Kubernetes YAML</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Security & Compliance */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Secure by Default. Compliant by Design.</h2>
            <p className="mt-2 text-muted-foreground">Enterprise-grade security built-in from day one.</p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Badge variant="outline" className="text-lg py-2 px-4">SOC2 Type II</Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">GDPR</Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">HIPAA</Badge>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Network className="h-6 w-6 text-primary" />
                <CardTitle className="text-base">Private Networking</CardTitle>
                <CardDescription>VPC Peering & dedicated network isolation.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Cloud className="h-6 w-6 text-primary" />
                <CardTitle className="text-base">Bring Your Own Cloud</CardTitle>
                <CardDescription>Deploy on your own AWS/GCP/Azure account.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-6 w-6 text-primary" />
                <CardTitle className="text-base">Granular RBAC + SSO</CardTitle>
                <CardDescription>SAML/OIDC integration with role-based access.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Key className="h-6 w-6 text-primary" />
                <CardTitle className="text-base">Secrets Management</CardTitle>
                <CardDescription>Integrates with Vault & AWS Secrets Manager.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Deep Observability & Debugging */}
      <section className="border-t py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Full Telemetry, Zero Setup.</h2>
            <p className="mt-2 text-muted-foreground">Get real-time logs, CPU/Memory, and edge latency heatmaps instantly.</p>
          </div>
          <div className="mt-12 rounded-lg border bg-muted/30 p-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-background p-4 text-center">
                <Activity className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-2 text-sm font-medium">Request Logs</p>
              </div>
              <div className="rounded-lg bg-background p-4 text-center">
                <Cpu className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-2 text-sm font-medium">CPU / Memory</p>
              </div>
              <div className="rounded-lg bg-background p-4 text-center">
                <MapPin className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-2 text-sm font-medium">Edge Latency Heatmap</p>
              </div>
              <div className="rounded-lg bg-background p-4 text-center">
                <Clock className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-2 text-sm font-medium">Instant Rollback</p>
              </div>
            </div>
            <div className="mt-6 text-sm text-muted-foreground text-center">
              <p>🔍 Flame graph profiling for production debugging without logging into a cluster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTO-to-CTO Testimonials */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Engineering Leaders Say</h2>
            <p className="mt-2 text-muted-foreground">Real results from real teams.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">👤</div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">VP of Engineering, Fortune 500</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  “We reduced our cloud infrastructure spend by 40% and cut our deploy-to-production time from 12 minutes to 4 seconds. Our developers haven't had to write a single Terraform script since.”
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0">Read full case study →</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">👤</div>
                  <div>
                    <p className="font-semibold">Mike Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, Stellar</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  “PaaSify gave us global edge deployment with zero ops overhead. The auto-scaling handled a 10x traffic spike during our product launch without a single alert.”
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0">Read full case study →</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparent (But Enterprise-Ready) Pricing */}
      <section id="pricing" className="border-t py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pricing that scales with you</h2>
            <p className="mt-2 text-muted-foreground">Simple, transparent, and enterprise-ready.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Hobby</CardTitle>
                <CardDescription>For side projects and prototyping</CardDescription>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> 2 projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> 1GB storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Community support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Get started</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Badge className="mb-2 self-start">Most popular</Badge>
                <CardTitle>Team</CardTitle>
                <CardDescription>For growing teams</CardDescription>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground">/seat/mo</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Unlimited projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> 50GB storage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Priority support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Advanced analytics
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start free trial</Button>
              </CardFooter>
            </Card>
            <Card className="border-2 border-primary shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                Enterprise
              </div>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Dedicated environment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Custom SLAs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> Dedicated support channel
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" /> On-premise deployment options
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="default">Book an Architecture Review</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem & Integrations */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Fits Seamlessly Into Your Current Toolchain</h2>
            <p className="mt-2 text-muted-foreground">Integrates with the tools you already use.</p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-lg font-medium">
              <HelpCircle className="h-6 w-6" /> GitHub
            </div>
            <div className="flex items-center gap-2 text-lg font-medium">
              <HelpCircle className="h-6 w-6" /> GitLab
            </div>
            <div className="flex items-center gap-2 text-lg font-medium">
              <HelpCircle className="h-6 w-6" /> Slack
            </div>
            <div className="flex items-center gap-2 text-lg font-medium">
              <BarChart className="h-6 w-6" /> Datadog
            </div>
            <div className="flex items-center gap-2 text-lg font-medium">
              <ShieldCheck className="h-6 w-6" /> Auth0
            </div>
          </div>
        </div>
      </section>

      {/* Closing Gap Final CTA */}
      <section className="border-t py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to ship at the edge?</h2>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Join thousands of developers and enterprises already deploying with PaaSify.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              Start Your Free Enterprise Trial <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Play className="h-4 w-4" /> Watch a 5-Minute Demo with an Engineer
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Badge variant="outline" className="text-xs">No Ops overhead</Badge>
            <Badge variant="outline" className="text-xs">Cancel anytime</Badge>
            <Badge variant="outline" className="text-xs">Enterprise data never leaves your VPC</Badge>
          </div>
        </div>
      </section>

      {/* FAQ (Optional but kept for completeness) */}
      <section className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
            <p className="mt-2 text-muted-foreground">Everything you need to know about our platform.</p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is PaaSify?</AccordionTrigger>
                <AccordionContent>
                  PaaSify is a platform as a service that lets you deploy and scale applications without managing servers. We handle infrastructure, security, and updates so you can focus on writing code.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does the free trial work?</AccordionTrigger>
                <AccordionContent>
                  You get 14 days of full access to our Team plan with no credit card required. After the trial, you can choose a plan that fits your needs or continue with the free Hobby plan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I upgrade or downgrade anytime?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can change your subscription at any time. Upgrades take effect immediately, and downgrades will apply at the next billing cycle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We are SOC2 compliant and use end‑to‑end encryption for all data. We also offer fine‑grained access controls and audit logs to ensure your data is safe.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PaaSify. All rights reserved.
          </span>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;