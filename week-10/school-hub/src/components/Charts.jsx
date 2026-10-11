import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const studentData = [
  { month: "Jan", students: 20 },
  { month: "Feb", students: 25 },
  { month: "Mar", students: 22 },
  { month: "Apr", students: 30 },
  { month: "May", students: 35 },
  { month: "Jun", students: 40 },
];

const genderData = [
  { name: "Male", value: 55 },
  { name: "Female", value: 45 },
];

const COLORS = ["#2563eb", "#ec4899"];

const Charts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

      {/* Line Chart */}
      <div className="bg-white rounded-2xl shadow-sm p-5">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Students Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={studentData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="students"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>


      {/* Pie Chart */}
      <div className="bg-white rounded-2xl shadow-sm p-5">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Student Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>

            <Pie
              data={genderData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {genderData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;