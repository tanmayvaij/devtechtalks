import NextImage from "next/image";

export const TopBlogCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch text-white">
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full lg:w-7/12">
        <NextImage className="rounded-lg" src="/nextjs.png" alt="" fill />
      </div>
      <div className="flex lg:w-5/12 flex-col lg:p-10 justify-evenly">
        <span className="text-sm pt-5 lg:pt-0">February 24, 2022</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold pt-3">
          NextJs App Router VS NextJs Page Router
        </h2>
        <p className="pt-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit enim
          bcaecati dolor. quasi mod , aut quasi modi odio, aut obcaecati dolor.
        </p>
      </div>
    </div>
  );
};
