import { Button } from "@repo/library/button";
import { Card } from "@repo/ui/card";

export default function Page(): JSX.Element {
  return (
   
    <main className="flex flex-col items-center justify-between min-h-screen p-24">

      <Button>Button</Button>
      <Card title="Card Title" href="ljadfs">Card Content</Card>
    </main>
  );
}
