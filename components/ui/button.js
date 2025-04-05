import React from "react"

const buttonVariants = {
  default: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "underline-offset-4 hover:underline text-primary",
}

const Button = React.forwardRef(({ 
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? "slot" : "button"
  
  return (
    <Comp
      className={`${buttonVariants.default} ${buttonVariants[variant]} ${className}`}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button, buttonVariants }
