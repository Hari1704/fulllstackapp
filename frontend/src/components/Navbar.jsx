import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Happy', link: '/Happy' },
  { id: 3, title: 'Sad', link: '/Sad' },
  { id: 4, title: 'Life', link: '/Life' },
  { id: 5, title: 'Inspirational', link: '/Inspirational' },
];

const Navbar = () => {
  return (
    <div className="container mx-auto bg-black p-3 flex justify-around">
      <div className="flex items-center space-x-2">
        <h1 className="text-3xl font-bold text-white">  <span className="text-3xl text-green-600 font-bold inline ">Q</span>
          uote <span className="text-green-600 text-3xl inline">G</span>enerator
        </h1>
      </div>

      <ul className="flex space-x-12 mt-4 ">
  {Navlinks.map((link) => (
    <li key={link.id}>
      <NavLink
        to={link.link}
        className={({ isActive }) =>
          `text-xl font-bold ${
            isActive ? 'text-green-600' : 'text-white'
          } hover:text-green-400`
        }
      >
        {link.title}
      </NavLink>
    </li>
  ))}
</ul>
    </div>
  );
};

export default Navbar;
