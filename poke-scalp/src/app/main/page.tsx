import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FluxChoice } from "@/components/ui/fluxchoice";

export default function MainContent() {
  return (
    <div>

      <FluxChoice
        name="flux"
        defaultValue="tout"
        choices={[
          {
            value: "scalp",
            title: "Scalp",
          },
          {
            value: "collection",
            title: "Collection",
          },
          {
            value: "tout",
            title: "Tout",
          },
        ]}
      />
      <br/>

      <FluxChoice
        name="flux"
        defaultValue="toutav"
        choices={[
          {
            value: "achat",
            title: "Achat",
          },
          {
            value: "vente",
            title: "Vente",
          },
          {
            value: "toutav",
            title: "Tout",
          },
        ]}
      />
      <Card className="mt-4 p-4">
        <h1 className="text-2xl font-bold">ITEM + SERIE</h1>
        <p>This is the main content area.</p>
      </Card>
    </div>

  );
}