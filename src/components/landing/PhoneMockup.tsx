import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

const PhoneMockup = ({ src, alt, className }: PhoneMockupProps) => (
  <div className={cn("relative mx-auto", className)} style={{ maxWidth: 280 }}>
    <div className="relative rounded-[2.5rem] border-[6px] border-foreground/90 bg-foreground/90 shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/90 rounded-b-2xl z-10" />
      <img
        src={src}
        alt={alt}
        className="w-full block"
        loading="lazy"
      />
    </div>
  </div>
);

export default PhoneMockup;
