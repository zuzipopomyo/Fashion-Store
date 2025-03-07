
import map from '../assets/images/map.png'
const AboutUs = () => {
  return (
    <div className="p-6 max-w-6xl my-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h1 className="text-2xl font-bold mb-4">Find a store</h1>
      <div className="flex border rounded-md overflow-hidden mb-4">
        <input
          type="text"
          placeholder="Enter country, city, address or zip code"
          className="flex-1 p-2 outline-none"
        />
        <button className="bg-purple-600 text-white p-3">
         
        </button>
      </div>
      <div className="border rounded-md p-3 mb-4">
        <select className="w-full p-2 border rounded-md">
          <option>All Stores</option>
        </select>
      </div>
      <div className="space-y-4">
        <div className="border p-4 rounded-md">
          <h2 className="text-lg font-semibold">Likeside Center</h2>
          <p>740 Idhuh Parkway</p>
          <p className="font-bold">Phone: 6-146-389-574</p>
          <p className="font-bold">Store Hours: 10 am - 10 pm EST, 7 days a week</p>
        </div>
        <div className="border p-4 rounded-md">
          <h2 className="text-lg font-semibold">Scottsdale Fashion Square</h2>
          <p>740 Idhuh Parkway</p>
          <p className="font-bold">Phone: 6-146-389-574</p>
          <p className="font-bold">Store Hours: 10 am - 10 pm EST, 7 days a week</p>
        </div>
      </div>
    </div>
    <div>
      <img
        src={map}
        alt="Map preview"
        className="w-full h-auto rounded-md border"
      />
    </div>
  </div>
  );
}

export default AboutUs;
