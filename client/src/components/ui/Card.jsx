export default function Card({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-glow transition">
      <h4 className="text-gray-500 text-sm">{title}</h4>
      <p className="text-3xl font-bold text-primary mt-2">
        {value ?? 0}
      </p>
    </div>
  );
}