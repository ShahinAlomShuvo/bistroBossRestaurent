import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import { BounceLoader } from "react-spinners";

const RecommendsFoodCard = ({ items }) => {
  const { image, name, recipe, price, _id } = items;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (food) => {
    if (user) {
      console.log(food, user.email);
      const cartItems = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItems).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "Food Added to Cart Successfully",
            icon: "success",
          });
          // use refetch for updated data
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You Don't Have Sign In",
        text: "Please Sign In To Add Product!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sign In Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };
  return (
    <div className='card  bg-base-100 shadow-xl'>
      <div className='relative'>
        <img src={image} className='rounded-xl w-full' />
        <h2 className='absolute bg-slate-900 px-4  py-2 text-white rounded right-4 top-4'>
          ${price}
        </h2>
      </div>

      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{name}</h2>
        <p>{recipe}</p>
        <div className='card-actions'>
          <button
            onClick={() => handleAddToCart(items)}
            className='btn btn-outline border-0 border-b-2 border-yellow-600 text-yellow-600 btn-warning'
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendsFoodCard;
