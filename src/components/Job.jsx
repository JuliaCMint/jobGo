import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { PiMapPin, PiCalendarCheck, PiBriefcase } from "react-icons/pi";
import JobInfo from "./JobInfo";
import moment from "moment";
import { deleteJob, setEditJob } from "../features/job/jobSlice";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();

  const date = moment(createdAt).format("MMM Do YY");

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h4>{position}</h4>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo icon={<PiMapPin />} text={jobLocation} />
          <JobInfo icon={<PiCalendarCheck />} text={date} />
          <JobInfo icon={<PiBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className='actions'>
            <button
              type='button'
              className='btn-secondary'
              onClick={() => dispatch(deleteJob(_id))}
            >
              Delete
            </button>
            <Link
              to='/add-job'
              className='btn edit-btn'
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    createdAt,
                    status,
                  })
                )
              }
            >
              Edit
            </Link>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;

  header {
    padding: 3rem 1.5rem;
    border-bottom: 1px solid var(--grey-extra-light);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h4 {
      letter-spacing: 0;
      margin-bottom: 0.25rem;
    }
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-extra-dark);
    border-radius: var(--borderRadius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-medium);
      letter-spacing: var(--letterSpacing);
      font-size: 0.9rem;
    }
  }
  .pending {
    background: #fcefc7;
    color: #ba943a;
  }
  .interview {
    background: #e6fbf0;
    color: #7a9486;
  }
  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
    margin-top: 0.5rem;
  }
  footer {
    display: flex;
    justify-content: flex-end;
    margin: 4rem 0 1.5rem;
    padding: 0 1.5rem;
    @media (max-width: 300px) {
      padding: 0 0.5rem;
    }
  }
  .btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 2rem;
  }
  .edit-btn {
    margin-left: 0.5rem;
  }
  &:hover .actions {
    visibility: visible;
  }

  @media (max-width: 300px) {
    header {
      padding: 3rem 0.5rem;
    }
    .main-icon {
      width: 50px;
      height: 50px;
      margin-right: 1.5rem;
    }
    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export default Job;
