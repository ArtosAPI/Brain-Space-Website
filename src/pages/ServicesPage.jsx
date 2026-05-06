// src/pages/ServicesPage.jsx
import { useState } from 'react';
import { services } from '../data/services';

export default function ServicesPage() {
	// Поисковый запрос
	const [searchQuery, setSearchQuery] = useState('');
	// ID открытой в данный момент услуги (для аккордеона)
	const [expandedId, setExpandedId] = useState(null);

	// Фильтрация услуг по названию или краткому описанию
	const filteredServices = services.filter(service =>
		service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
		service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
	);

	// Обработчик переключения аккордеона
	const toggleExpand = (id) => {
		setExpandedId(prev => (prev === id ? null : id));
	};

	return (
		<div className="max-w-6xl mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-[#0B1D3A] mb-8 text-center">Наши услуги</h1>

			{/* Поисковый фильтр */}
			<div className="mb-10 max-w-md mx-auto">
				<input
					type="text"
					placeholder="Поиск услуг..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600] text-[#0B1D3A]"
				/>
			</div>

			{filteredServices.length === 0 ? (
				<p className="text-center text-gray-500">Услуги не найдены</p>
			) : (
				<div className="space-y-6">
					{filteredServices.map(service => (
						<div
							key={service.id}
							className="bg-white rounded-lg shadow-md overflow-hidden"
						>
							{/* Заголовок карточки (всегда видимый) */}
							<div
								className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
								onClick={() => toggleExpand(service.id)}
							>
								<div className="flex items-center gap-4">
									<span className="text-3xl">{service.icon}</span>
									<h2 className="text-xl font-bold text-[#0B1D3A]">{service.title}</h2>
								</div>
								<span className="text-[#FF6600] text-2xl font-bold">
									{expandedId === service.id ? '−' : '+'}
								</span>
							</div>

							{/* Раскрывающееся описание (только если выбран этот элемент) */}
							{expandedId === service.id && (
								<div className="px-6 pb-6 pt-0">
									<p className="text-gray-700 leading-relaxed">{service.fullDescription}</p>
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
}