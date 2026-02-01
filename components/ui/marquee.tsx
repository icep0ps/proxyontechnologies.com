"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const MarqueeContext = React.createContext<{
  pauseOnHover: boolean
  direction: "left" | "right" | "up" | "down"
  orientation: "horizontal" | "vertical"
}>({
  pauseOnHover: false,
  direction: "left",
  orientation: "horizontal",
})

interface MarqueeRootProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number
  gap?: string
  pauseOnHover?: boolean
  direction?: "left" | "right" | "up" | "down"
  loop?: number | "infinite"
}

const Root = React.forwardRef<HTMLDivElement, MarqueeRootProps>(
  (
    {
      className,
      children,
      duration = 20,
      gap = "1rem",
      pauseOnHover = false,
      direction = "left",
      loop = "infinite",
      ...props
    },
    ref
  ) => {
    const orientation = direction === "left" || direction === "right" ? "horizontal" : "vertical"

    return (
      <MarqueeContext.Provider value={{ pauseOnHover, direction, orientation }}>
        <div
          ref={ref}
          className={cn("group relative flex overflow-hidden", orientation === "horizontal" ? "flex-row" : "flex-col", className)}
          style={{
            "--marquee-duration": `${duration}s`,
            "--marquee-gap": gap,
            "--marquee-loop-count": loop,
          } as React.CSSProperties}
          {...props}
        >
          {children}
        </div>
      </MarqueeContext.Provider>
    )
  }
)
Root.displayName = "Marquee.Root"

const Content = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { direction, orientation, pauseOnHover } = React.useContext(MarqueeContext)
    
    // Render children multiple times to ensure coverage (at least 2, maybe 4 for safety on large screens vs small content)
    // For simplicity and per standard marquee implementations, 2 copies is standard if content width > container.
    // We will render 2 copies.
    
    return (
      <div
        ref={ref}
        className={cn(
          "flex shrink-0 gap-[var(--marquee-gap)]",
          orientation === "horizontal" ? "flex-row min-w-full" : "flex-col min-h-full",
          // Animation mapping
          direction === "left" && "animate-marquee-left",
          direction === "right" && "animate-marquee-right",
          direction === "up" && "animate-marquee-up",
          direction === "down" && "animate-marquee-down",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          className
        )}
        {...props}
      >
        {children}
        {children}
      </div>
    )
  }
)
Content.displayName = "Marquee.Content"

const Item = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex-shrink-0", className)} {...props} />
  }
)
Item.displayName = "Marquee.Item"

const Edge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { side: "left" | "right" | "top" | "bottom" }>(
  ({ className, side, ...props }, ref) => {
    const sideClass = 
      side === "left" ? "left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent" :
      side === "right" ? "right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent" :
      side === "top" ? "top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" :
      side === "bottom" ? "bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" : ""

    return <div ref={ref} className={cn("absolute z-10 pointer-events-none", sideClass, className)} {...props} />
  }
)
Edge.displayName = "Marquee.Edge"

export { Root, Content, Item, Edge }
