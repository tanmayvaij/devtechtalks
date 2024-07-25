import { CategoryCard } from "../CategoryCard";

const CategoriesView: React.FC<CardsViewProps> = ({ data, viewTitle }) => {
  return (
    <section className="py-16 bg-white px-5 lg:px-24">
      {viewTitle && (
        <h2 className="font-semibold text-xl pb-5">{viewTitle}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {data.map((props) => (
          <CategoryCard key={props.title} {...props} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesView;
