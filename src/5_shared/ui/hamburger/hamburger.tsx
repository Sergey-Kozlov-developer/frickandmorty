import { cn } from "@shared/lib/utils";
import type { IHamburgerProps } from "@shared/types/ui";
import { Button } from "@shared/ui/shadcn/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@shared/ui/shadcn/sheet";
import { memo, useCallback, useState } from "react";

import { Link } from "react-router";

const Hamburger = memo(
    ({
        icon,
        listNav,
        triggerClassName,
        contentClassName,
        onItemClick,
    }: IHamburgerProps) => {
        const [open, setOpen] = useState(false);

        const handleItemClick = useCallback(() => {
            setOpen(false);
            onItemClick?.();
        }, [onItemClick]);
        return (
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn("sm:hidden", triggerClassName)}
                        aria-label="Открыть меню"
                    >
                        {icon}
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="right"
                    className={cn("w-75 sm:w-100", contentClassName)}
                >
                    <nav className="flex flex-col space-y-2 mt-8">
                        <SheetTitle />
                        <SheetDescription />
                        {listNav.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                onClick={handleItemClick}
                                className={cn(
                                    "flex items-center space-x-3 py-3 px-4 rounded-lg",
                                    "hover:bg-accent transition-colors",
                                    "text-lg font-medium"
                                )}
                            >
                                {item.icon && (
                                    <span className="text-muted-foreground w-5 h-5">
                                        {item.icon}
                                    </span>
                                )}
                                <span>{item.title}</span>
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        );
    }
);

export default Hamburger;
