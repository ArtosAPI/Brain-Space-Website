// src/pages/ContactsPage.jsx
import { siteSettings } from '../data/siteSettings';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

export default function ContactsPage() {
	return (
		<div className="max-w-6xl mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-[#0B1D3A] mb-12 text-center">Контакты</h1>

			{/* Основной блок: информация + форма */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
				{/* Левая колонка – данные компании */}
				<div>
					<h2 className="text-2xl font-semibold text-[#0B1D3A] mb-6">
						{siteSettings.companyName}
					</h2>
					<div className="space-y-5 text-gray-700">
						<div className="flex items-start gap-3">
							<span className="text-xl mt-1">📍</span>
							<p>{siteSettings.address}</p>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-xl">📞</span>
							<a href={`tel:${siteSettings.phone.replace(/\D/g, '')}`} className="hover:text-[#FF6600]">
								{siteSettings.phone}
							</a>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-xl">✉️</span>
							<a href={`mailto:${siteSettings.email}`} className="hover:text-[#FF6600]">
								{siteSettings.email}
							</a>
						</div>
					</div>
					{/* Социальные ссылки */}
					<div className="mt-8">
						<h3 className="font-semibold text-[#0B1D3A] mb-3">Социальные сети</h3>
						<div className="flex gap-4">
							{Object.entries(siteSettings.socialLinks).map(([key, url]) => (
								<a
									key={key}
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-[#0B1D3A] hover:bg-[#FF6600] hover:text-white transition-colors capitalize"
								>
									{key}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Правая колонка – форма */}
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold text-[#0B1D3A] mb-6">Напишите нам</h2>
					<ContactForm />
					<p className="text-xs text-gray-400 mt-4">
						* Поля обязательны для заполнения
					</p>
				</div>
			</div>

			{/* Карта */}
			<div className="rounded-lg overflow-hidden shadow-md">
				<Map />
			</div>
		</div>
	);
}