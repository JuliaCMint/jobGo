import { Link } from "react-router-dom";
import imgError from "../assets/images/not-found.svg";
import { styled } from "styled-components";

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={imgError} alt='not found' />
        <h3>Something went wrong!</h3>
        <p>Page not found</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-light);
  }
  a {
    color: var(--primary-dark);
    text-decoration: underline;
    text-transform: uppercase;
  }
`;

export default Error;
