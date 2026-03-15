interface TimelineItem {
  role: string;
  years: string;
}

interface Props {
  items: TimelineItem[];
  label: string;
}

const Timeline = ({ items, label }: Props) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-widest mb-6 text-text-secondary">
      {label}
    </p>
    <div className="flex flex-col sm:flex-row items-start w-full">
      {items.map((item, i) => (
        <div
          key={item.role}
          className="flex sm:flex-row sm:items-center sm:flex-1 sm:last:flex-none flex-col items-start w-full sm:w-auto"
        >
          <div className="flex sm:flex-col sm:items-center items-center gap-3 sm:gap-0">
            <div className="w-3 h-3 rounded-full shrink-0 sm:mb-3 transition-all duration-300 bg-accent-primary" />
            <div className="flex sm:flex-col sm:items-center sm:text-center">
              <span className="text-sm font-semibold leading-tight sm:mb-1 text-text-primary">
                {item.role}
              </span>
              <span className="text-xs ml-2 sm:ml-0 text-text-secondary">
                {item.years}
              </span>
            </div>
          </div>
          {i < items.length - 1 && (
            <div className="w-px sm:w-auto sm:flex-1 h-6 sm:h-px ml-[5px] sm:ml-0 sm:mx-2 sm:mt-[-24px] bg-border-subtle" />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
