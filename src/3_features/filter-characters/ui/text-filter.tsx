import type { ITextFilterProps } from "@features/filter-characters/ui/types";
import { Button } from "@shared/ui/shadcn/button";
import { Input } from "@shared/ui/shadcn/input";
import { useCallback } from "react";

export const TextFilter = ({
    label,
    placeholder,
    value,
    onChange,
    onApply,
}: ITextFilterProps) => {
    // нажатие Enter на клавиатуре
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                onApply();
            }
        },
        [onApply]
    );
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
        },
        [onChange]
    );

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm text-muted-foreground">{label}</label>
            <div className="flex gap-3">
                <Input
                    type="text"
                    placeholder={placeholder}
                    className="w-full max-w-48"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <Button onClick={onApply} size="sm">
                    Apply
                </Button>
            </div>
        </div>
    );
};
