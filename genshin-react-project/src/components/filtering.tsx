type FilterGroupProps = {
  title: string;
  selected: string[];
  options: string[];
  onChange: (value: string[]) => void;
};

export default function FilterGroup({
  title,
  selected,
  options,
  onChange,
}: FilterGroupProps) {
  function toggleOption(option: string) {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item != option));
    } else {
      onChange([...selected, option]);
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggleOption(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}
