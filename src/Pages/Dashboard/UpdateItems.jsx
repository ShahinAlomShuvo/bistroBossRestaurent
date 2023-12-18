import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import { imgUpload } from "../../Utility/utils";

const UpdateItems = () => {
  const item = useLoaderData();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const SubmitHandler = async (data) => {
    const imgFile = data.image[0];

    // upload img
    const imgLink = await imgUpload(imgFile);

    const menuItems = {
      name: data.recipe,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.details,
      image: imgLink.data.display_url,
    };

    console.log(imgLink);

    // updated menuItems
    const menu = await axiosSecure.patch(`/menus/${item._id}`, menuItems);
    console.log("update from me", menu);

    if (menu.data.modifiedCount > 0) {
      reset();
      navigate(-1);

      Swal.fire({
        title: "Good job!",
        text: "Menu Updated Successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div>
      <h2 className='text-center text-3xl font-semibold'>Update Item</h2>
      <div>
        <form onSubmit={handleSubmit(SubmitHandler)} className='space-y-8'>
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text text-xl text-white'>
                Recipe name*
              </span>
            </label>
            <input
              defaultValue={item.name}
              {...register("recipe", { required: true })}
              type='text'
              placeholder='Recipe name'
              className='input input-bordered w-full '
            />
          </div>

          <div className='flex  gap-5'>
            {/* category  */}
            <div className='form-control w-full '>
              <label className='label'>
                <span className='label-text text-xl text-white'>Category*</span>
              </label>
              <select
                defaultValue={item.category}
                className='select select-bordered w-full '
                {...register("category", { required: true })}
              >
                <option>Select Category</option>
                <option value='salad'>Salad</option>
                <option value='pizza'>Pizza</option>
                <option value='soups'>Soups</option>
                <option value='desserts'>Desserts</option>
                <option value='drinks'>Drinks</option>
              </select>
            </div>

            {/* Price  */}

            <div className='form-control w-full '>
              <label className='label'>
                <span className='label-text text-xl text-white'>Price*</span>
              </label>
              <input
                defaultValue={item.price}
                {...register("price", { required: true })}
                type='text'
                placeholder='Price'
                className='input input-bordered w-full '
              />
            </div>
          </div>
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text text-xl text-white'>
                Recipe Details*
              </span>
            </label>
            <textarea
              defaultValue={item.recipe}
              {...register("details", { required: true })}
              className='textarea textarea-bordered'
              placeholder='Recipe Details'
              rows={6}
            ></textarea>
          </div>

          <div className='form-control w-full '>
            <input
              {...register("image", { required: true })}
              type='file'
              className='file-input file-input-bordered w-full max-w-xs'
            />
          </div>

          <div className='flex justify-center'>
            <button className='btn'>
              Update Items <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
