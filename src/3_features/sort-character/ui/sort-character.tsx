import { useFilterStore } from "@features/character/model/filter-store";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@shared/ui/shadcn/select";
import { useCallback } from "react";

export const SortCharacter = () => {
    const { filters, setStatus, setGender, setSpecies, setType } =
        useFilterStore();

    const handleStatusChange = useCallback(
        (value: string) => {
            if (value === "All") {
                setStatus("");
            } else {
                setStatus(value as "Alive" | "Dead" | "unknown" | "");
            }
        },
        [setStatus]
    );

    return (
        <div className="flex gap-10">
            <Select value={filters?.status} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-full max-w-48">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Alive">Alive</SelectItem>
                        <SelectItem value="Dead">Dead</SelectItem>
                        <SelectItem value="unknown">unknown</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                </SelectContent>
            </Select>
            {/* TODO: после подключения API сделать select через массив и map */}
            {/* <Select>
                <SelectTrigger className="w-full max-w-48">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                        <SelectLabel>Vegetables</SelectLabel>
                        <SelectItem value="carrot">Carrot</SelectItem>
                        <SelectItem value="broccoli">Broccoli</SelectItem>
                        <SelectItem value="spinach">Spinach</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select> */}
        </div>
    );
};
