import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";

export default function NavMenu(props: NavigationMenuProps) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="flex justify-center items-center gap-12">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link className="font-bold text-lg" href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link className="font-bold text-lg" href="/chat">Chat</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <Link className="font-bold text-lg" href="/about">About</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
