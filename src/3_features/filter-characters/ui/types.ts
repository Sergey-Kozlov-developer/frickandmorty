// Reusable Select Filter Component
export interface ISelectFilterProps {
    label: string;
    value: string | undefined;
    placeholder: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
}

// Reusable Text Filter Component
export interface ITextFilterProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    onApply: () => void;
}
