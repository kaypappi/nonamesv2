
import { SiteFooter } from "@/components/layouts/site-footer"
import { SiteHeader } from "@/components/layouts/site-header"

interface LobbyLayoutProps {
  children: React.ReactNode
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  
  return (
    <div className="relative flex min-h-screen flex-col ">
      <SiteHeader />
      <main className=" ">{children}</main>
      <SiteFooter />
    </div>
  )
}
