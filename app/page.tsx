import { TabCard } from "@/components/custom/tab-card"
import { TAB_CARD_EXAMPLE_PROPS } from "@/components/custom/tab-card.example"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose px-[100px]">
        <div>
          <h1 className="font-medium">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
        <TabCard tabs={TAB_CARD_EXAMPLE_PROPS} className="w-200" />
      </div>
    </div>
  )
}
