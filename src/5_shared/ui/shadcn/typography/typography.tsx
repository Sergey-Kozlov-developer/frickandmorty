import { cn } from "@shared/lib/utils";
import { forwardRef } from "react";

export const H1 = forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h1
        ref={ref}
        className={cn(
            "scroll-m-20 tableext-3xl font-extrabold tracking-tight sm:text-4xl sm:w-10/12 md:text-5xl md:w-9/12 lg:text-6xl lg:w-8/12 xl:text-7xl xl:w-7/12 2xl:text-8xl 2xl:w-6/12",
            className
        )}
        {...props}
    />
));
H1.displayName = "H1";
