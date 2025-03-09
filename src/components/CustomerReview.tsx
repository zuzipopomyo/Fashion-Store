import avatar from "../assets/images/avatar.png";
import cards from "../assets/images/Frame 126.png";
import { Product } from "../pages/Home";
import useProductStore from "../store/useProductStore";
import ProductCard from "./ProductCard";

function getFakeReview() {
  const names = [
    "Jane Doe",
    "John Smith",
    "Alice Johnson",
    "Bob Brown",
    "Emma Wilson",
  ];
  const randomName = names[Math.floor(Math.random() * names.length)];

  return {
    id: Math.floor(Math.random() * 1000),
    name: randomName,
    rating: Math.floor(Math.random() * 5) + 1,
    avatar: `https://via.placeholder.com/50?text=UserX`,
    date: "11/11/2000",
  };
}

const CustomerReview = ({ product }: { product: Product }) => {
  const { allProducts } = useProductStore();
  const reviews = Array.from({ length: Math.random() * 10 + 1 }, () =>
    getFakeReview()
  );

  return (
    <div className="container mx-10 px-10 my-40">
      <div className="flex justify-between pb-7">
        <h2 className="text-2xl font-semibold">Customer Review</h2>
        <div>Sort By: Nearest</div>
      </div>

      <div className="flex justify-between gap-4">
        {/* Customer Reviews */}
        <div className="p-4 rounded-lg shadow-md w-2/3">
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex items-start gap-4 border-b pb-4 mb-4"
            >
              <img
                src={avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <h4 className="font-thin text-sm">{review.date}</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                </div>
                <a href="#" className="text-sm text-blue-500">
                  View Reply
                </a>
              </div>
            </div>
          ))}

          {/* <button className="w-full text-center bg-purple-100 py-2 rounded-md mt-4">
            Load more...
          </button> */}
        </div>

        {/* overall Rating  */}
        <div className="border p-4 rounded-lg shadow-md w-[500px] max-h-[360px]">
          <h2 className="text-2xl font-thin mb-4">Overall Rating</h2>
          <div className="mb-4 flex items-center gap-4">
            <div className="text-5xl font-bold">
              <span className="text-yellow-500">★</span>
              {product?.rating?.rate}
            </div>
            <div>
              <h3>30 out of {product?.rating?.count}</h3>
              <h4>Customer Recommended this product</h4>
            </div>
          </div>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2 mb-2">
              <span className="text-[#E4E4E4]">★</span>
              <span>{star}</span>
              <div className="w-full bg-gray-200 h-2 rounded-md overflow-hidden">
                <div
                  className="bg-yellow-500 h-full"
                  style={{ width: `${star * 20}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* You Might Also Like Section */}
      <div className="m-10">
        <h3 className="text-center font-bold text-3xl mb-10">
          You might also like
        </h3>
        <div className="flex gap-3 items-center flex-wrap justify-center">
          {allProducts &&
            allProducts.slice(4, 8).map((product) => {
              return (
                <>
                  <ProductCard productInfo={product} />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
