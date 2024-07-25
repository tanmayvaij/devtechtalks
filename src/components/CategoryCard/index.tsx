import NextImage from "next/image";

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {
  return (
    <div className="flex justify-center items-stretch flex-col">
      <div className="relative h-[440px]">
        <NextImage
          className=""
          src={props.image.url}
          alt={props.image.altText}
          fill
        />
      </div>
      <h3 className="text-xl font-semibold flex-1 pt-3">{props.title}</h3>
    </div>
  );
};
