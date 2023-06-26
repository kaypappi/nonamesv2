import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Combobox } from "@/components/UI/combobox"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/layouts/main-nav"
import { MobileNav } from "@/components/layouts/mobile-nav"

interface SiteHeaderProps {
  user: User | null
}

export function SiteHeader() {

  return (
    <header className="sticky top-0 z-40 w-full bg-black bg-opacity-60 py-4">
      <div className="container flex h-16 items-center">
        <MainNav items={siteConfig.mainNav} />
        <MobileNav
          mainNavItems={siteConfig.mainNav}
          sidebarNavItems={siteConfig.mainNav}
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">

            <Link href="/signin">
              <div
                className={buttonVariants({
                variant:"default"
                })}
              >
                Create Account
                <span className="sr-only">Create Account</span>
              </div>
            </Link>

          </nav>
        </div>
      </div>
    </header>
  )

}
