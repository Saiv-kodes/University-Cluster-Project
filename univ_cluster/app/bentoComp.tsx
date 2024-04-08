import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import { cn } from "@/lib/utils";

export default function BentoComp({ props }: { props: any[] }) {
  return (
    <BentoGrid className="max-w-none lg:w-10/12 md:px-12 py-5 ">
      {props.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={cn(
            i === 3 || i === 6 ? "md:col-span-2" : "",
            "md:w-auto w-2/3 relative left-[16.3333333333%] md:static"
          )}
        />
      ))}
    </BentoGrid>
  );
}
