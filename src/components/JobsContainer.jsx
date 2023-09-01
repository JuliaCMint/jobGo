import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import Job from "./Job";

const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <Wrapper>
        <h2>Loading</h2>
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className='jobs'>
        console.log(job) return <Job key={jobs._id} {...job} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default JobsContainer;
