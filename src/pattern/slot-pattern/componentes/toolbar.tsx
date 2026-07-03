type ToolbarProps = {
  start: React.ReactNode;
  center: React.ReactNode;
  end: React.ReactNode;
};

export default function Toolbar({ start, center, end }: ToolbarProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-200 p-4 gap-4 w-full">
      <div>{start}</div>
      <div className="overflow-y-scroll h-12">{center}</div>
      <div>{end}</div>
    </div>
  );
}
