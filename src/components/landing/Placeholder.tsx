import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderProps {
  text: string;
  className?: string;
}

const Placeholder = ({ text, className }: PlaceholderProps) => (
  <div
    className={cn(
      "rounded-2xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center p-6 text-center",
      className,
    )}
  >
    <div className="flex flex-col items-center gap-3 text-muted-foreground">
      <ImageIcon className="h-8 w-8 opacity-60" />
      <span className="text-sm max-w-xs leading-relaxed">{text}</span>
    </div>
  </div>
);

export default Placeholder;
