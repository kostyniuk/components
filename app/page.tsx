import type { ReactNode } from "react"

import { TabCard } from "@/components/custom/tab-card"
import { TAB_CARD_EXAMPLE_PROPS } from "@/components/custom/tab-card.example"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="space-y-3">
      <div className="space-y-1">
        <h2 className="text-sm font-semibold tracking-wide text-foreground">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  )
}

function RegularTabsExample({
  variant = "default",
}: {
  variant?: "default" | "line"
}) {
  return (
    <Tabs defaultValue={TAB_CARD_EXAMPLE_PROPS[0]?.value} className="w-full">
      <TabsList
        variant={variant}
        className={variant === "default" ? "w-fit" : "w-full justify-start p-0"}
      >
        {TAB_CARD_EXAMPLE_PROPS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TAB_CARD_EXAMPLE_PROPS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <Card>{tab.children}</Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex w-full max-w-7xl min-w-0 flex-col justify-center gap-6 px-6 text-sm leading-loose md:px-12">
        <div className="grid gap-12 xl:grid-cols-2 xl:gap-x-14 xl:gap-y-16">
          <Section
            title="Regular Tabs / Default"
            description="Base tabs component with the default tabs list treatment."
          >
            <RegularTabsExample />
          </Section>
          <Section
            title="Regular Tabs / Line"
            description="Base tabs component using the line variant."
          >
            <RegularTabsExample variant="line" />
          </Section>
          <Section
            title="Custom TabCard / Flat"
            description="Current custom tab-card component with square edges."
          >
            <TabCard tabs={TAB_CARD_EXAMPLE_PROPS} className="w-full" />
          </Section>
          <Section
            title="Custom TabCard / Rounded"
            description="Current custom tab-card component with rounded mode."
          >
            <TabCard
              tabs={TAB_CARD_EXAMPLE_PROPS}
              variant="rounded"
              className="w-full"
            />
          </Section>
        </div>
      </div>
    </div>
  )
}
