// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - ClinicFlow Command
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, Check, CircleHelp, Download, LayoutDashboard, ListFilter, LogOut, Pencil, Search, Settings, TriangleAlert } from "lucide-react";


export type InsightsClinicflowCommandActionId = "notifications-1" | "filter-2" | "export-summary-3" | "consider-opening-triage-lane-3-4" | "view-all-5" | "operations-1" | "editor-2" | "queue-3" | "insights-4" | "settings-5" | "help-6" | "logout-7";

export interface InsightsClinicflowCommandProps {
  actions?: Partial<Record<InsightsClinicflowCommandActionId, () => void>>;
}

export function InsightsClinicflowCommand({ actions }: InsightsClinicflowCommandProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="fixed h-full w-[240px] left-0 top-0 bg-primary border-r border-outline-variant flex flex-col py-4 z-20">
      <div className="px-6 mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} className="text-on-primary text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-primary">ClinicFlow Command</h1>
      <p className="font-label-sm text-label-sm text-on-primary-container">Medical Operations</p>
      </div>
      </div>
      <div className="flex-1 px-3 space-y-1">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <LayoutDashboard className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Pencil className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Editor</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="queue-3" onClick={actions?.["queue-3"]}>
      <BadgeHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queue</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary font-bold bg-primary-container/20 opacity-80" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </div>
      <div className="px-3 mt-auto space-y-1 pt-4 border-t border-outline-variant/20">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Help</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Logout</span>
      </a>
      </div>
      </nav>
      {/* TopNavBar */}
      <header className="fixed top-0 right-0 h-[56px] w-[calc(100%-240px)] bg-surface border-b border-outline-variant flex items-center justify-between px-gutter ml-[240px] z-10 transition-colors duration-200">
      <div className="flex items-center gap-4 w-1/3">
      <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-10 pr-3 rounded bg-surface-container-low border-none text-body-sm font-body-sm focus:ring-1 focus:ring-secondary focus:bg-surface-container-lowest transition-colors placeholder:text-on-surface-variant/70" placeholder="Search operations..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors duration-200 relative" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
      </button>
      <div className="w-px h-6 bg-outline-variant mx-2"></div>
      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden border border-outline-variant">
      <span className="font-label-sm text-label-sm text-on-primary-fixed font-bold">JD</span>
      </div>
      </div>
      </header>
      {/* Main Content */}
      <main className="ml-[240px] pt-[56px] p-container-padding">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-margin">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Insights Overview</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Real-time clinic performance metrics</p>
      </div>
      <div className="flex items-center gap-3">
      <button className="h-9 px-3 border border-outline-variant rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-2" type="button" data-action-id="filter-2" onClick={actions?.["filter-2"]}>
      <ListFilter className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Filter</span>
      </button>
      <button className="h-9 px-4 rounded bg-primary text-on-primary hover:opacity-90 transition-opacity flex items-center gap-2" type="button" data-action-id="export-summary-3" onClick={actions?.["export-summary-3"]}>
      <Download className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Export Summary</span>
      </button>
      </div>
      </div>
      {/* Metrics Grid */}
      <div className="grid grid-cols-4 gap-gutter mb-margin">
      {/* Metric Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Average Wait Time</span>
      <BadgeHelp className="text-[20px] text-error" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-lg text-headline-lg text-primary">42<span className="text-[16px] text-on-surface-variant ml-0.5">m</span></span>
      </div>
      <p className="font-label-sm text-label-sm text-error mt-1">+5m vs yesterday</p>
      </div>
      {/* Metric Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Patient Volume</span>
      <BadgeHelp className="text-[20px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-lg text-headline-lg text-primary">124</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Today's total</p>
      </div>
      {/* Metric Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Room Turnover</span>
      <BadgeHelp className="text-[20px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-lg text-headline-lg text-primary">15<span className="text-[16px] text-on-surface-variant ml-0.5">m</span></span>
      </div>
      <p className="font-label-sm text-label-sm text-secondary mt-1">-2m vs average</p>
      </div>
      {/* Metric Card 4 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-4">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Satisfaction Score</span>
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px] text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-2">
      <span className="font-headline-lg text-headline-lg text-primary">4.8</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">/ 5</span>
      </div>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Based on 82 surveys</p>
      </div>
      </div>
      {/* Middle Section: Chart & Hint */}
      <div className="grid grid-cols-12 gap-gutter mb-margin">
      {/* State Distribution */}
      <div className="col-span-8 bg-surface-container-lowest border border-outline-variant rounded flex flex-col">
      <div className="px-4 py-3 border-b border-outline-variant">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Patient State Distribution</h3>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-center">
      <div className="flex items-center justify-between mb-2">
      <div className="flex gap-4">
      <div className="flex items-center gap-1.5">
      <div className="w-3 h-3 rounded-sm bg-secondary"></div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Triage (45%)</span>
      </div>
      <div className="flex items-center gap-1.5">
      <div className="w-3 h-3 rounded-sm bg-primary"></div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Roomed (55%)</span>
      </div>
      </div>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Total: 84 Active</span>
      </div>
      {/* Simple Bar Chart Mock */}
      <div className="w-full h-8 rounded overflow-hidden flex shadow-sm border border-outline-variant">
      <div className="h-full bg-secondary" style={{width: "45%"}}></div>
      <div className="h-full bg-primary" style={{width: "55%"}}></div>
      </div>
      </div>
      </div>
      {/* Actionable Hint */}
      <div className="col-span-4 bg-secondary-fixed/20 border border-secondary/30 rounded p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-3 text-on-secondary-fixed-variant">
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} className="text-[20px]" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-sm text-headline-sm">Actionable Hint</h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface mb-4 flex-1">
                          Volume is <strong className="font-semibold text-error">20% higher</strong> than average for this time period.
                      </p>
      <div className="mt-auto">
      <button className="w-full h-8 bg-surface-container-lowest border border-outline-variant rounded font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors" type="button" data-action-id="consider-opening-triage-lane-3-4" onClick={actions?.["consider-opening-triage-lane-3-4"]}>
                              Consider opening Triage Lane 3
                          </button>
      </div>
      </div>
      </div>
      {/* Bottom Section: Recent Activity */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded">
      <div className="px-4 py-3 border-b border-outline-variant flex justify-between items-center">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Activity Feed</h3>
      <button className="text-secondary font-label-md text-label-md hover:underline" type="button" data-action-id="view-all-5" onClick={actions?.["view-all-5"]}>View All</button>
      </div>
      <div className="flex flex-col">
      {/* Activity Item 1 */}
      <div className="flex items-center gap-4 px-4 py-3 border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors h-[40px] box-content">
      <div className="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center flex-shrink-0">
      <Check className="text-[14px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 flex justify-between items-center">
      <p className="font-body-sm text-body-sm text-on-surface">Provider Handoff complete for <span className="font-medium text-primary">Rm 4</span></p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">2m ago</span>
      </div>
      </div>
      {/* Activity Item 2 (Error State) */}
      <div className="flex items-center gap-4 px-4 py-3 border-b border-outline-variant/50 bg-error-container/10 hover:bg-error-container/20 transition-colors h-[40px] box-content">
      <div className="w-6 h-6 rounded-full bg-error-container flex items-center justify-center flex-shrink-0 border border-error/20">
      <TriangleAlert className="text-[14px] text-error" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 flex justify-between items-center">
      <p className="font-body-sm text-body-sm text-error">SLA Breach: Patient 882 waiting &gt;60m</p>
      <span className="font-label-sm text-label-sm text-error/80">5m ago</span>
      </div>
      </div>
      {/* Activity Item 3 */}
      <div className="flex items-center gap-4 px-4 py-3 border-b border-outline-variant/50 hover:bg-surface-container-low/50 transition-colors h-[40px] box-content">
      <div className="w-6 h-6 rounded-full bg-surface-variant flex items-center justify-center flex-shrink-0">
      <BadgeHelp className="text-[14px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 flex justify-between items-center">
      <p className="font-body-sm text-body-sm text-on-surface">Patient 890 Checked in to <span className="font-medium text-primary">Triage</span></p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">12m ago</span>
      </div>
      </div>
      {/* Activity Item 4 */}
      <div className="flex items-center gap-4 px-4 py-3 hover:bg-surface-container-low/50 transition-colors h-[40px] box-content">
      <div className="w-6 h-6 rounded-full bg-secondary-container/50 flex items-center justify-center flex-shrink-0">
      <BadgeHelp className="text-[14px] text-on-secondary-container" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 flex justify-between items-center">
      <p className="font-body-sm text-body-sm text-on-surface">Room 2 Status changed to <span className="font-medium text-secondary">Clean &amp; Ready</span></p>
      <span className="font-label-sm text-label-sm text-on-surface-variant">15m ago</span>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
