import { data } from "../../shopData";
import ProductCard from "../productCard/ProductCard";

const HomeRightPanel = () => {
  return (
    <div className="w-[98%] mx-auto">
      <section className="w-full">
        <div>
          <img
            src="/images/home_hero.jpg"
            className="w-full h-[80vh] rounded-md object-fill"
            alt=""
            loading="lazy"
          />
        </div>
      </section>

      <section className="w-full mt-10">
        <h1 className="text-3xl border-b-2 border-black py-2 max-w-fit">
          Most Selling Products
        </h1>

        <div className="w-full mt-6 flex flex-wrap items-center gap-2">
          {data &&
            data.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomeRightPanel;
