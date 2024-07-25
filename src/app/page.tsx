import { BlogCard, TopBlogCard } from "@/components";
import BlogsView from "@/components/BlogsView";
import CategoriesView from "@/components/CategoriesView";
import { blogs2Data, blogsData } from "@/data/blogsData";

const Home = () => {
  return (
    <div className="pb-20  bg-gray-950">
      <div className="py-20 px-5 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <BlogCard {...blogs2Data[0]} highlight />

        <div className="space-y-4">
          <BlogCard {...blogs2Data[1]} horizontal />
          <BlogCard {...blogs2Data[1]} horizontal />
          <BlogCard {...blogs2Data[1]} horizontal />
        </div>
      </div>
      <CategoriesView data={blogs2Data} viewTitle="Top Categories" />
      <BlogsView data={blogsData} viewTitle="Latest Blogs" />
    </div>
  );
};

export default Home;
