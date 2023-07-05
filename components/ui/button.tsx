import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ReloadIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center transition justify-center text-white min-w-max rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-800",
  {
    variants: {
      variant: {
        default:
          " bg-brand-800 rounded-full  text-white shadow hover:bg-transparent ring-transparent ring-2 hover:ring-brand-800 hover:text-brand-300 ",
        destructive:
          "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
        outline:
          "border border-[#1a1a1a] bg-transparent shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-[#0D0D0D] text-white shadow-sm hover:[#0D0D0D]/80 hover:text-white/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
      },
      size: {
        default: " px-10 py-6",
        sm: "px-4 py-3 text-xs",
        lg: "  px-8 py-3",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean,
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <>

        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          <div className=" flex items-center">
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            {children}
          </div>
        </Comp>
      </>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
