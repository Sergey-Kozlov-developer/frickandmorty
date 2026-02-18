import { Button } from "@shared/ui/shadcn/button";
import { Field } from "@shared/ui/shadcn/field";
import { Input } from "@shared/ui/shadcn/input";

export const SearchCharacter = () => {
    return (
        <>
            <Field orientation="horizontal">
                <Input
                    type="search"
                    placeholder="Enter name..."
                    className="w-auto"
                />
                <Button>Search</Button>
            </Field>
        </>
    );
};
