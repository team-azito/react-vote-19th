"use client";
import { cva } from "class-variance-authority";

interface CandBtnTemplateProps {
  sizeVariant: "leader" | "team";
  clickVariant: true | false;
  children: React.ReactNode;
  onClick: () => void;
  lastLineClass: string;
}

const CandBtnTemplate = ({ sizeVariant, clickVariant, children, onClick, lastLineClass }: CandBtnTemplateProps) => {
  return (
    <button
      onClick={onClick}
      className={`col-span-2 ${SizeVariants({ sizeVariant })} ${BackVariants({ clickVariant })} ${BorderVariants({ clickVariant })} ${lastLineClass}`}
    >
      {children}
    </button>
  );
};

export default CandBtnTemplate;

const SizeVariants = cva(`flex-column flex-center gap-5pxr px-7pxr`, {
  variants: {
    sizeVariant: {
      leader: "h-70pxr w-117pxr",
      team: "h-70pxr w-200pxr",
    },
  },
});

const BackVariants = cva(``, {
  variants: {
    clickVariant: {
      true: "bg-blue-base text-white",
      false: "bg-white text-blue-base hover:bg-blue-base hover:text-white",
    },
  },
});

const BorderVariants = cva(`rounded-15pxr`, {
  variants: {
    clickVariant: {
      true: "border-blue-selected border-4",
      false: "border-blue-base border-2",
    },
  },
});
