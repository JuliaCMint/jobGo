import { styled } from "styled-components";
import Logo from "./Logo";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import { NavLink } from "react-router-dom";
import links from "../utils/links.jsx";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className='content'>
          <button className='close-btn' onClick={toggle}>
            <IoCloseOutline />
          </button>
          <header>
            <Logo />
            <div className='nav-links'>
              {links.map((link) => {
                const { id, text, path, icon } = link;
                return (
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    key={id}
                    onClick={toggle}
                    end
                  >
                    <span className='icon'>{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </header>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--white);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--black);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-dark);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--grey-light);
  }
  .nav-link:hover .icon {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-light);
  }
  .active .icon {
    color: var(--primary-dark);
  }
`;
export default SmallSidebar;
