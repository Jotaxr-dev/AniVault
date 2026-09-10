interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Buscar animes..."
                className="w-full max-w-md mx-auto block border border-gray-300 rounded-ld px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

        </>
    );
}