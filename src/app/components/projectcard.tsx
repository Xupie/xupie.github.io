import Image from "next/image";
import type { FC } from "react";
import Carousel from "./carousel";

interface ProjectCardProps {
  project: string;
  description?: string;
  img_src: string | string[];
  img_alt: string;
  source?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  project,
  description,
  img_src,
  img_alt,
  source,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 my-4">
      <div className="w-full md:w-2/5">
        <h2 className="text-3xl font-semibold mb-2">{project}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {description}
        </p>
        {source === null ? null : (
          <a href={source} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        )}
      </div>
      <div className="relative w-full md:w-3/5 aspect-video px-4 rounded-xl border border-(--color-surface-dark) bg-surface shadow-md hover:shadow-lg hover:border-primary transition-all duration-300 ease-out">
        {Array.isArray(img_src) ? (
          <Carousel>
            {img_src.map((src, _index) => (
              <div key={src} className="relative w-full h-full">
                <Image
                  src={src}
                  alt={img_alt}
                  fill={true}
                  className="object-cover rounded-xl"
                  loading={"lazy"}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <Image
            src={img_src}
            alt={img_alt}
            fill={true}
            className="object-cover rounded-xl"
            loading={"lazy"}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
