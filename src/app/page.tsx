import { BlogCard, TopBlogCard } from "@/components";
import BlogsView from "@/components/BlogsView";
import CategoriesView from "@/components/CategoriesView";
import HorizontalBlogCard from "@/components/HorizontalBlogCard";
import MainCard from "@/components/MainCard";
import { blogs2Data, blogsData } from "@/data/blogsData";

const Home = () => {
  return (
    <div className="pb-20  bg-gray-950">

      <div className="px-5 lg:px-24 text-white text-9xl py-10">
        <h1 className="font-bold">THE BLOG</h1>
      </div>
      <div className="pb-20 px-5 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        <MainCard {...blogs2Data[0]} />

        <div className="space-y-4">
          <HorizontalBlogCard {...blogs2Data[1]} />
          <HorizontalBlogCard {...blogs2Data[1]} />
          <HorizontalBlogCard {...blogs2Data[1]} />
        </div>
      </div>

      <CategoriesView data={blogs2Data} viewTitle="Top Categories" />
      <BlogsView data={blogsData} viewTitle="Latest Blogs" />
    </div>
  );
};

export default Home;
