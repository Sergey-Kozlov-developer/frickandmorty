import { useFilterStore } from "@features/character/model/filter-store";
import { SelectFilter } from "@features/filter-characters";
import { TextFilter } from "@features/filter-characters/ui/text-filter";
import { Button } from "@shared/ui/shadcn/button";
import { useCallback, useState } from "react";

export const FilterCharacters = () => {
    const { filters, setStatus, setGender, setSpecies, setType, resetFilters } =
        useFilterStore();

    const [speciesValue, setSpeciesValue] = useState(filters.species || "");
    const [typeValue, setTypeValue] = useState(filters.type || "");

    const handleSpeciesApply = useCallback(() => {
        setSpecies(speciesValue);
    }, [speciesValue, setSpecies]);

    const handleTypeApply = useCallback(() => {
        setType(typeValue);
    }, [typeValue, setType]);

    const hasActiveFilters =
        filters.status || filters.gender || filters.species || filters.type;

    const statusOptions = [
        { value: "All", label: "All" },
        { value: "Alive", label: "Alive" },
        { value: "Dead", label: "Dead" },
        { value: "unknown", label: "unknown" },
    ];

    const genderOptions = [
        { value: "All", label: "All" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "unknown", label: "unknown" },
    ];

    return (
        <div className="flex flex-wrap gap-4 items-end">
            <SelectFilter
                label="Status"
                value={filters.status}
                placeholder="Filter by status"
                options={statusOptions}
                onChange={setStatus}
            />

            <SelectFilter
                label="Gender"
                value={filters.gender}
                placeholder="Filter by gender"
                options={genderOptions}
                onChange={setGender}
            />

            <TextFilter
                label="Species"
                placeholder="Enter species..."
                value={speciesValue}
                onChange={setSpeciesValue}
                onApply={handleSpeciesApply}
            />

            <TextFilter
                label="Type"
                placeholder="Enter type..."
                value={typeValue}
                onChange={setTypeValue}
                onApply={handleTypeApply}
            />

            {hasActiveFilters && (
                <Button onClick={resetFilters} variant="outline" size="sm">
                    Reset Filters
                </Button>
            )}
        </div>
    );
};
