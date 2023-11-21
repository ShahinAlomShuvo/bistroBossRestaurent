import { FaTrash } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Food has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className='px-6'>
      <div className='flex justify-between'>
        <h2 className='text-4xl'>Items: {cart.length}</h2>
        <h2 className='text-4xl'>Total Price: {totalPrice}</h2>
        <button className='btn btn-primary'>Pay Now</button>
      </div>

      <div className='overflow-x-auto'>
        <table className='table mt-10'>
          {/* head */}
          <thead className='bg-[#D1A054]  text-white text-xl  '>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>
                  <label>{idx + 1}</label>
                </th>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='avatar'>
                      <div className='mask mask-squircle w-12 h-12'>
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='font-bold'>{item.name}</div>
                </td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className='btn btn-error btn-outline'
                  >
                    <FaTrash size={26}></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
