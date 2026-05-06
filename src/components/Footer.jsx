import { siteSettings } from '../data/siteSettings';

export default function Footer() {
	return (
		<footer className="bg-[#0B1D3A] text-white mt-auto">
			<div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
				<div>
					<h3 className="font-bold text-lg mb-2">{siteSettings.companyName}</h3>
					<p>{siteSettings.address}</p>
					<p>Тел: {siteSettings.phone}</p>
					<p>Email: {siteSettings.email}</p>
				</div>
				<div>
					<h4 className="font-semibold mb-2">Соцсети</h4>
					<ul className="space-y-1">
						{Object.entries(siteSettings.socialLinks).map(([key, url]) => (
							<li key={key}>
								<a href={url} target="_blank" className="hover:text-[#FF6600] capitalize">{key}</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="font-semibold mb-2">Навигация</h4>
					{/* можно повторить ссылки */}
				</div>
			</div>
		</footer>
	);
}