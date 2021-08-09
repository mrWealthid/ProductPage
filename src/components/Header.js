import React, { useState } from "react";
import {
  FaBars,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTimes,
} from "react-icons/fa";
import "../App.css";
import { useTransition, animated } from "react-spring";
import { NavLink } from "react-router-dom";
import Product from "../Views/Product";

// function Mount() {
//   const [show, set] = useState(false);
//   const transitions = useTransition(show, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     reverse: show,
//     delay: 200,

//     onRest: () => set(!show),
//   });
//   return transitions(
//     (styles, item) => item && <animated.div style={styles}>✌️</animated.div>
//   );
// }

const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuContent = (
    <>
      <FaTimes
        onClick={() => setMenu(false)}
        className="fixed right-0 text-2xl m-4"
      />

      <h1 className="pt-10 text-center text-3xl font-Poppins">
        This is Our Menu
      </h1>

      <div className="w-full flex-1 space-y-5 ">
        <NavLink
          className="font-Poppins py-2 text-center block text-sm border-b"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className="font-Poppins py-2 text-center block text-sm border-b"
          to="/myProduct"
        >
          About
        </NavLink>

        <NavLink
          className="font-Poppins text-center  block text-sm py-2 border-b"
          to="/card"
        >
          Contact
        </NavLink>

        <NavLink className="font-Poppins text-center  block" to="/product">
          Product
        </NavLink>
      </div>

      <div className="h-full flex justify-center p-6 block w-full space-x-6">
        <FaTwitter /> <FaFacebook /> <FaLinkedin /> <FaGithub />
      </div>
    </>
  );

  const transitions = useTransition(menu, {
    from: { opacity: 0, translateX: "-100%" },
    enter: { opacity: 1, translateX: "0%" },
    leave: { opacity: 5, translateX: "-100%" },
  });

  return (
    <div className="flex p-6 justify-between">
      <div>
        <h1>Wealth</h1>
      </div>

      <div>
        <FaBars onClick={() => setMenu(!menu)} />
      </div>

      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="we flex flex-col w-full min-h-full space-y-5 items-center absolute left-0 transition duration-1000 ease-linear  z-50 bg-white top-0 border-black border-r-2"
              onClick={() => setMenu(!menu)}
            >
              {menuContent}
            </animated.div>
          )
      )}
    </div>
  );
};

export default Header;
