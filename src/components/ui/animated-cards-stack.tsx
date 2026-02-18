import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion"
import { cn } from "@/lib/utils"

const cardVariants = cva("absolute will-change-transform", {
  variants: {
    variant: {
      dark: "flex size-full flex-col items-center justify-center gap-6 rounded-2xl border border-border/50 bg-foreground/80 p-6 backdrop-blur-md",
      light:
        "flex size-full flex-col items-center justify-center gap-6 rounded-2xl border bg-background/80 p-6 backdrop-blur-md",
    },
  },
  defaultVariants: {
    variant: "light",
  },
})

interface ReviewProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number
  maxRating?: number
}

interface CardStickyProps
  extends HTMLMotionProps<"div">,
    VariantProps<typeof cardVariants> {
  arrayLength: number
  index: number
  incrementY?: number
  incrementZ?: number
  incrementRotation?: number
}

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>
}

const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined)

function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext)
  if (context === undefined) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll"
    )
  }
  return context
}

export const ContainerScroll: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style,
  className,
  ...props
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  })

  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        style={{ perspective: "1000px", ...style }}
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  )
}
ContainerScroll.displayName = "ContainerScroll"

export const CardsContainer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-visible", className)}
      {...props}
    >
      {children}
    </div>
  )
}
CardsContainer.displayName = "CardsContainer"

export const CardTransformed = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      arrayLength,
      index,
      incrementY = 10,
      incrementZ = 10,
      className,
      variant,
      style,
      ...props
    },
    ref
  ) => {
    const { scrollYProgress } = useContainerScrollContext()

    const isLast = index === arrayLength - 1
    // Only the first N-1 cards fly off; the last card stays visible
    const flyingCards = arrayLength - 1
    const start = isLast ? 1 : index / flyingCards
    const end = isLast ? 1 : (index + 1) / flyingCards

    // Idle rotation for stacked cards below (index 0 = straight, others slightly rotated)
    const idleRotations = [0, -4, 5, -3]
    const idleRotation = idleRotations[index % idleRotations.length]

    // Card flies up and straightens as it exits; last card stays put
    const y = useTransform(scrollYProgress, [start, end], isLast ? ["0%", "0%"] : ["0%", "-130%"])
    const opacity = useTransform(scrollYProgress, isLast ? [0, 1] : [start, end * 0.9, end], isLast ? [1, 1] : [1, 1, 0])
    // Straighten as the card begins to fly off
    const rotate = useTransform(scrollYProgress, [Math.max(0, start - 0.05), start], [idleRotation, 0])

    const cardStyle = {
      top: index * incrementY,
      zIndex: (arrayLength - index) * incrementZ,
      y,
      opacity,
      rotate,
      backfaceVisibility: "hidden" as const,
      ...style,
    }

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        style={cardStyle}
        {...props}
      />
    )
  }
)
CardTransformed.displayName = "CardTransformed"

export const ReviewStars = React.forwardRef<HTMLDivElement, ReviewProps>(
  ({ rating, maxRating = 5, className, ...props }, ref) => {
    const filledStars = Math.floor(rating)
    const fractionalPart = rating - filledStars
    const emptyStars = maxRating - filledStars - (fractionalPart > 0 ? 1 : 0)

    return (
      <div ref={ref} className={cn("flex items-center gap-1.5", className)} {...props}>
        <div className="flex items-center">
          {[...Array(filledStars)].map((_, index) => (
            <svg key={`filled-${index}`} className="size-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          {fractionalPart > 0 && (
            <svg className="size-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}
          {[...Array(emptyStars)].map((_, index) => (
            <svg key={`empty-${index}`} className="size-4 text-muted-foreground/30" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm font-medium text-muted-foreground">{rating}</span>
      </div>
    )
  }
)
ReviewStars.displayName = "ReviewStars"
