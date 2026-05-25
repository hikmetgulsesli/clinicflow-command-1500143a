// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Patient Editor - ClinicFlow Command
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CalendarDays, ChevronDown, ChevronRight, CircleAlert, CircleHelp, Info, LayoutDashboard, LogOut, Pencil, Save, Search, Settings, User } from "lucide-react";


export type PatientEditorClinicflowCommandActionId = "notifications-1" | "cancel-2" | "save-patient-3" | "operations-1" | "editor-2" | "queue-3" | "insights-4" | "settings-5" | "help-6" | "logout-7";

export interface PatientEditorClinicflowCommandProps {
  actions?: Partial<Record<PatientEditorClinicflowCommandActionId, () => void>>;
}

export function PatientEditorClinicflowCommand({ actions }: PatientEditorClinicflowCommandProps) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="fixed h-full w-[240px] left-0 top-0 bg-primary dark:bg-primary text-on-primary dark:text-on-primary border-r border-outline-variant flex flex-col py-4 z-50 hidden md:flex">
      {/* Header */}
      <div className="px-container-padding mb-8">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center text-on-primary-container">
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-primary">ClinicFlow Command</h1>
      <p className="font-label-sm text-label-sm text-on-primary-container">Medical Operations</p>
      </div>
      </div>
      </div>
      {/* Main Tabs */}
      <ul className="flex-1 space-y-1 px-3">
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <LayoutDashboard aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Operations</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-primary font-bold bg-primary-container/20 opacity-80" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Pencil style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Editor</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="queue-3" onClick={actions?.["queue-3"]}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Queue</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </li>
      </ul>
      {/* Footer Tabs */}
      <ul className="space-y-1 px-3 mt-auto pt-4 border-t border-primary-container">
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Help</span>
      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-primary-container/70 hover:bg-primary-container/10 transition-colors opacity-80" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Logout</span>
      </a>
      </li>
      </ul>
      </nav>
      {/* TopNavBar (Shared Component) */}
      <header className="fixed top-0 right-0 h-[56px] w-full md:w-[calc(100%-240px)] bg-surface dark:bg-surface text-on-surface dark:text-on-surface border-b border-outline-variant flex items-center justify-between px-gutter md:ml-[240px] z-40 transition-colors duration-200">
      <div className="flex items-center gap-4">
      <span className="font-headline-sm text-headline-sm font-bold text-primary md:hidden">ClinicFlow Command</span>
      {/* Contextual Breadcrumb for Editor */}
      <div className="hidden md:flex items-center gap-2 text-on-surface-variant">
      <BadgeHelp className="text-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Records</span>
      <ChevronRight className="text-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary">Patient Editor</span>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="relative hidden sm:block">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-outline text-sm" aria-hidden={true} focusable="false" />
      <input className="pl-8 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded text-body-sm font-body-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary w-48" placeholder="Quick search..." type="text" />
      </div>
      <button className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors relative" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border border-surface"></span>
      </button>
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container border border-outline-variant overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
      <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIVfN0vemgKV_cbplyFQ6UBTv5ipUiKIGYVamco_3B_8WS8foDX59p34yhlCGPc_Jqo1dthoPrtaeN1qrCCjFj0zjK4WkQmxdr1gV36qJ7kULSsW5JvYVwozOvh4TDYzVMxpFbqtetICEUYyh8g2I26GOeA5q-6DjL1OJakXyp5UdldvRHx9_qjij1shVPrqJP9WKCFRXFdujeWdhmddWPDF20FKD-353rQxO0_id_Zd8ZSqwUxcBqrCGWpaBqMt6hlXsWpxO7W_o" />
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full pt-[56px] md:pl-[240px] bg-background overflow-y-auto">
      <div className="p-container-padding max-w-4xl mx-auto">
      {/* Editor Header & State Feedback */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-margin gap-4">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-on-surface">Patient Editor</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-unit">Create or modify a clinical patient record.</p>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container border border-outline-variant rounded font-label-sm text-label-sm text-on-surface-variant">
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" />
                          Unsaved Changes
                      </div>
      </div>
      {/* Form Container */}
      <form className="space-y-margin">
      {/* Section 1: Personal Information */}
      <div className="bg-surface border border-outline-variant rounded-lg p-margin shadow-sm">
      <h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2 mb-4 flex items-center gap-2">
      <User className="text-primary" aria-hidden={true} focusable="false" />
                              Personal Information
                          </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <div className="md:col-span-2">
      <label className="block font-label-md text-label-md text-on-surface mb-unit">
                                      Full Legal Name <span className="text-error">*</span>
      </label>
      <input className="w-full px-3 py-2 bg-surface border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" placeholder="Last, First Middle" type="text" defaultValue="Jane Doe" />
      </div>
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-unit">
                                      Date of Birth <span className="text-error">*</span>
      </label>
      <div className="relative">
      <input className="w-full pl-3 pr-10 py-2 bg-surface border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors appearance-none" type="date" defaultValue="1985-04-12" />
      <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-unit">
                                      Biological Gender <span className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full pl-3 pr-10 py-2 bg-surface border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors appearance-none">
      <option value="">Select...</option>
      <option value="M">Male</option>
      <option selected={true} value="F">Female</option>
      <option value="O">Other/Undisclosed</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      {/* Section 2: Intake Details (Focus state demonstrated here with Error) */}
      <div className="bg-surface border border-outline-variant rounded-lg p-margin shadow-sm">
      <h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2 mb-4 flex items-center gap-2">
      <BadgeHelp className="text-primary" aria-hidden={true} focusable="false" />
                              Intake Details
                          </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="md:col-span-2">
      <label className="block font-label-md text-label-md text-error mb-unit">
                                      Reason for Visit <span className="text-error">*</span>
      </label>
      <textarea className="w-full px-3 py-2 bg-error-container/10 border-2 border-error rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-error focus:ring-1 focus:ring-error transition-colors resize-none" placeholder="Primary complaint or objective..." rows={3}></textarea>
      <p className="font-body-sm text-body-sm text-error mt-unit flex items-center gap-1">
      <CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                      This field is required to proceed with intake.
                                  </p>
      </div>
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-unit">
                                      Priority Level
                                  </label>
      <div className="relative">
      <select className="w-full pl-3 pr-10 py-2 bg-surface border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors appearance-none">
      <option selected={true} value="routine">Routine (Low)</option>
      <option value="urgent">Urgent (Medium)</option>
      <option value="stat">STAT (High)</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      <div className="mt-4 p-3 bg-surface-container-low border border-outline-variant rounded flex items-start gap-2">
      <Info className="text-primary text-[18px] mt-0.5" aria-hidden={true} focusable="false" />
      <p className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Priority dictates queue placement. Ensure clinical justification for STAT.</p>
      </div>
      </div>
      </div>
      </div>
      {/* Section 3: Contact Information */}
      <div className="bg-surface border border-outline-variant rounded-lg p-margin shadow-sm">
      <h3 className="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2 mb-4 flex items-center gap-2">
      <BadgeHelp className="text-primary" aria-hidden={true} focusable="false" />
                              Contact Information
                          </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-unit">
                                      Primary Phone
                                  </label>
      <div className="relative">
      <BadgeHelp className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" aria-hidden={true} focusable="false" />
      <input className="w-full pl-10 pr-3 py-2 bg-surface border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" placeholder="(XXX) XXX-XXXX" type="tel" defaultValue="(555) 123-4567" />
      </div>
      </div>
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-unit">
                                      Email Address
                                  </label>
      <div className="relative">
      <BadgeHelp className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" aria-hidden={true} focusable="false" />
      <input className="w-full pl-10 pr-3 py-2 bg-surface border border-outline-variant rounded font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" placeholder="patient@domain.com" type="email" defaultValue="jane.doe@example.com" />
      </div>
      </div>
      </div>
      </div>
      {/* Action Bar */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-outline-variant">
      <button className="px-4 py-2 border border-outline-variant rounded text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors focus:outline-none focus:ring-2 focus:ring-outline" id="ACT_CANCEL_EDIT" type="button" data-action-id="cancel-2" onClick={actions?.["cancel-2"]}>
                              Cancel
                          </button>
      <button className="px-6 py-2 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-2" id="ACT_SAVE_RECORD" type="button" data-action-id="save-patient-3" onClick={actions?.["save-patient-3"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                              Save Patient
                          </button>
      </div>
      </form>
      </div>
      </main>
    </>
  );
}
