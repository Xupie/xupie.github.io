import Image from "next/image";
import type { FC } from "react";

interface SkillCardProps {
  img_src: string;
  img_alt: string;
  label: string;
}

const SkillCard: FC<SkillCardProps> = ({ img_src, img_alt, label }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-(--color-surface-dark) bg-surface shadow-md hover:shadow-lg hover:border-primary transition-all duration-300 ease-out p-5 hover:scale-105t">
      <div className="flex items-center justify-center w-16 h-16 rounded-md">
        <Image
          src={img_src}
          alt={img_alt}
          width={64}
          height={64}
          loading={"lazy"}
          unoptimized={true}
        />
      </div>

      <h2 className="text-base font-medium">{label}</h2>
    </div>
  );
};

export default SkillCard;
