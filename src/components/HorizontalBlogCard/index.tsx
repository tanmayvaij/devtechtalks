import NextImage from "next/image";

const HorizontalBlogCard: React.FC<HorizontalBlogCardProps> = (props) => {
  return (
    <div className="flex text-white border-b border-gray-600 pb-4">
      <div className="relative h-36 w-56">
        <NextImage
          className="rounded-sm"
          src={props.image.url}
          alt={props.image.altText}
          fill
        />
      </div>
      <div className="px-5 py-1">
        <span className="pt-4 text-sm">{props.publishDate}</span>
        <h3 className="text-xl font-semibold pt-3">{props.title}</h3>
      </div>
    </div>
  );
};

export default HorizontalBlogCard;
