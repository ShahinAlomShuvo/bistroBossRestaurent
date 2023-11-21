import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
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

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Good job!",
          text: "Successfully Make Admin",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading={"MANAGE ALL USERS"}
        subHeading={"---How many??---"}
      ></SectionTitle>
      <div>
        <h2 className='text-3xl font-bold'>Total users: {users.length}</h2>

        <div className='overflow-x-auto'>
          <table className='table mt-10'>
            {/* head */}
            <thead className='bg-[#D1A054]  text-white text-xl  '>
              <tr>
                <th>
                  <label>#</label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>ROLE</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>
                    <label>{idx + 1}</label>
                  </th>
                  <td>
                    <h2 className='font-bold'>{user.name}</h2>
                  </td>
                  <td>
                    <div className='font-bold'>{user.email}</div>
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className='btn bg-orange-500 text-white border-none'
                      >
                        <FaUsers size={26}></FaUsers>
                      </button>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
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
    </div>
  );
};

export default AllUsers;
