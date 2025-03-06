import avatar from "../assets/images/avatar.png";
import cards from '../assets/images/Frame 126.png'

const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Jane Doe",
      rating: 5,
      avatar: "https://via.placeholder.com/50",
      date: "30 July 2020",
    },
    {
      id: 2,
      name: "John Doe",
      rating: 2,
      avatar: "https://via.placeholder.com/50",
      date: "30 July 2020",
    },
    {
      id: 3,
      name: "Alice Smith",
      rating: 3,
      avatar: "https://via.placeholder.com/50",
      date: "30 July 2020",
    },
    {
      id: 4,
      name: "Bob Johnson",
      rating: 4,
      avatar: "https://via.placeholder.com/50",
      date: "30 July 2020",
    },
    {
      id: 5,
      name: "Emily Brown",
      rating: 2,
      avatar: "https://via.placeholder.com/50",
      date: "30 July 2020",
    },
  ];

  const suggestedProducts = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "$99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Smartphone",
      price: "$799",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Gaming Mouse",
      price: "$49",
      image: "https://via.placeholder.com/150",
    },
  ];

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

          <button className="w-full text-center bg-purple-100 py-2 rounded-md mt-4">
            Load more...
          </button>
        </div>

        {/* overall Rating  */}
        <div className="border p-4 rounded-lg shadow-md w-[500px]">
          <h2 className="text-2xl font-thin mb-4">Overall Rating</h2>
          <div className="mb-4 flex items-center gap-4">
            <div className="text-5xl font-bold">
              <span className="text-yellow-500">★</span>4.5
            </div>
            <div>
              <h3>30 out of 32 (90%)</h3>
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
      <div className="mt-20">
        <img src={cards} alt="" />
      </div>
    </div>
  );
};

export default CustomerReview;
