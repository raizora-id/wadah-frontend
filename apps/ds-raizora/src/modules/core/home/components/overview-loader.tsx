import { Card, CardContent, CardHeader } from "@packages/ui/components/base/card";
import { Skeleton } from "@packages/ui/components/base/skeleton";

export function OverviewLoader() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <Skeleton className="h-6 w-[100px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[300px] w-full" />
      </CardContent>
    </Card>
  );
}