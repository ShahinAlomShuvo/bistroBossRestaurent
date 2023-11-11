import { NavLink } from "react-router-dom";
import avatar from "../../assets/Images/avatar.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/shop"}>Our Shop</NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>Cart</NavLink>
      </li>
    </>
  );

  return (
    <div className='bg-black opacity-60 fixed w-full z-10'>
      <div className='navbar    text-white container mx-auto'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navLinks}
            </ul>
          </div>
          <NavLink to={"/"}>
            <h2 className='text-xl uppercase font-bold tracking-wider text-white'>
              Bistro Boss
            </h2>
            <p className='tracking-[5px] uppercase text-white'>Restaurant</p>
          </NavLink>
        </div>
        <div className='navbar-end hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
          <div className='avatar '>
            <div className='w-10 border-none outline rounded-full'>
              <img className='w-full' src={avatar} />
            </div>
          </div>
        </div>
        <div className='avatar navbar-end  lg:hidden'>
          <div className='w-10 border-none outline rounded-full'>
            <img className='w-full' src={avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
