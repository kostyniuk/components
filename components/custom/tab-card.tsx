import type { ReactNode } from "react"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const tabTriggerClassName =
  "group-data-horizontal/tabs:after:bottom-0 data-active:z-10 data-active:h-full data-active:translate-y-px data-active:border-foreground data-active:border-b-0 data-active:bg-card dark:data-active:bg-card rounded-none group-data-[variant=default]/tabs-list:data-active:shadow-none"
const cardClassName = "border border-foreground ring-0 rounded-none bg-card"

export type TabCardItem = {
  value: string
  label: ReactNode
  children: ReactNode
}

export type TabCardProps = {
  tabs: TabCardItem[]
  defaultValue?: string
  className?: string
  listClassName?: string
  triggerClassName?: string
  contentClassName?: string
  cardClassName?: string
}

export function TabCard({
  tabs,
  defaultValue = tabs[0]?.value,
  className,
  listClassName,
  triggerClassName,
  contentClassName,
  cardClassName: cardClassNameProp,
}: TabCardProps) {
  return (
    <Tabs defaultValue={defaultValue} className={cn("w-full gap-0", className)}>
      <TabsList className={cn("p-0", listClassName)}>
        {tabs.map((tab) => (
          <TabsTrigger
            className={cn(tabTriggerClassName, triggerClassName)}
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          className={contentClassName}
          key={tab.value}
          value={tab.value}
        >
          <Card className={cn(cardClassName, cardClassNameProp)}>
            {tab.children}
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}
