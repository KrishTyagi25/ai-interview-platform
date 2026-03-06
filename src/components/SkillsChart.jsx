import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts";

const data = [
  { subject: "Technical", score: 80 },
  { subject: "Communication", score: 65 },
  { subject: "Confidence", score: 70 },
  { subject: "Problem Solving", score: 75 },
  { subject: "Clarity", score: 60 },
];

function SkillsChart() {
  return (
    <div className="w-full h-96 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_50px_rgba(139,92,246,0.25)]">

      <h2 className="text-xl font-semibold mb-4 text-center">
        Skill Performance
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="70%">

          {/* Gradient */}
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9}/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.3}/>
            </linearGradient>
          </defs>

          <PolarGrid stroke="#333" />

          <PolarAngleAxis
            dataKey="subject"
            stroke="#9ca3af"
            tick={{ fontSize: 12 }}
          />

          <Radar
            dataKey="score"
            stroke="#8b5cf6"
            fill="url(#colorGradient)"
            fillOpacity={0.7}
          />

        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillsChart;