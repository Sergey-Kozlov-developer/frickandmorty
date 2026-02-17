import Hamburger from "@shared/ui/hamburger/hamburger";
import LogoIcon from "@shared/ui/logo-icon/logo-icon";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@shared/ui/shadcn/navigation-menu";
import { MenuIcon } from "lucide-react";

import { Link } from "react-router";

export const Header = () => {
    const navs = [
        { id: 1, path: "/", title: "Home" },
        { id: 2, path: "/about", title: "Abouts" },
        { id: 3, path: "/support", title: "Support Us" },
    ];
    return (
        <div className="sticky-nav">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/">
                        <LogoIcon />
                    </Link>
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            {navs.map((nav) => (
                                <NavigationMenuItem key={nav.id}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to={nav.path}
                                            className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                                        >
                                            {nav.title}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex items-center gap-2 sm:hidden">
                        <Hamburger icon={<MenuIcon />} listNav={navs} />
                    </div>
                </div>
            </div>
        </div>
    );
};
