import { TabCard } from "@/components/custom/tab-card"
import { TAB_CARD_EXAMPLE_PROPS } from "@/components/custom/tab-card.example"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex w-full max-w-7xl min-w-0 flex-col gap-6 px-6 text-sm leading-loose md:px-12">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <TabCard tabs={TAB_CARD_EXAMPLE_PROPS} className="w-full" />
          <TabCard
            tabs={TAB_CARD_EXAMPLE_PROPS}
            variant="rounded"
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
