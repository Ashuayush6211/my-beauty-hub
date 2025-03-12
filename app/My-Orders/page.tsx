import { useState, useEffect } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedOrders = localStorage.getItem("orders");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedOrders) {
      const allOrders = JSON.parse(storedOrders);
      if (storedUser) {
        const userOrders = allOrders.filter(order => order.phone === JSON.parse(storedUser).phone);
        setOrders(userOrders);
      }
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      {user ? (
        orders.length > 0 ? (
          <ul className="border rounded-md p-4 bg-gray-100">
            {orders.map((order, index) => (
              <li key={index} className="border-b py-3">
                <h3 className="text-lg font-bold">Order #{index + 1}</h3>
                <p>📞 Phone: {order.phone}</p>
                <p>📍 Address: {order.address}, {order.pincode}</p>
                <p>💰 Total: ₹{order.totalPrice.toFixed(2)}</p>
                <h4 className="font-semibold mt-2">Services Ordered:</h4>
                <ul className="list-disc ml-6">
                  {order.cart.map((item, i) => (
                    <li key={i}>{item.name} - ₹{parseFloat(item.price).toFixed(2)}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No orders found.</p>
        )
      ) : (
        <p className="text-red-500">Please sign in to view your orders.</p>
      )}
    </div>
  );
};

export default MyOrders;
