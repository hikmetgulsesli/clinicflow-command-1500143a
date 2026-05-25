// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Patient Operations - ClinicFlow Command
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CircleHelp, LayoutDashboard, ListFilter, LogOut, Pencil, Plus, Search, Settings, X } from "lucide-react";


export type PatientOperationsClinicflowCommandActionId = "notifications-1" | "create-patient-2" | "edit-3" | "edit-4" | "edit-5" | "retry-connection-6" | "add-first-patient-7" | "close-8" | "view-chart-9" | "update-status-10" | "operations-1" | "editor-2" | "queue-3" | "insights-4" | "settings-5" | "help-6" | "logout-7";

export interface PatientOperationsClinicflowCommandProps {
  actions?: Partial<Record<PatientOperationsClinicflowCommandActionId, () => void>>;
}

export function PatientOperationsClinicflowCommand({ actions }: PatientOperationsClinicflowCommandProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="fixed h-full w-[240px] left-0 top-0 bg-primary dark:bg-primary border-r border-outline-variant flex flex-col h-full py-4 z-40">
      <div className="px-margin mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary font-headline-md">CF</div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-primary">ClinicFlow Command</h1>
      <p className="font-label-sm text-label-sm text-on-primary-container/70">Medical Operations</p>
      </div>
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-3">
      {/* Active State: Operations */}
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-primary font-bold bg-primary-container/20 transition-colors" href="#" data-action-id="operations-1" onClick={actions?.["operations-1"]}>
      <LayoutDashboard className="font-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Operations</span>
      </a>
      {/* Inactive States */}
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="editor-2" onClick={actions?.["editor-2"]}>
      <Pencil className="font-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Editor</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="queue-3" onClick={actions?.["queue-3"]}>
      <BadgeHelp className="font-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Queue</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="insights-4" onClick={actions?.["insights-4"]}>
      <BarChart3 className="font-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="settings-5" onClick={actions?.["settings-5"]}>
      <Settings className="font-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      </nav>
      <div className="px-3 mt-auto flex flex-col gap-1 border-t border-outline-variant/20 pt-4">
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="help-6" onClick={actions?.["help-6"]}>
      <CircleHelp className="font-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Help</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT text-on-primary-container/70 hover:bg-primary-container/10 transition-colors" href="#" data-action-id="logout-7" onClick={actions?.["logout-7"]}>
      <LogOut className="font-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Logout</span>
      </a>
      </div>
      </aside>
      {/* Main Content Area Wrapper */}
      <div className="flex-1 ml-[240px] flex flex-col h-full bg-surface-container-low relative">
      {/* TopNavBar */}
      <header className="fixed top-0 right-0 h-[56px] w-[calc(100%-240px)] bg-surface dark:bg-surface border-b border-outline-variant flex items-center justify-between px-gutter z-30 transition-colors duration-200">
      {/* Search on Left */}
      <div className="flex items-center flex-1 max-w-md relative">
      <Search className="absolute left-3 text-on-surface-variant font-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full pl-9 pr-4 py-1.5 bg-surface-container rounded-DEFAULT border-none text-body-sm font-body-sm text-on-surface focus:ring-1 focus:ring-secondary placeholder:text-on-surface-variant/60" placeholder="Search patients, IDs, or staff..." type="text" />
      </div>
      {/* Actions */}
      <div className="flex items-center gap-4">
      <button className="w-8 h-8 rounded-full hover:bg-surface-container-highest flex items-center justify-center text-on-surface-variant transition-colors relative" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border border-surface"></span>
      </button>
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-outline-variant">
      <span className="font-label-sm text-label-sm text-on-primary font-bold">MD</span>
      </div>
      </div>
      </header>
      {/* Scrollable Content Canvas */}
      <main className="flex-1 mt-[56px] p-container-padding overflow-y-auto">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-margin">
      <div>
      <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">Patient Operations</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Real-time status and routing for current shift.</p>
      </div>
      <button className="bg-primary text-on-primary px-4 py-2 rounded-DEFAULT font-label-md text-label-md flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm" type="button" data-action-id="create-patient-2" onClick={actions?.["create-patient-2"]}>
      <Plus className="font-[18px]" aria-hidden={true} focusable="false" />
                          Create Patient
                      </button>
      </div>
      {/* Summary Metrics Bento */}
      <div className="grid grid-cols-4 gap-gutter mb-margin">
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-3 flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Active</span>
      <span className="font-headline-lg text-headline-lg font-bold text-primary">142</span>
      </div>
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-3 flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">In Triage</span>
      <span className="font-headline-lg text-headline-lg font-bold text-secondary">28</span>
      </div>
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-3 flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Roomed</span>
      <span className="font-headline-lg text-headline-lg font-bold text-primary">89</span>
      </div>
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-3 flex flex-col">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Discharged (24h)</span>
      <span className="font-headline-lg text-headline-lg font-bold text-on-surface-variant">315</span>
      </div>
      </div>
      {/* Main Layout Grid: Table + Detail Panel */}
      <div className="grid grid-cols-12 gap-margin items-start">
      {/* Primary List Area (Col 1-8) */}
      <div className="col-span-8 flex flex-col gap-margin">
      {/* Filters */}
      <div className="flex items-center gap-3 bg-surface border border-outline-variant p-2 rounded-DEFAULT">
      <ListFilter className="text-on-surface-variant font-[18px] ml-2" aria-hidden={true} focusable="false" />
      <select className="bg-transparent border-none text-body-sm font-body-sm text-on-surface focus:ring-0 py-1 pl-2 pr-8 rounded cursor-pointer hover:bg-surface-container">
      <option>All Statuses</option>
      <option>Triage</option>
      <option>Waiting</option>
      <option>Roomed</option>
      </select>
      <div className="w-[1px] h-4 bg-outline-variant mx-1"></div>
      <select className="bg-transparent border-none text-body-sm font-body-sm text-on-surface focus:ring-0 py-1 pl-2 pr-8 rounded cursor-pointer hover:bg-surface-container">
      <option>All Providers</option>
      <option>Dr. Smith</option>
      <option>Dr. Jones</option>
      </select>
      <div className="w-[1px] h-4 bg-outline-variant mx-1"></div>
      <select className="bg-transparent border-none text-body-sm font-body-sm text-on-surface focus:ring-0 py-1 pl-2 pr-8 rounded cursor-pointer hover:bg-surface-container">
      <option>All Departments</option>
      <option>Emergency</option>
      <option>Cardiology</option>
      </select>
      </div>
      {/* Dense Data Table */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT overflow-hidden">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-outline-variant bg-surface-container-lowest">
      <th className="p-table-cell-padding font-label-md text-label-md text-on-surface-variant">Patient / ID</th>
      <th className="p-table-cell-padding font-label-md text-label-md text-on-surface-variant">Status</th>
      <th className="p-table-cell-padding font-label-md text-label-md text-on-surface-variant">Provider</th>
      <th className="p-table-cell-padding font-label-md text-label-md text-on-surface-variant">Location</th>
      <th className="p-table-cell-padding font-label-md text-label-md text-on-surface-variant text-right">Wait</th>
      <th className="p-table-cell-padding w-10"></th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm">
      {/* Row 1 - Active/Selected */}
      <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors bg-secondary-container/10 group cursor-pointer">
      <td className="p-table-cell-padding">
      <div className="font-medium text-on-surface">John Doe</div>
      <div className="text-on-surface-variant font-label-sm mt-0.5">MRN-89234</div>
      </td>
      <td className="p-table-cell-padding">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Roomed</span>
      </td>
      <td className="p-table-cell-padding text-on-surface">Dr. A. Smith</td>
      <td className="p-table-cell-padding text-on-surface">Exam 4</td>
      <td className="p-table-cell-padding text-right text-on-surface-variant">12m</td>
      <td className="p-table-cell-padding text-center">
      <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors" type="button" data-action-id="edit-3" onClick={actions?.["edit-3"]}>
      <Pencil className="font-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors group cursor-pointer">
      <td className="p-table-cell-padding">
      <div className="font-medium text-on-surface">Sarah Connor</div>
      <div className="text-on-surface-variant font-label-sm mt-0.5">MRN-89235</div>
      </td>
      <td className="p-table-cell-padding">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">Triage</span>
      </td>
      <td className="p-table-cell-padding text-on-surface-variant italic">Unassigned</td>
      <td className="p-table-cell-padding text-on-surface">Waiting Rm B</td>
      <td className="p-table-cell-padding text-right font-bold text-error">45m</td>
      <td className="p-table-cell-padding text-center">
      <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors" type="button" data-action-id="edit-4" onClick={actions?.["edit-4"]}>
      <Pencil className="font-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="border-b border-outline-variant/50 hover:bg-surface-container-low transition-colors group cursor-pointer">
      <td className="p-table-cell-padding">
      <div className="font-medium text-on-surface">Miles Dyson</div>
      <div className="text-on-surface-variant font-label-sm mt-0.5">MRN-89236</div>
      </td>
      <td className="p-table-cell-padding">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">Waiting</span>
      </td>
      <td className="p-table-cell-padding text-on-surface">Dr. T. Weaver</td>
      <td className="p-table-cell-padding text-on-surface">Lobby</td>
      <td className="p-table-cell-padding text-right text-on-surface-variant">05m</td>
      <td className="p-table-cell-padding text-center">
      <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors" type="button" data-action-id="edit-5" onClick={actions?.["edit-5"]}>
      <Pencil className="font-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Empty State / Error Example (Hidden by default for visual structure, shown here as block to fulfill prompt requirement, ideally would toggle) */}
      <div className="bg-surface border border-outline-variant border-dashed rounded-DEFAULT p-8 flex flex-col items-center justify-center text-center mt-4">
      <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mb-4 text-on-surface-variant">
      <BadgeHelp className="font-[24px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">No Patients Found</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-4">There are currently no patients matching these filters, or the list is empty.</p>
      <div className="flex gap-3">
      <button className="border border-outline text-on-surface px-4 py-1.5 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container transition-colors" type="button" data-action-id="retry-connection-6" onClick={actions?.["retry-connection-6"]}>
                                      Retry Connection
                                  </button>
      <button className="bg-primary text-on-primary px-4 py-1.5 rounded-DEFAULT font-label-md text-label-md hover:bg-primary/90 transition-colors" type="button" data-action-id="add-first-patient-7" onClick={actions?.["add-first-patient-7"]}>
                                      Add First Patient
                                  </button>
      </div>
      </div>
      </div>
      {/* Detail Panel (Col 9-12) */}
      <div className="col-span-4 bg-surface border border-outline-variant rounded-DEFAULT flex flex-col h-[calc(100vh-220px)] sticky top-[72px]">
      {/* Header */}
      <div className="p-4 border-b border-outline-variant flex justify-between items-start">
      <div>
      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">John Doe</h3>
      <div className="font-label-sm text-label-sm text-on-surface-variant mt-1 flex items-center gap-2">
      <span>MRN-89234</span>
      <span className="w-1 h-1 rounded-full bg-outline"></span>
      <span>M, 45 yrs</span>
      </div>
      </div>
      <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors" type="button" data-action-id="close-8" onClick={actions?.["close-8"]}>
      <X className="font-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Content Scrollable */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2">
      <div className="bg-surface-container-low p-2 rounded border border-outline-variant/30">
      <div className="font-label-sm text-label-sm text-on-surface-variant mb-0.5">Acuity Level</div>
      <div className="font-body-md text-body-md font-medium text-secondary">Level 2 (Emergent)</div>
      </div>
      <div className="bg-surface-container-low p-2 rounded border border-outline-variant/30">
      <div className="font-label-sm text-label-sm text-on-surface-variant mb-0.5">Chief Complaint</div>
      <div className="font-body-md text-body-md font-medium text-on-surface">Chest Pain</div>
      </div>
      </div>
      {/* Activity Timeline */}
      <div>
      <h4 className="font-label-md text-label-md font-semibold text-on-surface mb-4 uppercase tracking-wider">Activity History</h4>
      <div className="relative border-l-2 border-surface-container-highest ml-3 flex flex-col gap-4 pb-4">
      {/* Timeline Item */}
      <div className="relative pl-6">
      <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-1 border-2 border-surface"></div>
      <div className="font-body-sm text-body-sm font-medium text-on-surface">Roomed - Exam 4</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Nurse Jenkins • 12m ago</div>
      </div>
      {/* Timeline Item */}
      <div className="relative pl-6">
      <div className="absolute w-3 h-3 bg-surface-container-highest rounded-full -left-[7px] top-1 border-2 border-surface"></div>
      <div className="font-body-sm text-body-sm text-on-surface">Vitals Recorded</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Tech A. • 25m ago</div>
      </div>
      {/* Timeline Item */}
      <div className="relative pl-6">
      <div className="absolute w-3 h-3 bg-surface-container-highest rounded-full -left-[7px] top-1 border-2 border-surface"></div>
      <div className="font-body-sm text-body-sm text-on-surface">Checked In / Triage</div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Front Desk • 45m ago</div>
      </div>
      </div>
      </div>
      </div>
      {/* Panel Footer Actions */}
      <div className="p-4 border-t border-outline-variant bg-surface-container-lowest flex gap-2">
      <button className="flex-1 border border-outline text-on-surface py-1.5 rounded-DEFAULT font-label-md text-label-md hover:bg-surface-container transition-colors" type="button" data-action-id="view-chart-9" onClick={actions?.["view-chart-9"]}>
                                  View Chart
                              </button>
      <button className="flex-1 bg-secondary text-on-secondary py-1.5 rounded-DEFAULT font-label-md text-label-md hover:bg-secondary/90 transition-colors" type="button" data-action-id="update-status-10" onClick={actions?.["update-status-10"]}>
                                  Update Status
                              </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
