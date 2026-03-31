interface ReciListLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

const ReciListLogo = ({ className = "", size = 32, color = "currentColor" }: ReciListLogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Book spine / left page */}
    <path
      d="M40 30 C40 30, 100 20, 100 40 L100 175 C100 175, 40 165, 40 145 Z"
      fill={color}
      opacity="0.15"
    />
    <path
      d="M40 30 C40 30, 100 20, 100 40 L100 175 C100 175, 40 165, 40 145 Z"
      stroke={color}
      strokeWidth="6"
      fill="none"
    />
    {/* Right page */}
    <path
      d="M100 40 C100 20, 160 30, 160 30 L160 145 C160 165, 100 175, 100 175 Z"
      stroke={color}
      strokeWidth="6"
      fill="none"
    />
    {/* Checklist lines on right page */}
    <line x1="115" y1="60" x2="148" y2="60" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="115" y1="82" x2="148" y2="82" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="115" y1="104" x2="148" y2="104" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="115" y1="126" x2="148" y2="126" stroke={color} strokeWidth="4" strokeLinecap="round" />
    {/* Checkmarks */}
    <polyline points="56,56 64,64 78,48" stroke="#5FD38D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="56,78 64,86 78,70" stroke="#5FD38D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="56,100 64,108 78,92" stroke="#5FD38D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="56,122 64,130 78,114" stroke="#5FD38D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default ReciListLogo;
