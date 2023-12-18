import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className='grid grid-cols-4 min-h-screen  text-white'>
      <div className='p-10 bg-[#D1A054]'>
        <ul className='space-y-4'>
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to={"/dashboard/adminHome"}
                  className='flex gap-2 items-center'
                >
                  <FaHome size={26} />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/addItems"}
                  className='flex gap-2 items-center'
                >
                  <FaUtensils size={26} />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/manageItems"}
                  className='flex gap-2 items-center'
                >
                  <FaList size={26} />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/manageBookings"}
                  className='flex gap-2 items-center'
                >
                  <FaBook size={26} />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/allUsers"}
                  className='flex gap-2 items-center'
                >
                  <FaUsers size={26} />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to={"/dashboard/userHome"}
                  className='flex gap-2 items-center'
                >
                  <FaHome size={26} />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/cart"}
                  className='flex gap-2 items-center'
                >
                  <FaShoppingCart size={26} />
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/reservation"}
                  className='flex gap-2 items-center'
                >
                  <FaCalendar size={26} />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/paymentHistory"}
                  className='flex gap-2 items-center'
                >
                  <FaAd size={26} />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/bookings"}
                  className='flex gap-2 items-center'
                >
                  <FaBook size={26} />
                  Bookings
                </NavLink>
              </li>
            </>
          )}

          {/* shared links  */}
          <div className='border border-white'></div>
          <li>
            <NavLink to={"/"} className='flex gap-2 items-center'>
              <FaHome size={26} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"} className='flex gap-2 items-center'>
              <FaSearch size={26} />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className='flex gap-2 items-center'>
              <FaEnvelope size={26} />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='col-span-3 bg-slate-700 p-10 '>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
