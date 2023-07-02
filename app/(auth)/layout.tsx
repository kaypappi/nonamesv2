"use client"
interface AuthLayoutProps {
    children: React.ReactNode
}

export default  function AuthLayout({ children }: AuthLayoutProps) {

    return (
        <div className="relative flex justify-center items-center min-h-screen text-white ">
            <div className=" max-w-lg w-full">
                {children}
            </div>

        </div>
    )
}