import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary/50 bg-background/10 text-primary hover:bg-primary/10 hover:glow-cyan",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 glow-purple hover:scale-105",
        ghost: "hover:bg-accent/20 hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground border border-primary/30 backdrop-blur-sm hover:from-primary/30 hover:to-secondary/30 hover:glow-soft hover:scale-105 hover:-translate-y-1",
        neon: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground glow-pink hover:scale-105",
        glass: "glass border border-primary/30 text-foreground hover:border-primary/50 hover:glow-cyan",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
