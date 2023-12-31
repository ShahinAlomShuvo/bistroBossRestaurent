import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { imgUpload } from "../../Utility/utils";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
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

    // upload menuItems to db
    const menu = await axiosSecure.post("/menus", menuItems);
    console.log(menu.data);
    if (menu.data.insertedId) {
      reset();

      Swal.fire({
        title: "Good job!",
        text: "Menu Added Successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={`---What's new?---`}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(SubmitHandler)} className='space-y-8'>
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text text-xl text-white'>
                Recipe name*
              </span>
            </label>
            <input
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
          <button className='btn'>
            Add Items <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
