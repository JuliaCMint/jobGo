import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { changePage } from "../features/allJobs/allJobsSlice";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
  };

  return (
    <Wrapper>
      <button className='prev-btn' onClick={prevPage}>
        <AiOutlineLeft />
        <p>prev</p>
      </button>
      <div className='btn-container'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className='next-btn' onClick={nextPage}>
        {" "}
        <p>next</p>
        <AiOutlineRight />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;

  .btn-container {
    border-radius: var(--borderRadius);
  }
  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 40px;
    height: 40px;
    font-weight: 600;
    font-size: 1rem;
    color: var(--grey-dark);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
    @media (max-width: 600px) {
      width: 25px;
      height: 25px;
      font-size: 0.6rem;
    }
    @media (max-width: 300px) {
      width: 20px;
      height: 20px;
      font-size: 0.6rem;
    }
  }
  .active {
    background: var(--primary-light);
    color: var(--primary-extra-dark);
  }
  .prev-btn,
  .next-btn {
    width: 100px;
    height: 40px;
    background: var(--white);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--grey-dark);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
    p {
      margin: 0;
    }
    @media (max-width: 600px) {
      width: 30px;
      height: 30px;

      p {
        display: none;
      }
    }
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-light);
    color: var(--primary-extra-dark);
  }
`;

export default PageBtnContainer;
