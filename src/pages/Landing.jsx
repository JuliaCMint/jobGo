import picture from "../assets/images/picture.svg";
import { styled } from "styled-components";
import { Logo } from "../components";

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            repellat rem animi totam, eligendi eaque odit ipsa ullam suscipit
            odio voluptate voluptatibus ab consequatur fugiat pariatur? Delectus
            modi accusamus repudiandae!
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={picture} alt='job' className='img main-img' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
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
