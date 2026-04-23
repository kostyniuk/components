import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { TabCardItem } from "./tab-card"

export const TAB_CARD_EXAMPLE_PROPS: TabCardItem[] = [
  {
    value: "overview",
    label: "Overview",
    children: (
      <>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            View your key metrics and recent project activity. Track progress
            across all your active projects.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          You have 12 active projects and 3 pending tasks.
        </CardContent>
      </>
    ),
  },
  {
    value: "analytics",
    label: "Analytics",
    children: (
      <>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>
            Track performance and user engagement metrics. Monitor trends and
            identify growth opportunities.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Page views are up 25% compared to last month.
        </CardContent>
      </>
    ),
  },
  {
    value: "reports",
    label: "Reports",
    children: (
      <>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
          <CardDescription>
            Generate and download your detailed reports. Export data in multiple
            formats for analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          You have 5 reports ready and available to export.
        </CardContent>
      </>
    ),
  },
  {
    value: "settings",
    label: "Settings",
    children: (
      <>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>
            Manage your account preferences and options. Customize your
            experience to fit your needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Configure notifications, security, and themes.
        </CardContent>
      </>
    ),
  },
]