import { useState } from "react";
import { styled } from "styled-components";
import BarChart from "./BarChartComponent";
import AreaChart from "./AreaChartComponent";
import { useSelector } from "react-redux";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(false);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <Wrapper>
      <h3>Monthly Applications</h3>
      <button
        type='button'
        onClick={() => {
          setBarChart(!barChart);
        }}
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 4rem;
  text-align: center;
  background-color: var(--white);
  padding: 2rem 2rem 2rem 0;
  border-radius: var(--borderRadiusSmall);
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-dark);
    text-decoration: underline;
    font-size: 1.25rem;
    cursor: pointer;
  }
  button:hover {
    color: var(--primary-extra-dark);
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export default ChartsContainer;
