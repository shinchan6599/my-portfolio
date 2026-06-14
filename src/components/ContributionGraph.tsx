"use client";

export type ContributionDay = {
  date: string;
  count: number;
  level: number; // 0–4
};

// GitHub-style level → colour. Slate for empty days, emerald scale for activity.
const LEVEL_CLASSES = [
  "bg-slate-200 dark:bg-slate-800",
  "bg-emerald-200 dark:bg-emerald-900",
  "bg-emerald-400 dark:bg-emerald-700",
  "bg-emerald-500 dark:bg-emerald-500",
  "bg-emerald-600 dark:bg-emerald-400",
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export default function ContributionGraph({ days }: { days: ContributionDay[] }) {
  if (!days?.length) return null;

  // Pad the start so the first column begins on the correct weekday (Sun = 0).
  const firstWeekday = new Date(`${days[0].date}T00:00:00`).getDay();
  const cells: (ContributionDay | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...days,
  ];

  // Split into week columns of 7 days each.
  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  // Month labels: show a month name above the first week it appears in.
  const monthLabels = weeks.map((week, i) => {
    const firstReal = week.find((d): d is ContributionDay => d !== null);
    if (!firstReal) return null;
    const month = new Date(`${firstReal.date}T00:00:00`).getMonth();
    if (i === 0) return MONTHS[month];
    const prev = weeks[i - 1].find((d): d is ContributionDay => d !== null);
    const prevMonth = prev ? new Date(`${prev.date}T00:00:00`).getMonth() : month;
    return month !== prevMonth ? MONTHS[month] : null;
  });

  return (
    <div className="overflow-x-auto pb-2">
      <div className="inline-flex flex-col gap-1 min-w-max">
        {/* Month labels */}
        <div className="flex gap-1 pl-1">
          {monthLabels.map((label, i) => (
            <div key={i} className="w-3 text-[10px] text-[var(--muted)]">
              {label ?? ""}
            </div>
          ))}
        </div>

        {/* Week columns */}
        <div className="flex gap-1">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day, di) => (
                <div
                  key={di}
                  title={
                    day
                      ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                      : undefined
                  }
                  className={`w-3 h-3 rounded-sm ${
                    day ? LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0] : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 mt-1 text-[10px] text-[var(--muted)]">
          <span>Less</span>
          {LEVEL_CLASSES.map((cls, i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${cls}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
