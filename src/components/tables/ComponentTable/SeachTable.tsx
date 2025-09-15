interface SearchTableProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchTable({ value, onChange }: SearchTableProps) {
  return (
    <div className="form-control w-full max-w-xs  ml-auto">
      <label className="input input-bordered flex items-center gap-2">
        <span className="icon-[tabler--search] text-base-content/80 size-5 shrink-0"></span>
        <input
          type="search"
          className="grow"
          placeholder="Search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
