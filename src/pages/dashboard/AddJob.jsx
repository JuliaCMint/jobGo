import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { styled } from "styled-components";
import { FormRow, FormRowSelect } from "../../components";
import {
  clearValues,
  handleChange,
  createJob,
} from "../../features/job/jobSlice";
import { useEffect } from "react";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    dispatch(
      handleChange({
        name: "jobLocation",
        value: user.location,
      })
    );
  }, []);

  return (
    <Wrapper>
      <form className='form'></form>
      <h3>{isEditing ? "edit job" : "add job"}</h3>
      <div className='form-center'>
        {/* position */}
        <FormRow
          type='text'
          name='position'
          value={position}
          handleChange={handleJobInput}
        />
        {/* company */}
        <FormRow
          type='text'
          name='company'
          value={company}
          handleChange={handleJobInput}
        />
        {/* jobLocation */}
        <FormRow
          type='text'
          name='jobLocation'
          labelText='job location'
          value={jobLocation}
          handleChange={handleJobInput}
        />
        {/* status */}
        <FormRowSelect
          name='status'
          value={status}
          handleChange={handleJobInput}
          list={statusOptions}
        />
        {/* job type */}
        <FormRowSelect
          name='jobType'
          labelText='job type'
          value={jobType}
          handleChange={handleJobInput}
          list={jobTypeOptions}
        />

        <div className='btn-container'>
          <button
            type='button'
            className='btn btn-block clear-btn'
            onClick={() => dispatch(clearValues())}
          >
            clear
          </button>
          <button
            type='submit'
            className='btn btn-block submit-btn'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            submit
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    color: var(--primary-dark);
    background-color: var(--white);
    border-color: var(--grey-light);
  }
  .clear-btn:hover {
    color: var(--black);
    border-color: var(--primary-dark);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default AddJob;
