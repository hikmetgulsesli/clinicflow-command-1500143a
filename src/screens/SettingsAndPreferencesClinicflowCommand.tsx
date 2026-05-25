// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - ClinicFlow Command
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CheckCircle2, CircleHelp, LayoutDashboard, ListFilter, LogOut, Pencil, RefreshCw, Save, Search, Settings, Trash2 } from "lucide-react";


export type SettingsAndPreferencesClinicflowCommandActionId = "search-1" | "notifications-2" | "reset-to-defaults-3" | "delete-filter-4" | "delete-filter-5" | "delete-filter-6" | "retry-load-7" | "save-preferences-8" | "operations-1" | "editor-2" | "queue-3" | "insights-4" | "settings-5" | "help-6" | "logout-7";

export interface SettingsAndPreferencesClinicflowCommandProps {
  actions?: Partial<Record<SettingsAndPreferencesClinicflowCommandActionId, () => void>>;
}

export function SettingsAndPreferencesClinicflowCommand({ actions }: SettingsAndPreferencesClinicflowCommandProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="fixed h-full w-[240px] left-0 top-0 bg-primary dark:bg-primary text-on-primary dark:text-on-primary border-r border-outline-variant flex flex-col h-full py-4 font-body-md text-body-md z-20">
      <div className="px-margin mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
      <BadgeHelp className="text-secondary-fixed" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-primary leading-tight">ClinicFlow Command</h1>
      <p className="font-label-sm text-label-sm text-on-primary-container">Medical Operations</p>
      </div>
      </div>
      <div className="flex-1 flex flex-col gap-1 px-3">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors Active: opacity-80" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <LayoutDashboard className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Operations</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors Active: opacity-80" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Pencil className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Editor</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors Active: opacity-80" href="#" data-action-id="queue-3" onClick={actions?.["queue-3"]}>
      <BadgeHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Queue</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors Active: opacity-80" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary font-bold bg-primary-container/20 hover:bg-primary-container/10 transition-colors Active: opacity-80" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="text-[20px] icon-fill" aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      </div>
      <div className="px-3 flex flex-col gap-1 mt-auto">
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Help</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut className="text-[20px]" aria-hidden={true} focusable="false" />
      <span>Logout</span>
      </a>
      </div>
      </nav>
      {/* TopNavBar */}
      <header className="fixed top-0 right-0 h-[56px] w-[calc(100%-240px)] bg-surface dark:bg-surface text-on-surface dark:text-on-surface border-b border-outline-variant flex items-center justify-between px-gutter ml-[240px] font-label-md text-label-md z-10 transition-colors duration-200">
      <div className="flex items-center gap-4">
      <span className="font-headline-sm text-headline-sm font-bold text-primary">ClinicFlow Command</span>
      </div>
      <div className="flex items-center gap-4">
      <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary transition-colors" type="button" data-action-id="search-1" onClick={actions?.["search-1"]}>
      <Search aria-hidden={true} focusable="false" />
      </button>
      <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary transition-colors relative" type="button" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell aria-hidden={true} focusable="false" />
      <span className="absolute top-[6px] right-[6px] w-[8px] h-[8px] bg-error rounded-full border border-surface"></span>
      </button>
      <div className="w-[32px] h-[32px] rounded-full bg-primary-container text-on-primary-container flex items-center justify-center border border-outline-variant ml-2 overflow-hidden">
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a female medical administrator in her late 30s. She is wearing minimal, modern attire suitable for a clinical command center. The lighting is soft and even, highlighting a serious but approachable expression. The background is a neutral, out-of-focus high-tech clinical environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLmNf3m2b7Ivs6kHUuhpwzKzeelcyGmcTA4PXM-EyXYN4MgzvXHM2ORoJ1sRA1geDiMZVgSUGD2M50zArmjHMaAdf3hpnOsq4pCCBLbDknEA8w7jtSnPn03yFFflWjkeh2ZXucyRb-APf4MKyAV1QiDc5bWXx4Q17tP_HYY-q3_UwxOM5RE770iU3kvWaLK5PCOc-CCjkxtxTgq6qUJ8pccOH9QrkdBV1mvBLyOZWm8IUMhI-EQ3yzFq4803k31ggJIyOAFpmxkrM" />
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="ml-[240px] mt-[56px] h-[calc(100vh-56px)] overflow-y-auto bg-surface-bright p-container-padding flex justify-center">
      <div className="w-full max-w-[800px] flex flex-col gap-margin pb-10">
      {/* Page Header */}
      <div className="flex items-end justify-between border-b border-outline-variant pb-3 mb-2">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Settings &amp; Preferences</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Manage your workspace configuration and data views.</p>
      </div>
      <button className="font-label-md text-label-md text-secondary hover:underline flex items-center gap-1" type="button" data-action-id="reset-to-defaults-3" onClick={actions?.["reset-to-defaults-3"]}>
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" />
                          Reset to Defaults
                      </button>
      </div>
      {/* Group: Workspace & Views */}
      <section className="bg-surface border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="px-margin py-3 border-b border-outline-variant bg-surface-container-low">
      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
      <BadgeHelp className="text-[20px] text-on-surface-variant" aria-hidden={true} focusable="false" />
                              Workspace Display
                          </h3>
      </div>
      <div className="p-margin flex flex-col gap-6">
      {/* Default Views (Radio) */}
      <div>
      <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-3">Default Landing Screen</h4>
      <div className="flex items-center gap-6">
      <label className="flex items-center gap-2 cursor-pointer group">
      <input defaultChecked={true} className="w-4 h-4 text-secondary bg-surface border-outline focus:ring-secondary focus:ring-1" name="default_view" type="radio" defaultValue="operations" />
      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Operations Dashboard</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer group">
      <input className="w-4 h-4 text-secondary bg-surface border-outline focus:ring-secondary focus:ring-1" name="default_view" type="radio" defaultValue="queue" />
      <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Patient Queue</span>
      </label>
      </div>
      </div>
      {/* Density Mode (Toggle) */}
      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/50">
      <div>
      <h4 className="font-body-md text-body-md text-on-surface font-medium">High Density Mode</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Reduces row height and padding in data tables to display more records.</p>
      </div>
      <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-outline appearance-none cursor-pointer z-10 transition-colors" id="toggle_density" name="toggle_density" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-outline cursor-pointer transition-colors" htmlFor="toggle_density"></label>
      </div>
      </div>
      {/* Auto-refresh (Toggle) */}
      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/50">
      <div>
      <h4 className="font-body-md text-body-md text-on-surface font-medium">Auto-refresh Data (30s)</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Automatically polling for new patient entries and status updates.</p>
      </div>
      <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-outline appearance-none cursor-pointer z-10 transition-colors" id="toggle_refresh" name="toggle_refresh" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-outline cursor-pointer transition-colors" htmlFor="toggle_refresh"></label>
      </div>
      </div>
      </div>
      </section>
      {/* Group: Data Filters */}
      <section className="bg-surface border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="px-margin py-3 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
      <ListFilter className="text-[20px] text-on-surface-variant" aria-hidden={true} focusable="false" />
                              Saved Filters
                          </h3>
      </div>
      <div className="flex flex-col">
      <div className="flex items-center justify-between px-margin py-[10px] border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors group">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface font-medium">My Triage Queue</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Status: Waiting | Dept: Emergency</span>
      </div>
      <button className="w-[28px] h-[28px] flex items-center justify-center rounded text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error hover:bg-error-container transition-colors" title="Delete Filter" type="button" data-action-id="delete-filter-4" onClick={actions?.["delete-filter-4"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex items-center justify-between px-margin py-[10px] border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors group">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface font-medium">High Priority Patients</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Acuity: Level 1, Level 2</span>
      </div>
      <button className="w-[28px] h-[28px] flex items-center justify-center rounded text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error hover:bg-error-container transition-colors" title="Delete Filter" type="button" data-action-id="delete-filter-5" onClick={actions?.["delete-filter-5"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex items-center justify-between px-margin py-[10px] hover:bg-surface-container-low transition-colors group">
      <div className="flex flex-col">
      <span className="font-body-md text-body-md text-on-surface font-medium">Cardiology Consults</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Dept: Cardiology | Status: Pending</span>
      </div>
      <button className="w-[28px] h-[28px] flex items-center justify-center rounded text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error hover:bg-error-container transition-colors" title="Delete Filter" type="button" data-action-id="delete-filter-6" onClick={actions?.["delete-filter-6"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </section>
      {/* Group: Notifications */}
      <section className="bg-surface border border-outline-variant rounded-lg overflow-hidden flex flex-col">
      <div className="px-margin py-3 border-b border-outline-variant bg-surface-container-low">
      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
      <BadgeHelp className="text-[20px] text-on-surface-variant" aria-hidden={true} focusable="false" />
                              Alerts &amp; Notifications
                          </h3>
      </div>
      <div className="p-margin flex flex-col gap-4">
      <div className="flex items-center justify-between">
      <div>
      <h4 className="font-body-md text-body-md text-on-surface font-medium">SLA Breach Notifications</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Receive alerts when a patient wait time exceeds departmental SLA thresholds.</p>
      </div>
      <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-outline appearance-none cursor-pointer z-10 transition-colors" id="toggle_sla" name="toggle_sla" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-5 rounded-full bg-outline cursor-pointer transition-colors" htmlFor="toggle_sla"></label>
      </div>
      </div>
      </div>
      </section>
      {/* Action Bar */}
      <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-outline-variant">
      <button className="px-4 py-2 rounded font-label-md text-label-md border border-outline-variant text-on-surface bg-surface hover:bg-surface-container-low transition-colors flex items-center gap-2" type="button" data-action-id="retry-load-7" onClick={actions?.["retry-load-7"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                          Retry Load
                      </button>
      <button className="px-4 py-2 rounded font-label-md text-label-md bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2" id="savePreferencesBtn" type="button" data-action-id="save-preferences-8" onClick={actions?.["save-preferences-8"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                          Save Preferences
                      </button>
      </div>
      </div>
      </main>
      {/* Toast Notification (Hidden by default, triggered by JS) */}
      <div className="fixed bottom-[24px] right-[24px] bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded border border-outline shadow-md flex items-center gap-3 transform translate-y-[150%] opacity-0 transition-colors duration-300 z-50" id="toastNotification">
      <CheckCircle2 className="text-secondary-container" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm">Preferences saved successfully.</span>
      </div>
      
    </>
  );
}
