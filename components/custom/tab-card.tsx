import type { ReactNode } from "react"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const tabTriggerClassName =
  "group-data-horizontal/tabs:after:bottom-0 data-active:z-10 data-active:h-full data-active:border-transparent data-active:bg-muted dark:data-active:border-transparent dark:data-active:bg-muted rounded-none group-data-[variant=default]/tabs-list:data-active:shadow-none"
const cardClassName = "rounded-none border-0 ring-0 shadow-none bg-muted"

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
      <TabsList className={cn("bg-transparent p-0", listClassName)}>
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
