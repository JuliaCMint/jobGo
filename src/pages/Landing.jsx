import picture from "../assets/images/picture.svg";
import { styled } from "styled-components";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Organize your job search with jobGo. Keep it simple.
            <br /> Track your progress. Stay focused.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={picture} alt='job' className='img main-img' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: var(--white);
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .logo {
    width: 8rem;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-dark);
    }
  }
  p {
    color: var(--grey-dark);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
