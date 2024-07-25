import { BlogCard } from "../BlogCard";

const BlogsView: React.FC<CardsViewProps> = ({ data, viewTitle }) => {
  return (
    <section className="py-16 px-5 lg:px-24">
      {viewTitle && <h2 className="font-semibold text-white text-xl pb-5">{viewTitle}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-24  ">
        {[...data, ...data, ...data].map((props) => (
          <BlogCard key={props.title} {...props} />
        ))}
      </div>
    </section>
  );
};

export default BlogsView;
