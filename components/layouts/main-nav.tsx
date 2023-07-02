"use client"

import * as React from "react"
import Link from "next/link"
import type { MainNavItem } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator
} from "@/components/ui/navigation-menu"
import { Icon } from "@/components/icons"

interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="hidden gap-6 lg:flex w-full">
      <Link
        aria-label="Home"
        href="/"
        className="hidden items-center space-x-2 lg:flex"
      >
        <Icon className="h-10 w-28 text-white" name="logo" aria-hidden="true" />

      </Link>
      <NavigationMenu className="  w-full mx-auto">
        <NavigationMenuList className="gap-10" >
          {items?.map((item) =>
              item?.items ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="h-auto capitalize bg-transparent font-extralight text-white text-opacity-40 hover:text-opacity-80 hover:bg-transparent hover:text-white hover:bg-opacity-0 ">
                    {item.title}
                  </NavigationMenuTrigger>
                  
                </NavigationMenuItem>
              ) : (
                item.href && (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={` bg-transparent font-extralight text-white text-opacity-40 hover:text-opacity-80 hover:bg-transparent hover:text-white `}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )
            )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-opacity-80 hover:bg-transparent hover:text-white hover:bg-opacity-0 focus:bg-transparent focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
