"use client"

import * as React from "react"
import { useState, useRef } from "react"
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Alert, AlertDescription, AlertTitle,
} from "@/components/ui/alert"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible, CollapsibleContent, CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
} from "@/components/ui/command"
import {
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger,
  ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader,
  DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter,
  DrawerHeader, DrawerTitle, DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  HoverCard, HoverCardContent, HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import {
  Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Pagination, PaginationContent, PaginationEllipsis, PaginationItem,
  PaginationLink, PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ResizableHandle, ResizablePanel, ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet"
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"
import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import { toast as sonnerToast } from "sonner"
import {
  ChartContainer, ChartTooltip, ChartTooltipContent,
} from "@/components/ui/chart"
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  BarChart, Bar,
} from "recharts"
import {
  Bell, ChevronDown, ChevronRight, Circle, Cpu, FileText,
  Globe, Home, Inbox, LayoutDashboard, LogOut, Mail, Moon,
  Paperclip, Pin, Plus, Search, Send, Settings, Shield, Star,
  Sun, Trash2, TrendingUp, User, Users, Zap, Bold, Italic, Underline,
  AlignLeft, AlignCenter, AlignRight, Terminal, Check,
  MoreHorizontal, AlertTriangle, Info, Eye, EyeOff, Calendar as CalendarIcon,
} from "lucide-react"

// ── Chart data ──────────────────────────────────────────────────────────────
const areaData = [
  { month: "Jan", revenue: 4000, users: 240 },
  { month: "Feb", revenue: 3000, users: 139 },
  { month: "Mar", revenue: 6000, users: 380 },
  { month: "Apr", revenue: 8000, users: 430 },
  { month: "May", revenue: 5000, users: 290 },
  { month: "Jun", revenue: 9000, users: 490 },
]

const barData = [
  { name: "Mon", tasks: 12 },
  { name: "Tue", tasks: 19 },
  { name: "Wed", tasks: 8 },
  { name: "Thu", tasks: 24 },
  { name: "Fri", tasks: 17 },
]

const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
  users: { label: "Users", color: "hsl(var(--chart-2))" },
  tasks: { label: "Tasks", color: "hsl(var(--chart-3))" },
}

// ── Table data ───────────────────────────────────────────────────────────────
const tableData = [
  { id: "1", name: "Alice Chen", role: "Engineer", status: "Active", score: 92 },
  { id: "2", name: "Bob Martin", role: "Designer", status: "Away", score: 78 },
  { id: "3", name: "Carol Smith", role: "PM", status: "Active", score: 88 },
  { id: "4", name: "Dan Lee", role: "Engineer", status: "Offline", score: 65 },
  { id: "5", name: "Eva Torres", role: "QA", status: "Active", score: 95 },
]

// ── Messages ─────────────────────────────────────────────────────────────────
const messages = [
  { id: 1, from: "Alice", avatar: "AC", text: "Hey, did you review the PR?", time: "10:12", mine: false },
  { id: 2, from: "You", avatar: "ME", text: "Yes! Left some comments. Looks solid overall 🚀", time: "10:14", mine: true },
  { id: 3, from: "Alice", avatar: "AC", text: "Awesome, merging now. Thanks!", time: "10:15", mine: false },
]

// ── Nav items ────────────────────────────────────────────────────────────────
const sidebarNavItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Inbox, label: "Inbox", badge: 4 },
  { icon: FileText, label: "Documents" },
  { icon: Users, label: "Team" },
  { icon: Settings, label: "Settings" },
]

// ── Main App ─────────────────────────────────────────────────────────────────
export function App() {
  const [activeTab, setActiveTab] = useState("overview")
  const [darkMode, setDarkMode] = useState(false)
  const [sliderVal, setSliderVal] = useState([40])
  const [checked, setChecked] = useState(true)
  const [switchOn, setSwitchOn] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [msgInput, setMsgInput] = useState("")
  const [radio, setRadio] = useState("pro")
  const [otpVal, setOtpVal] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [tableSort, setTableSort] = useState<"asc" | "desc">("asc")
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [collapsibleOpen, setCollapsibleOpen] = useState(false)
  const [formatToggles, setFormatToggles] = useState<string[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  const sortedTable = [...tableData].sort((a, b) =>
    tableSort === "asc" ? a.score - b.score : b.score - a.score
  )

  const toggleRow = (id: string) =>
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    )

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  React.useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [])

  return (
    <SidebarProvider>
      <TooltipProvider>
        <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">

          {/* ── Sidebar ──────────────────────────────────────────────────── */}
          <Sidebar className="border-r">
            <SidebarHeader className="px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Zap className="h-4 w-4" />
                </div>
                <span className="font-semibold text-sm">Nexus OS</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarMenu>
                  {sidebarNavItems.map(({ icon: Icon, label, badge }) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton className="w-full">
                        <Icon className="h-4 w-4" />
                        <span>{label}</span>
                        {badge && (
                          <Badge variant="secondary" className="ml-auto text-xs">
                            {badge}
                          </Badge>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="px-2 pb-3">
              <HoverCard>
                <HoverCardTrigger >
                  <div className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-accent">
                    <Avatar className="h-7 w-7">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">Jane Doe</p>
                      <p className="text-xs text-muted-foreground truncate">jane@nexus.io</p>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent side="top" className="w-64">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">Jane Doe</p>
                      <p className="text-xs text-muted-foreground">Senior Product Lead · Pro Plan</p>
                      <div className="mt-2 flex gap-1">
                        <Badge variant="outline" className="text-xs">Admin</Badge>
                        <Badge variant="outline" className="text-xs">Pro</Badge>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </SidebarFooter>
          </Sidebar>

          {/* ── Main content ─────────────────────────────────────────────── */}
          <div className="flex flex-1 flex-col overflow-hidden">

            {/* ── Top bar ────────────────────────────────────────────────── */}
            <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger />
              <Separator orientation="vertical" className="h-5" />

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#"><Home className="h-3.5 w-3.5" /></BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="ml-auto flex items-center gap-2">
                {/* Command palette */}
                <Popover>
                  <PopoverTrigger >
                    <Button variant="outline" size="sm" className="gap-1.5 text-muted-foreground text-xs">
                      <Search className="h-3.5 w-3.5" />
                      Search…
                      <kbd className="ml-1 rounded bg-muted px-1 py-0.5 text-[10px]">⌘K</kbd>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-72" align="end">
                    <Command>
                      <CommandInput placeholder="Search anything…" />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Quick actions">
                          <CommandItem><Plus className="mr-2 h-3.5 w-3.5" />New document</CommandItem>
                          <CommandItem><Mail className="mr-2 h-3.5 w-3.5" />Compose message</CommandItem>
                          <CommandItem><Users className="mr-2 h-3.5 w-3.5" />Invite teammate</CommandItem>
                        </CommandGroup>
                        <CommandGroup heading="Navigation">
                          <CommandItem><LayoutDashboard className="mr-2 h-3.5 w-3.5" />Dashboard</CommandItem>
                          <CommandItem><Settings className="mr-2 h-3.5 w-3.5" />Settings</CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                {/* Notifications */}
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="ghost" size="icon" className="relative h-8 w-8">
                      <Bell className="h-4 w-4" />
                      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notifications</TooltipContent>
                </Tooltip>

                {/* Dark mode */}
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setDarkMode(!darkMode)}>
                      {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Toggle theme</TooltipContent>
                </Tooltip>

                {/* User menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant="ghost" size="sm" className="gap-1.5 h-8 px-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <ChevronDown className="h-3 w-3 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem><User className="mr-2 h-3.5 w-3.5" />Profile<DropdownMenuShortcut>⌘P</DropdownMenuShortcut></DropdownMenuItem>
                      <DropdownMenuItem><Settings className="mr-2 h-3.5 w-3.5" />Settings</DropdownMenuItem>
                      <DropdownMenuItem><Shield className="mr-2 h-3.5 w-3.5" />Security</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive"><LogOut className="mr-2 h-3.5 w-3.5" />Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>

            {/* ── Menubar ─────────────────────────────────────────────────── */}
            <div className="border-b px-4 py-1">
              <Menubar className="border-none shadow-none h-7 p-0 bg-transparent">
                {[["File", ["New…", "Open…", "Save", "---", "Export"]], ["Edit", ["Undo", "Redo", "---", "Cut", "Copy", "Paste"]], ["View", ["Zoom In", "Zoom Out", "---", "Full Screen"]]].map(([menu, items]) => (
                  <MenubarMenu key={menu as string}>
                    <MenubarTrigger className="text-xs h-7 px-2">{menu as string}</MenubarTrigger>
                    <MenubarContent>
                      {(items as string[]).map((item, i) =>
                        item === "---" ? <MenubarSeparator key={i} /> :
                          <MenubarItem key={item} className="text-xs">{item}</MenubarItem>
                      )}
                    </MenubarContent>
                  </MenubarMenu>
                ))}
              </Menubar>
            </div>

            {/* ── Body ────────────────────────────────────────────────────── */}
            <div className="flex-1 overflow-hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                <div className="border-b px-4">
                  <TabsList className="h-9 bg-transparent p-0 gap-1">
                    {["overview", "messages", "data", "components", "settings"].map(t => (
                      <TabsTrigger key={t} value={t} className="capitalize text-xs h-9 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-3">
                        {t}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <ScrollArea className="flex-1">
                  <div className="p-6 space-y-6">

                    {/* ══ OVERVIEW TAB ══════════════════════════════════════ */}
                    <TabsContent value="overview" className="mt-0 space-y-6">

                      <Alert>
                        <TrendingUp className="h-4 w-4" />
                        <AlertTitle>Strong growth this month</AlertTitle>
                        <AlertDescription>Revenue is up 23% compared to last month. Keep it up!</AlertDescription>
                      </Alert>

                      {/* KPI Cards */}
                      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {[
                          { label: "Revenue", value: "$48,200", delta: "+23%", color: "text-emerald-500" },
                          { label: "Users", value: "3,842", delta: "+11%", color: "text-emerald-500" },
                          { label: "Tasks", value: "192", delta: "-4%", color: "text-destructive" },
                          { label: "Uptime", value: "99.97%", delta: "+0.1%", color: "text-emerald-500" },
                        ].map(({ label, value, delta, color }) => (
                          <Card key={label}>
                            <CardHeader className="pb-1 pt-4 px-4">
                              <CardDescription className="text-xs">{label}</CardDescription>
                            </CardHeader>
                            <CardContent className="px-4 pb-4">
                              <p className="text-2xl font-bold">{value}</p>
                              <p className={`text-xs font-medium mt-0.5 ${color}`}>{delta} this month</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* Charts */}
                      <ResizablePanelGroup orientation="horizontal" className="gap-4 min-h-[280px]">
                        <ResizablePanel defaultSize={60} minSize={35}>
                          <Card className="h-full">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">Revenue over time</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ChartContainer config={chartConfig} className="h-[200px] w-full">
                                <AreaChart data={areaData}>
                                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                                  <YAxis tick={{ fontSize: 11 }} />
                                  <ChartTooltip content={<ChartTooltipContent />} />
                                  <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" fill="var(--color-revenue)" fillOpacity={0.15} />
                                </AreaChart>
                              </ChartContainer>
                            </CardContent>
                          </Card>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={40} minSize={25}>
                          <Card className="h-full">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm">Weekly tasks</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ChartContainer config={chartConfig} className="h-[200px] w-full">
                                <BarChart data={barData}>
                                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                                  <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                                  <YAxis tick={{ fontSize: 11 }} />
                                  <ChartTooltip content={<ChartTooltipContent />} />
                                  <Bar dataKey="tasks" fill="var(--color-tasks)" radius={[3, 3, 0, 0]} />
                                </BarChart>
                              </ChartContainer>
                            </CardContent>
                          </Card>
                        </ResizablePanel>
                      </ResizablePanelGroup>

                      {/* Progress + Slider */}
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Sprint progress</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            {[["Design review", 90], ["Backend API", 67], ["QA testing", 40], ["Documentation", 22]].map(([label, val]) => (
                              <div key={label as string} className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span>{label as string}</span>
                                  <span className="text-muted-foreground">{val as number}%</span>
                                </div>
                                <Progress value={val as number} className="h-1.5" />
                              </div>
                            ))}
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Controls</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2">
                              <Label className="text-xs">Sampling rate — {sliderVal[0]}%</Label>
                              <Slider value={sliderVal} onValueChange={setSliderVal} max={100} step={1} className="w-full" />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <Label className="text-xs">Auto-sync</Label>
                              <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox id="notify" checked={checked} onCheckedChange={v => setChecked(!!v)} />
                              <Label htmlFor="notify" className="text-xs">Email notifications</Label>
                            </div>
                            <div className="space-y-1.5">
                              <Label className="text-xs">Plan</Label>
                              <RadioGroup value={radio} onValueChange={setRadio} className="flex gap-4">
                                {["free", "pro", "enterprise"].map(p => (
                                  <div key={p} className="flex items-center gap-1.5">
                                    <RadioGroupItem value={p} id={`plan-${p}`} />
                                    <Label htmlFor={`plan-${p}`} className="capitalize text-xs">{p}</Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Carousel */}
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Featured projects</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Carousel className="w-full">
                            <CarouselContent>
                              {["Nexus AI", "DataFlow", "CloudSync", "DevPortal"].map((name, i) => (
                                <CarouselItem key={name} className="basis-1/3">
                                  <div className="rounded-lg border bg-muted/30 p-4 text-center">
                                    <div className="mb-2 flex justify-center">
                                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Cpu className="h-5 w-5 text-primary" />
                                      </div>
                                    </div>
                                    <p className="font-medium text-sm">{name}</p>
                                    <p className="text-xs text-muted-foreground mt-0.5">Project {i + 1}</p>
                                    <Badge variant="secondary" className="mt-2 text-xs">Active</Badge>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-0" />
                            <CarouselNext className="right-0" />
                          </Carousel>
                        </CardContent>
                      </Card>

                      {/* Accordion + Collapsible */}
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">FAQ</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <Accordion className="w-full">
                              {[["How do I invite teammates?", "Go to Settings → Team and click Invite."], ["Can I export my data?", "Yes — head to Settings → Export and choose your format."], ["What payment methods are accepted?", "We accept all major credit cards and wire transfers."]].map(([q, a], i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                  <AccordionTrigger className="text-xs text-left">{q}</AccordionTrigger>
                                  <AccordionContent className="text-xs text-muted-foreground">{a}</AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Advanced options</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen}>
                              <CollapsibleTrigger >
                                <Button variant="outline" size="sm" className="w-full justify-between text-xs">
                                  Developer settings
                                  <ChevronRight className={`h-3.5 w-3.5 transition-transform ${collapsibleOpen ? "rotate-90" : ""}`} />
                                </Button>
                              </CollapsibleTrigger>
                              <CollapsibleContent className="mt-2 space-y-2 rounded-lg border p-3">
                                <div className="flex items-center justify-between">
                                  <Label className="text-xs">Debug mode</Label>
                                  <Switch />
                                </div>
                                <div className="flex items-center justify-between">
                                  <Label className="text-xs">Verbose logging</Label>
                                  <Switch />
                                </div>
                                <div className="flex gap-1.5">
                                  <Terminal className="h-3.5 w-3.5 mt-0.5 text-muted-foreground" />
                                  <code className="text-xs text-muted-foreground font-mono">nexus-cli --debug --env prod</code>
                                </div>
                              </CollapsibleContent>
                            </Collapsible>

                            <div className="space-y-1.5">
                              <Label className="text-xs">Environment</Label>
                              <Select>
                                <SelectTrigger className="h-8 text-xs">
                                  <SelectValue placeholder="Production" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="prod">Production</SelectItem>
                                  <SelectItem value="staging">Staging</SelectItem>
                                  <SelectItem value="dev">Development</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-1.5">
                              <Label className="text-xs">API key</Label>
                              <div className="relative flex items-center">
                                <Input type={showPassword ? "text" : "password"} defaultValue="sk-nexus-xxxx-yyyy-zzzz" className="h-8 text-xs pr-8 font-mono" />
                                <Button variant="ghost" size="icon" className="absolute right-0 h-8 w-8" onClick={() => setShowPassword(!showPassword)}>
                                  {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Calendar + AspectRatio */}
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm flex items-center gap-1.5"><CalendarIcon className="h-3.5 w-3.5" />Calendar</CardTitle>
                          </CardHeader>
                          <CardContent className="flex justify-center">
                            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Media preview</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden bg-muted">
                              <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-background">
                                <div className="text-center">
                                  <Globe className="h-10 w-10 text-primary/40 mx-auto mb-2" />
                                  <p className="text-xs text-muted-foreground">16:9 Aspect ratio</p>
                                </div>
                              </div>
                            </AspectRatio>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* ══ MESSAGES TAB ══════════════════════════════════════ */}
                    <TabsContent value="messages" className="mt-0">
                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        {/* Inbox list */}
                        <Card className="lg:col-span-1">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm flex items-center justify-between">
                              Inbox
                              <Badge>4</Badge>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                            <ScrollArea className="h-[420px]">
                              {[
                                { name: "Alice Chen", preview: "Did you review the PR?", time: "10:12", unread: true, avatar: "AC" },
                                { name: "Bob Martin", preview: "Design files are ready", time: "09:44", unread: true, avatar: "BM" },
                                { name: "Carol Smith", preview: "Standup in 5 mins!", time: "09:00", unread: false, avatar: "CS" },
                                { name: "Dan Lee", preview: "Updated the docs ✅", time: "Yesterday", unread: false, avatar: "DL" },
                                { name: "Eva Torres", preview: "QA report attached", time: "Mon", unread: true, avatar: "ET" },
                              ].map(({ name, preview, time, unread, avatar }) => (
                                <ContextMenu key={name}>
                                  <ContextMenuTrigger>
                                    <div className={`flex items-start gap-3 border-b px-4 py-3 cursor-pointer hover:bg-accent/50 ${unread ? "bg-primary/5" : ""}`}>
                                      <Avatar className="h-8 w-8 mt-0.5 shrink-0">
                                        <AvatarFallback className="text-xs">{avatar}</AvatarFallback>
                                      </Avatar>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                          <p className={`text-xs ${unread ? "font-semibold" : "font-medium"}`}>{name}</p>
                                          <span className="text-[10px] text-muted-foreground">{time}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground truncate mt-0.5">{preview}</p>
                                      </div>
                                      {unread && <Circle className="h-2 w-2 fill-primary text-primary mt-1.5 shrink-0" />}
                                    </div>
                                  </ContextMenuTrigger>
                                  <ContextMenuContent>
                                    <ContextMenuItem><Star className="mr-2 h-3.5 w-3.5" />Star</ContextMenuItem>
                                    <ContextMenuItem><Pin className="mr-2 h-3.5 w-3.5" />Pin</ContextMenuItem>
                                    <ContextMenuSeparator />
                                    <ContextMenuSub>
                                      <ContextMenuSubTrigger><Mail className="mr-2 h-3.5 w-3.5" />Move to</ContextMenuSubTrigger>
                                      <ContextMenuSubContent>
                                        <ContextMenuItem>Archive</ContextMenuItem>
                                        <ContextMenuItem>Spam</ContextMenuItem>
                                      </ContextMenuSubContent>
                                    </ContextMenuSub>
                                    <ContextMenuSeparator />
                                    <ContextMenuItem className="text-destructive"><Trash2 className="mr-2 h-3.5 w-3.5" />Delete</ContextMenuItem>
                                  </ContextMenuContent>
                                </ContextMenu>
                              ))}
                            </ScrollArea>
                          </CardContent>
                        </Card>

                        {/* Chat */}
                        <Card className="lg:col-span-2 flex flex-col">
                          <CardHeader className="pb-2 flex-row items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>AC</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-sm">Alice Chen</CardTitle>
                              <p className="text-xs text-emerald-500 font-medium">● Online</p>
                            </div>
                            <div className="ml-auto flex gap-1">
                              <Sheet>
                                <SheetTrigger >
                                  <Button variant="ghost" size="icon" className="h-7 w-7"><Info className="h-3.5 w-3.5" /></Button>
                                </SheetTrigger>
                                <SheetContent>
                                  <SheetHeader>
                                    <SheetTitle>Contact info</SheetTitle>
                                    <SheetDescription>Details about Alice Chen</SheetDescription>
                                  </SheetHeader>
                                  <div className="mt-6 space-y-4">
                                    <div className="flex justify-center">
                                      <Avatar className="h-20 w-20">
                                        <AvatarFallback className="text-2xl">AC</AvatarFallback>
                                      </Avatar>
                                    </div>
                                    <div className="text-center">
                                      <p className="font-semibold">Alice Chen</p>
                                      <p className="text-sm text-muted-foreground">Senior Engineer</p>
                                    </div>
                                    <Separator />
                                    {[["Email", "alice@nexus.io"], ["Team", "Platform"], ["Location", "San Francisco"], ["Timezone", "PST (UTC-8)"]].map(([k, v]) => (
                                      <div key={k} className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">{k}</span>
                                        <span className="font-medium">{v}</span>
                                      </div>
                                    ))}
                                  </div>
                                </SheetContent>
                              </Sheet>
                            </div>
                          </CardHeader>
                          <Separator />
                          <CardContent className="flex-1 p-0 flex flex-col">
                            {/* Message scroller */}
                            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]">
                              {messages.map(msg => (
                                <div key={msg.id} className={`flex items-end gap-2 ${msg.mine ? "flex-row-reverse" : ""}`}>
                                  <Avatar className="h-6 w-6 shrink-0">
                                    <AvatarFallback className="text-[10px]">{msg.avatar}</AvatarFallback>
                                  </Avatar>
                                  <div className={`max-w-[70%] rounded-2xl px-3 py-2 ${msg.mine ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-muted rounded-bl-sm"}`}>
                                    <p className="text-xs">{msg.text}</p>
                                    <p className={`text-[10px] mt-0.5 ${msg.mine ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.time}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <Separator />
                            {/* Message input */}
                            <div className="p-3">
                              <div className="flex items-center gap-1 mb-2">
                                <ToggleGroup type="multiple" value={formatToggles} onValueChange={setFormatToggles} size="sm">
                                  <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="h-3 w-3" /></ToggleGroupItem>
                                  <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="h-3 w-3" /></ToggleGroupItem>
                                  <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="h-3 w-3" /></ToggleGroupItem>
                                </ToggleGroup>
                                <Separator orientation="vertical" className="h-5 mx-1" />
                                <Toggle size="sm" aria-label="Align left"><AlignLeft className="h-3 w-3" /></Toggle>
                                <Toggle size="sm" aria-label="Align center"><AlignCenter className="h-3 w-3" /></Toggle>
                                <Toggle size="sm" aria-label="Align right"><AlignRight className="h-3 w-3" /></Toggle>
                              </div>
                              <div className="flex items-center gap-2">
                                <Tooltip>
                                  <TooltipTrigger >
                                    <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                                      <Paperclip className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>Attach file</TooltipContent>
                                </Tooltip>
                                <Input
                                  placeholder="Type a message…"
                                  className="h-8 text-xs flex-1"
                                  value={msgInput}
                                  onChange={e => setMsgInput(e.target.value)}
                                  onKeyDown={e => {
                                    if (e.key === "Enter" && msgInput.trim()) {
                                      sonnerToast("Message sent!", { description: msgInput.trim().slice(0, 40) })
                                      setMsgInput("")
                                    }
                                  }}
                                />
                                <Button size="sm" className="h-8 px-3 gap-1.5 text-xs" onClick={() => {
                                  if (msgInput.trim()) {
                                    sonnerToast("Message sent!")
                                    setMsgInput("")
                                  }
                                }}>
                                  <Send className="h-3 w-3" />
                                  Send
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                    {/* ══ DATA TAB ══════════════════════════════════════════ */}
                    <TabsContent value="data" className="mt-0 space-y-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-sm">Team members</CardTitle>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm" className="h-7 text-xs gap-1" onClick={() => setTableSort(s => s === "asc" ? "desc" : "asc")}>
                                Score {tableSort === "asc" ? "↑" : "↓"}
                              </Button>
                              <Spinner className="h-3.5 w-3.5 text-muted-foreground" />
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead className="w-10 pl-4">
                                  <Checkbox
                                    checked={selectedRows.length === tableData.length}
                                    onCheckedChange={v => setSelectedRows(v ? tableData.map(r => r.id) : [])}
                                  />
                                </TableHead>
                                <TableHead className="text-xs">Name</TableHead>
                                <TableHead className="text-xs">Role</TableHead>
                                <TableHead className="text-xs">Status</TableHead>
                                <TableHead className="text-xs">Score</TableHead>
                                <TableHead className="text-xs w-10"></TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {sortedTable.map(row => (
                                <TableRow key={row.id} className={selectedRows.includes(row.id) ? "bg-muted/40" : ""}>
                                  <TableCell className="pl-4">
                                    <Checkbox checked={selectedRows.includes(row.id)} onCheckedChange={() => toggleRow(row.id)} />
                                  </TableCell>
                                  <TableCell className="text-xs font-medium">{row.name}</TableCell>
                                  <TableCell className="text-xs text-muted-foreground">{row.role}</TableCell>
                                  <TableCell>
                                    <Badge variant={row.status === "Active" ? "default" : row.status === "Away" ? "secondary" : "outline"} className="text-[10px]">
                                      {row.status}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center gap-2">
                                      <Progress value={row.score} className="h-1.5 w-16" />
                                      <span className="text-xs text-muted-foreground">{row.score}</span>
                                    </div>
                                  </TableCell>
                                  <TableCell>
                                    <DropdownMenu>
                                      <DropdownMenuTrigger >
                                        <Button variant="ghost" size="icon" className="h-6 w-6">
                                          <MoreHorizontal className="h-3.5 w-3.5" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end" className="w-36">
                                        <DropdownMenuItem className="text-xs"><Eye className="mr-2 h-3 w-3" />View profile</DropdownMenuItem>
                                        <DropdownMenuItem className="text-xs"><Mail className="mr-2 h-3 w-3" />Message</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-xs text-destructive"><Trash2 className="mr-2 h-3 w-3" />Remove</DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </CardContent>
                        <CardFooter className="py-2 px-4 flex items-center justify-between border-t">
                          <p className="text-xs text-muted-foreground">{selectedRows.length > 0 ? `${selectedRows.length} selected` : `${tableData.length} total`}</p>
                          <Pagination>
                            <PaginationContent className="gap-0">
                              <PaginationItem><PaginationPrevious href="#" className="text-xs h-7" /></PaginationItem>
                              <PaginationItem><PaginationLink href="#" className="text-xs h-7 w-7" isActive>1</PaginationLink></PaginationItem>
                              <PaginationItem><PaginationLink href="#" className="text-xs h-7 w-7">2</PaginationLink></PaginationItem>
                              <PaginationItem><PaginationEllipsis /></PaginationItem>
                              <PaginationItem><PaginationNext href="#" className="text-xs h-7" /></PaginationItem>
                            </PaginationContent>
                          </Pagination>
                        </CardFooter>
                      </Card>

                      {/* Skeleton loading state */}
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Loading state example</CardTitle>
                          <CardDescription className="text-xs">Skeletons while data loads</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center gap-3">
                              <Skeleton className="h-8 w-8 rounded-full" />
                              <div className="flex-1 space-y-1.5">
                                <Skeleton className="h-3 w-[60%]" />
                                <Skeleton className="h-2.5 w-[80%]" />
                              </div>
                              <Skeleton className="h-6 w-16 rounded-full" />
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* ══ COMPONENTS TAB ════════════════════════════════════ */}
                    <TabsContent value="components" className="mt-0 space-y-6">

                      {/* Navigation Menu */}
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Navigation menu</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <NavigationMenu>
                            <NavigationMenuList>
                              {[["Products", ["Analytics", "Automation", "Security"]], ["Company", ["About", "Blog", "Careers"]]].map(([label, items]) => (
                                <NavigationMenuItem key={label as string}>
                                  <NavigationMenuTrigger className="text-xs h-8">{label as string}</NavigationMenuTrigger>
                                  <NavigationMenuContent>
                                    <ul className="grid gap-1 p-2 w-40">
                                      {(items as string[]).map(item => (
                                        <li key={item}>
                                          <NavigationMenuLink >
                                            <a href="#" className="block rounded-md p-2 text-xs hover:bg-accent">{item}</a>
                                          </NavigationMenuLink>
                                        </li>
                                      ))}
                                    </ul>
                                  </NavigationMenuContent>
                                </NavigationMenuItem>
                              ))}
                            </NavigationMenuList>
                          </NavigationMenu>
                        </CardContent>
                      </Card>

                      {/* Dialogs & Overlays */}
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Dialogs & overlays</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">

                          <Dialog>
                            <DialogTrigger >
                              <Button variant="outline" size="sm" className="text-xs">Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Publish release</DialogTitle>
                                <DialogDescription>This will deploy to production immediately.</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-3 py-2">
                                <div className="space-y-1.5">
                                  <Label className="text-xs">Version tag</Label>
                                  <Input placeholder="v2.4.1" className="h-8 text-xs" />
                                </div>
                                <div className="space-y-1.5">
                                  <Label className="text-xs">Release notes</Label>
                                  <Textarea placeholder="What changed in this release…" className="text-xs resize-none" rows={3} />
                                </div>
                              </div>
                              <DialogFooter>
                                <Button variant="outline" size="sm" className="text-xs">Cancel</Button>
                                <Button size="sm" className="text-xs">Publish</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>

                          <AlertDialog>
                            <AlertDialogTrigger >
                              <Button variant="destructive" size="sm" className="text-xs">Delete project</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>This action cannot be undone. All data will be permanently deleted.</AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel className="text-xs">Cancel</AlertDialogCancel>
                                <AlertDialogAction className="text-xs bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>

                          <Drawer>
                            <DrawerTrigger >
                              <Button variant="outline" size="sm" className="text-xs">Open Drawer</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                              <DrawerHeader>
                                <DrawerTitle>Export data</DrawerTitle>
                                <DrawerDescription>Select format and date range.</DrawerDescription>
                              </DrawerHeader>
                              <div className="px-4 pb-4 space-y-3">
                                <Select>
                                  <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="Choose format" /></SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="csv">CSV</SelectItem>
                                    <SelectItem value="json">JSON</SelectItem>
                                    <SelectItem value="xlsx">XLSX</SelectItem>
                                  </SelectContent>
                                </Select>
                                <Button className="w-full text-xs h-8">Export</Button>
                              </div>
                              <DrawerFooter>
                                <DrawerClose >
                                  <Button variant="outline" className="text-xs h-8">Cancel</Button>
                                </DrawerClose>
                              </DrawerFooter>
                            </DrawerContent>
                          </Drawer>
                          <Button
                            variant="outline" size="sm" className="text-xs"
                            onClick={() => sonnerToast.success("Deployed to production 🚀", { description: "v2.4.1 is live." })}
                          >
                            Trigger Sonner
                          </Button>
                        </CardContent>
                      </Card>

                      {/* Input variants */}
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Input variants</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="space-y-1.5">
                            <Label className="text-xs">Standard input</Label>
                            <Input placeholder="Enter value…" className="h-8 text-xs" />
                          </div>
                          <div className="space-y-1.5">
                            <Label className="text-xs">With icon group</Label>
                            <div className="relative flex items-center">
                              <Search className="absolute left-2.5 h-3.5 w-3.5 text-muted-foreground" />
                              <Input placeholder="Search…" className="h-8 text-xs pl-8" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <Label className="text-xs">OTP input</Label>
                            <InputOTP maxLength={6} value={otpVal} onChange={setOtpVal}>
                              <InputOTPGroup>
                                {[0, 1, 2, 3, 4, 5].map(i => <InputOTPSlot key={i} index={i} />)}
                              </InputOTPGroup>
                            </InputOTP>
                          </div>
                          <div className="space-y-1.5">
                            <Label className="text-xs">Native select</Label>
                            <select className="h-8 w-full rounded-md border border-input bg-background px-3 text-xs ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring">
                              <option>Option A</option>
                              <option>Option B</option>
                              <option>Option C</option>
                            </select>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Badges & Typography */}
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">Badges & typography</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {(["default", "secondary", "destructive", "outline"] as const).map(v => (
                              <Badge key={v} variant={v} className="capitalize">{v}</Badge>
                            ))}
                          </div>
                          <Separator />
                          <div className="space-y-1">
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">H1 Heading</h1>
                            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">H2 Heading</h2>
                            <h3 className="scroll-m-20 text-lg font-semibold">H3 Heading</h3>
                            <p className="text-sm leading-7">Body copy. The quick brown fox jumps over the lazy dog.</p>
                            <p className="text-xs text-muted-foreground">Muted caption text for secondary information.</p>
                            <p className="text-xs font-mono bg-muted rounded px-1.5 py-0.5 inline-block">Inline code block</p>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs font-mono">⌘</kbd>
                            <kbd className="rounded border bg-muted px-1.5 py-0.5 text-xs font-mono">K</kbd>
                            <span className="text-xs text-muted-foreground">Command palette</span>
                          </div>
                        </CardContent>
                      </Card>

                    </TabsContent>

                    {/* ══ SETTINGS TAB ══════════════════════════════════════ */}
                    <TabsContent value="settings" className="mt-0 space-y-6">

                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Danger zone</AlertTitle>
                        <AlertDescription>Irreversible actions below. Proceed with caution.</AlertDescription>
                      </Alert>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Profile</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>JD</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium">Jane Doe</p>
                                <p className="text-xs text-muted-foreground">Senior Product Lead</p>
                              </div>
                            </div>
                            <div className="space-y-1.5">
                              <Label className="text-xs">Display name</Label>
                              <Input defaultValue="Jane Doe" className="h-8 text-xs" />
                            </div>
                            <div className="space-y-1.5">
                              <Label className="text-xs">Bio</Label>
                              <Textarea defaultValue="Building great products at Nexus." className="text-xs resize-none" rows={2} />
                            </div>
                            <Button size="sm" className="text-xs h-7" onClick={() => sonnerToast.success("Deployed to production 🚀", { description: "v2.4.1 is live." })}>
                              Save changes
                            </Button>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Two-factor auth</CardTitle>
                            <CardDescription className="text-xs">Verify your OTP to enable 2FA.</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <InputOTP maxLength={6} value={otpVal} onChange={setOtpVal}>
                              <InputOTPGroup>
                                {[0, 1, 2, 3, 4, 5].map(i => <InputOTPSlot key={i} index={i} />)}
                              </InputOTPGroup>
                            </InputOTP>
                            <Button
                              size="sm" className="text-xs h-7" disabled={otpVal.length < 6}
                              onClick={() => { sonnerToast.success("Deployed to production 🚀", { description: "v2.4.1 is live." }); setOtpVal("") }}
                            >
                              <Check className="mr-1.5 h-3 w-3" />Verify & enable
                            </Button>
                          </CardContent>
                        </Card>

                        <Card className="md:col-span-2">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Notification preferences</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                              {[
                                ["Email notifications", "Receive updates via email"],
                                ["Push notifications", "Browser push alerts"],
                                ["Weekly digest", "Summary every Monday"],
                                ["Security alerts", "Login and access changes"],
                              ].map(([label, desc]) => (
                                <div key={label} className="flex items-center justify-between rounded-lg border p-3">
                                  <div>
                                    <p className="text-xs font-medium">{label}</p>
                                    <p className="text-xs text-muted-foreground">{desc}</p>
                                  </div>
                                  <Switch defaultChecked={label !== "Weekly digest"} />
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="md:col-span-2 border-destructive/30">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm text-destructive">Danger zone</CardTitle>
                          </CardHeader>
                          <CardContent className="flex flex-wrap gap-2">
                            <AlertDialog>
                              <AlertDialogTrigger >
                                <Button variant="outline" size="sm" className="text-xs border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                                  Reset account
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Reset your account?</AlertDialogTitle>
                                  <AlertDialogDescription>All your data will be cleared. This cannot be undone.</AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Reset</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>

                            <AlertDialog>
                              <AlertDialogTrigger >
                                <Button variant="destructive" size="sm" className="text-xs">Delete account</Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete your account?</AlertDialogTitle>
                                  <AlertDialogDescription>Your account and all associated data will be permanently deleted.</AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete forever</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                  </div>
                </ScrollArea>
              </Tabs>
            </div>
          </div>
        </div>

        <Toaster />
      </TooltipProvider>
    </SidebarProvider>
  )
}

export default App