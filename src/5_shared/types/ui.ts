import type { ReactNode } from "react";

export interface IHamburger {
    id: number;
    path: string;
    title: string;
    icon?: ReactNode;
}

export interface IHamburgerProps {
    icon: ReactNode;
    listNav: IHamburger[];
    triggerClassName?: string;
    contentClassName?: string;
    onItemClick?: () => void;
}
