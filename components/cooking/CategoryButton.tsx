type Props = {
  isOpen: boolean;
  label: string;
  onClick: () => void;
};

export default function CategoryButton({ isOpen, label, onClick }: Props) {
  return (
    <button
      className={`w-full text-left bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2`}
      aria-expanded={isOpen}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
