import { styled } from "styled-components";
import { Logo, FormRow } from "../components";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegistered: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isRegistered } = values;
    if (!email || !password || (!isRegistered && !name)) {
      toast.error("Please, fill out all the fields");
      return;
    }
    if (isRegistered) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleRegistered = () => {
    setValues({ ...values, isRegistered: !values.isRegistered });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isRegistered ? "Sign in" : "Sign up"}</h3>
        {/* name */}
        {!values.isRegistered && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? "loading..." : "submit"}
        </button>
        <p>
          {values.isRegistered ? "Not a member yet?" : "Already a jobGo user?"}
          <button
            type='button'
            onClick={toggleRegistered}
            className='register-btn'
          >
            {values.isRegistered ? "Sign up" : "Sign in"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    background-color: var(--white);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .register-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-dark);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

export default Register;
