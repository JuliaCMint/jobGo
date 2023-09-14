import { styled } from "styled-components";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#6136bf", "#41EAD4", "#F71735"];

const PieChartComponent = ({ data }) => {
  return (
    <div style={{ width: "300px", height: 300 }}>
      <ResponsiveContainer>
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            innerRadius={65}
            outerRadius={70}
            // fill='#6136bf'
            paddingAngle={1}
            dataKey='count'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const Wrapper = styled.article`
  background: transparent;
  border-radius: var(--borderRadiusSmall);
`;

export default PieChartComponent;
