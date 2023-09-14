import { styled } from "styled-components";

const StatItem = ({ title, count, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h6 className='title'>{title}</h6>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem;
  margin-bottom: 0.2rem;
  /* background: ${(props) => props.color}; */
  border-radius: var(--borderRadiusSmall);
  /* border-bottom: 5px solid ${(props) => props.color}; */
  header {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    /* color: ${(props) => props.color}; */
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
  }
  .icon {
    width: 80px;
    height: 80px;
    background: ${(props) => props.bcg};
    border-radius: var(--borderRadius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 1.3rem;
      color: ${(props) => props.color};
    }
  }
`;
export default StatItem;
