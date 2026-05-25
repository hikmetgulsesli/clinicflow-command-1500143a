// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty and Error Recovery - ClinicFlow Command
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, ChevronDown, CircleHelp, LayoutDashboard, LogOut, Pencil, Plus, RefreshCw, Settings, User, X } from "lucide-react";


export type EmptyAndErrorRecoveryClinicflowCommandActionId = "notifications-1" | "retry-connection-2" | "technical-details-3" | "clear-all-filters-4" | "create-first-patient-record-5" | "import-csv-data-6" | "operations-1" | "editor-2" | "queue-3" | "insights-4" | "settings-5" | "help-6" | "logout-7";

export interface EmptyAndErrorRecoveryClinicflowCommandProps {
  actions?: Partial<Record<EmptyAndErrorRecoveryClinicflowCommandActionId, () => void>>;
}

export function EmptyAndErrorRecoveryClinicflowCommand({ actions }: EmptyAndErrorRecoveryClinicflowCommandProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="fixed h-full w-[240px] left-0 top-0 bg-primary border-r border-outline-variant flex flex-col py-4 z-50">
      <div className="px-margin mb-8">
      <h1 className="font-headline-md text-headline-md font-bold text-on-primary">ClinicFlow Command</h1>
      <p className="font-label-sm text-label-sm text-on-primary-container">Medical Operations</p>
      </div>
      <div className="flex-1 overflow-y-auto">
      <ul className="space-y-unit px-unit">
      <li>
      <a className="flex items-center gap-gutter px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <LayoutDashboard aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-gutter px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Pencil aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Editor</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-gutter px-3 py-2 rounded-lg text-on-primary font-bold bg-primary-container/20 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="queue-3" onClick={actions?.["queue-3"]}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queue</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-gutter px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-gutter px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </li>
      </ul>
      </div>
      <div className="mt-auto px-unit">
      <ul className="space-y-unit">
      <li>
      <a className="flex items-center gap-gutter px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Help</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-gutter px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Logout</span>
      </a>
      </li>
      </ul>
      </div>
      </nav>
      {/* TopNavBar */}
      <header className="fixed top-0 right-0 h-[56px] w-[calc(100%-240px)] bg-surface border-b border-outline-variant flex items-center justify-between px-gutter z-40 transition-colors duration-200">
      <div className="flex items-center gap-margin">
      <span className="font-headline-sm text-headline-sm font-bold text-primary">ClinicFlow Command</span>
      </div>
      <div className="flex items-center gap-gutter text-on-surface-variant font-label-md text-label-md">
      <button className="hover:text-primary transition-colors p-1 flex items-center justify-center rounded-full hover:bg-surface-container-high" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden flex items-center justify-center">
      <User className="text-outline" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="ml-[240px] mt-[56px] p-container-padding min-h-[calc(100vh-56px)] bg-background">
      <div className="max-w-6xl mx-auto">
      <div className="mb-margin">
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Queue Management Status</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Reviewing potential system states and user feedback.</p>
      </div>
      {/* Bento Grid Layout for States */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-margin">
      {/* 1. Data Load Error State */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
      <div className="w-16 h-16 rounded-full bg-error-container flex items-center justify-center mb-4 border border-error/20">
      <BadgeHelp data-weight="fill" className="text-error text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Data Sync Interrupted</h3>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">
                              Connection interrupted while fetching the latest patient data from the primary HL7 interface.
                          </p>
      <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2" type="button" data-action-id="retry-connection-2" onClick={actions?.["retry-connection-2"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                              Retry Connection
                          </button>
      <div className="mt-8 w-full max-w-md text-left">
      <button className="w-full flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm py-2 border-b border-outline-variant/50 hover:text-on-surface transition-colors" type="button" data-action-id="technical-details-3" onClick={actions?.["technical-details-3"]}>
                                  Technical Details
                                  <ChevronDown className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="hidden mt-2 p-3 bg-surface-container-low rounded border border-outline-variant/50 font-mono text-[10px] text-on-surface-variant leading-relaxed" id="tech-details">
                                  ERR_CONNECTION_TIMEOUT [10.2.4.155:443]<br />
                                  TS: 2023-10-27T14:32:01Z<br />
                                  Module: QueueSync_v2.4
                              </div>
      </div>
      </div>
      {/* 2. Empty State (Filters) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[320px]">
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-4 border border-outline-variant">
      <BadgeHelp className="text-outline text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-2">No Matching Records</h3>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">
                              Your current filter combination yields no results in the active queue. Try broadening your criteria.
                          </p>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
      <span className="px-3 py-1 bg-surface-container-low border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                                  Status: Critical <X className="text-[14px] cursor-pointer hover:text-on-surface" aria-hidden={true} focusable="false" />
      </span>
      <span className="px-3 py-1 bg-surface-container-low border border-outline-variant rounded-full font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                                  Dept: Cardiology <X className="text-[14px] cursor-pointer hover:text-on-surface" aria-hidden={true} focusable="false" />
      </span>
      </div>
      <button className="border border-outline-variant text-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:bg-surface-container-low transition-colors" type="button" data-action-id="clear-all-filters-4" onClick={actions?.["clear-all-filters-4"]}>
                              Clear All Filters
                          </button>
      </div>
      {/* 3. No Patients Found (New Clinic) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[320px] xl:col-span-2 relative overflow-hidden">
      {/* Subtle background pattern for 'new' state */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: "radial-gradient(#162839 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>
      <div className="relative z-10 flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-4 border border-primary/20">
      <BadgeHelp className="text-primary text-[32px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Welcome to ClinicFlow</h3>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-8">
                                  The queue is currently empty. Begin by adding your first patient record to populate the operational dashboard.
                              </p>
      <div className="flex gap-4">
      <button className="bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2" type="button" data-action-id="create-first-patient-record-5" onClick={actions?.["create-first-patient-record-5"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Create First Patient Record
                                  </button>
      <button className="border border-outline-variant text-on-surface font-label-md text-label-md px-6 py-2.5 rounded-lg hover:bg-surface-container-low transition-colors flex items-center gap-2" type="button" data-action-id="import-csv-data-6" onClick={actions?.["import-csv-data-6"]}>
                                      Import CSV Data
                                  </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
