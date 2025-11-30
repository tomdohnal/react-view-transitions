interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

function TabButton({
  label,
  isActive,
  onClick,
  className = "",
}: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-semibold ${
        isActive
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-400 hover:text-gray-200"
      } ${className}`}
    >
      {label}
    </button>
  );
}

export default TabButton;
