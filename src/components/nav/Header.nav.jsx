import navOptions from "./navOptions";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [handleShow, setHandleShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const listener = () => {
        if (window.scrollY > 80) {
          setHandleShow(true);
        } else {
          setHandleShow(false);
        }
      };
      window.addEventListener("scroll", listener);

      return () => {
        window.removeEventListener("scroll", listener);
      };
    }
  }, []);

  return (
    <nav
      className={`px-8 md:px-24 fixed md:py-4 py-6 bg-bgblue/60 backdrop-filter backdrop-blur-xl w-full max-w-[100vw] top-0 z-20 flex justify-between items-center ${
        handleShow ? "shadow-2xl" : ""
      }`}
    >
      <RouterLink
        // duration={500}
        // href="/"
        // offset={-100}
        // smooth={true}
        // spy={true}
        // title="Wilson"
        to="/"
      >
        <h1 className="text-lg font-semibold">Wilson | PORTFOLIO</h1>
      </RouterLink>

      <ol className="hidden space-x-8 md:flex">
        {navOptions.map((item, i) => (
          <React.Fragment key={i}>
            {/* {item.isExternal ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ) :  */}

            <Link
              onClick={() => {
                if (item.href === "/resume") {
                  // Handle internal navigation to /resume using the navigate function
                  navigate("/resume");
                }
              }}
              activeClass="active"
              duration={500}
              href={item.href}
              offset={-100}
              smooth={true}
              spy={true}
              title={item.name}
              to={item.href}
            >
              {item.name}
            </Link>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export { Header };
