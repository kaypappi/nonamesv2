
import { useAuth } from "@/auth/hooks";
import { ServerAuthProvider } from "@/auth/server-auth-provider";

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="relative flex justify-center items-center min-h-screen text-white ">
            <div className=" max-w-lg w-full">
                <ServerAuthProvider> {children}</ServerAuthProvider>
            </div>

        </div>
    )
}