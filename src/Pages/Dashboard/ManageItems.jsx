import SectionTitle from "../../Shared/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const ManageItems = () => {
  const [menus, isPending, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (menu) => {
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
        axiosSecure.delete(`/menus/${menu._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${menu.name} has been deleted`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading={"MANAGE ALL ITEMS"}
        subHeading={"---Hurry Up!---"}
      ></SectionTitle>
      {isPending ? (
        <div className='flex justify-center items-center py-40'>
          <FadeLoader color='#36d7b7' />
        </div>
      ) : (
        <div>
          <h2 className='text-3xl font-semibold pb-4'>
            Total Items: {menus.length}
          </h2>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr className='text-2xl text-white  bg-orange-400 h-20 '>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {menus.map((menu, idx) => (
                  <tr key={menu._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <img src={menu.image} />
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </td>
                    <td>{menu.name}</td>
                    <td>${menu.price}</td>
                    <th>
                      <Link to={`/dashboard/updateItem/${menu._id}`}>
                        <button className='btn btn-ghost bg-orange-400'>
                          <FaEdit size={26}></FaEdit>
                        </button>
                      </Link>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDelete(menu)}
                        className='btn btn-ghost bg-red-600 hover:text-red-600'
                      >
                        <FaTrash className='' size={26}></FaTrash>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageItems;
