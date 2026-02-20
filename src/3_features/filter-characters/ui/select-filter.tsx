import type { ISelectFilterProps } from "@features/filter-characters/ui/types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@shared/ui/shadcn/select";
import { useCallback } from "react";

export const SelectFilter = ({
    label,
    value,
    placeholder,
    options,
    onChange,
}: ISelectFilterProps) => {
    const handleChange = useCallback(
        (val: string) => {
            onChange(val === "All" ? "" : val);
        },
        [onChange]
    );

    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm text-muted-foreground">{label}</label>
            <Select value={value || "All"} onValueChange={handleChange}>
                <SelectTrigger className="w-full max-w-48">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{label}</SelectLabel>
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
