/**
 * Lightweight CSS/SVG mockups for each project card.
 * Each visual is self-contained and takes the full card width/height.
 */

function GridBg() {
  return (
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
  );
}

export function EcommerceVisual() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-ink-800 to-ink-900 overflow-hidden p-3">
      <GridBg />
      {/* Top bar */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="h-2 w-16 rounded bg-white/15" />
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-md bg-accent-500/20 border border-accent-500/20" />
        </div>
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="rounded-lg bg-ink-850/80 border border-white/[0.06] p-1.5 space-y-1">
            <div className="h-8 rounded bg-gradient-to-br from-accent-500/15 to-violet2-500/15" />
            <div className="h-1.5 w-3/4 rounded bg-white/15" />
            <div className="h-1.5 w-1/2 rounded bg-accent-500/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactsVisual() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-ink-800 to-ink-900 overflow-hidden p-3 flex gap-2">
      <GridBg />
      {/* Sidebar */}
      <div className="relative w-1/3 space-y-1.5">
        <div className="h-2 w-3/4 rounded bg-white/15" />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1.5 py-1">
            <div className="w-4 h-4 rounded-full bg-accent-500/20" />
            <div className="flex-1 space-y-0.5">
              <div className="h-1.5 w-3/4 rounded bg-white/10" />
              <div className="h-1 w-1/2 rounded bg-white/[0.07]" />
            </div>
          </div>
        ))}
      </div>
      {/* Main panel */}
      <div className="relative flex-1 rounded-lg bg-ink-850/80 border border-white/[0.06] p-2.5 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-500/25 to-violet2-500/25" />
          <div className="space-y-1">
            <div className="h-1.5 w-20 rounded bg-white/15" />
            <div className="h-1 w-16 rounded bg-white/[0.08]" />
          </div>
        </div>
        <div className="h-px bg-white/[0.06]" />
        <div className="space-y-1.5">
          <div className="h-1.5 w-1/3 rounded bg-white/10" />
          <div className="h-1.5 w-1/2 rounded bg-white/10" />
          <div className="h-1.5 w-2/5 rounded bg-white/10" />
        </div>
        <div className="flex gap-1.5 pt-1">
          <div className="h-5 w-12 rounded-md bg-accent-500/20 border border-accent-500/20" />
          <div className="h-5 w-12 rounded-md bg-white/[0.05] border border-white/[0.07]" />
        </div>
      </div>
    </div>
  );
}

export function TodoVisual() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-ink-800 to-ink-900 overflow-hidden p-3 flex flex-col">
      <GridBg />
      {/* Header */}
      <div className="relative flex items-center justify-between mb-2.5">
        <div className="h-2.5 w-20 rounded bg-accent-500/30" />
        <div className="h-5 w-16 rounded-md bg-white/[0.05] border border-white/[0.07]" />
      </div>
      {/* Search bar */}
      <div className="relative h-6 rounded-lg bg-ink-850/80 border border-white/[0.06] flex items-center px-2 mb-2.5">
        <div className="w-3 h-3 rounded-full border border-white/20 mr-2" />
        <div className="h-1.5 w-1/2 rounded bg-white/10" />
      </div>
      {/* Filter pills */}
      <div className="relative flex gap-1.5 mb-2.5">
        <div className="h-5 w-12 rounded-md bg-accent-500/20 border border-accent-500/20" />
        <div className="h-5 w-10 rounded-md bg-white/[0.05] border border-white/[0.07]" />
        <div className="h-5 w-10 rounded-md bg-white/[0.05] border border-white/[0.07]" />
      </div>
      {/* Task list */}
      <div className="relative flex-1 space-y-1.5">
        {[
          { pri: 'bg-red-400/60', w: 'w-3/4', done: false },
          { pri: 'bg-yellow-400/60', w: 'w-2/3', done: false },
          { pri: 'bg-green-400/60', w: 'w-3/5', done: true },
          { pri: 'bg-red-400/60', w: 'w-1/2', done: false },
        ].map((task, i) => (
          <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-ink-850/60 border border-white/[0.05]">
            <div className={`w-3.5 h-3.5 rounded border ${task.done ? 'border-accent-500/40 bg-accent-500/20' : 'border-white/15'}`} />
            <div className={`h-1.5 ${task.w} rounded ${task.done ? 'bg-white/[0.06]' : 'bg-white/12'}`} />
            <div className="ml-auto flex items-center gap-1">
              <div className={`w-1.5 h-1.5 rounded-full ${task.pri}`} />
              <div className="h-1.5 w-8 rounded bg-white/[0.06]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const PROJECT_VISUALS = {
  ecommerce: EcommerceVisual,
  contacts: ContactsVisual,
  todo: TodoVisual,
} as const;
