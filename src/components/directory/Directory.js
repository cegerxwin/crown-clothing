import "./Directory.scss";
import CategoryItem from "../category-item/CategoryItem";
function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
export default Directory;
