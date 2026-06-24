import { useState } from "react";

const Tab = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const TabPanel = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{children}</div>;
};

function TabItem({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
  isActive?: boolean;
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <button onClick={() => setIsActive(!isActive)} className="border py-1 px-1">{title}</button>
      {isActive && <div>{children}</div>}
    </div>
  );
}

Tab.TabPanel = TabPanel;
Tab.TabItem = TabItem;

export default Tab;
