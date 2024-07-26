import NextImage from "next/image";

const MainCard: React.FC<BlogCardProps> = (props) => {
  return (
    <div className="flex justify-center items-stretch flex-col text-white">
      <div className="relative h-56 sm:h-72 md:h-96">
        <NextImage
          className="rounded-sm"
          src={props.image.url}
          alt={props.image.altText}
          fill
        />
      </div>
      <span className="pt-4 text-sm">{props.publishDate}</span>
      <h3 className="text-2xl font-semibold pt-3">{props.title}</h3>
      <p className="pt-4 text-sm flex-1">{props.content}</p>
    </div>
  );
};

export default MainCard;
