import { ITabs, Tab } from "../../types";

export default function Tabs({ tabs, selectedTab, onChange }: ITabs) {
  return (
    <div className="flex justify-center mt-6">
      {tabs.map((tab: Tab) => (
        <button
          key={tab.value}
          className={`px-4 py-2 mx-2 font-medium text-sm rounded-md ${
            selectedTab === tab.value ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
