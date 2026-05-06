export default function ServiceCard({ service }) {
	return (
		<div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
			<div className="text-4xl mb-4">{service.icon}</div>
			<h3 className="text-xl font-bold text-[#0B1D3A] mb-2">{service.title}</h3>
			<p className="text-gray-600">{service.shortDescription}</p>
		</div>
	);
}