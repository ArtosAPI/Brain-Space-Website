export const projects = [
	{
		id: "smartdelivery",
		title: "SmartDelivery",
		client: "ООО «Логистика Плюс»",
		description: "Мобильное приложение для водителей и диспетчеров службы доставки. Позволяет отслеживать заказы в реальном времени, строить маршруты, сканировать штрихкоды, отправлять push-уведомления. Интегрировано с внутренней CRM через REST API.",
		techStack: ["React Native", "Firebase", "AWS"],
		image: "https://placehold.co/600x400/0B1D3A/FF6600?text=SmartDelivery",
		screenshots: [
			"screenshots/smartdelivery.png",
			"screenshots/smartdelivery1.png"
		],
		year: 2025,
	},
	{
		id: "eduhub",
		title: "EduHub",
		client: "ЧОУ ДПО «Академия Знаний»",
		description: "Образовательная платформа для онлайн-курсов. Включает личные кабинеты учеников и преподавателей, видеоплеер, систему тестирования, чат и форум. Поддерживает интеграцию с платёжными шлюзами.",
		techStack: ["React", "Node.js", "PostgreSQL", "WebSocket"],
		image: "https://placehold.co/600x400/0B1D3A/FF6600?text=EduHub",
		screenshots: [],
		year: 2024,
	},
	{
		id: "medapp",
		title: "MedApp",
		client: "Сеть клиник «Здоровье»",
		description: "Телемедицинское приложение для записи к врачам, видеоконсультаций и хранения электронной медкарты. Реализована двухфакторная аутентификация, расписание врачей и загрузка документов.",
		techStack: ["React Native", "Python", "Django", "Docker"],
		image: "https://placehold.co/600x400/0B1D3A/FF6600?text=MedApp",
		screenshots: [
			"screenshots/medapp.png"
		],
		year: 2024,
	},
	{
		id: "shopflow",
		title: "ShopFlow",
		client: "Розничная сеть «У дома»",
		description: "Система управления товарооборотом для менеджеров магазинов. Включает учёт остатков, прогнозирование спроса, автозаказ у поставщиков. Интегрируется с кассовыми программами.",
		techStack: ["React", "Node.js", "MongoDB", "Docker"],
		image: "https://placehold.co/600x400/0B1D3A/FF6600?text=ShopFlow",
		screenshots: [
			"screenshots/shopflow1.png",
			"screenshots/shopflow2.png",
		],
		year: 2023,
	},
	{
		id: "crmplus",
		title: "CRM+",
		client: "ООО «Брэйн Спэйс технологии» (собственный продукт)",
		description: "Гибкая CRM для небольших IT-команд. Управление сделками, задачами, проектами и спринтами. Интеграция с Telegram, Git-репозиториями и календарями. Есть встроенная отчётность и дашборды.",
		techStack: ["React", "Node.js", "PostgreSQL", "Redis"],
		image: "https://placehold.co/600x400/0B1D3A/FF6600?text=CRM%2B",
		screenshots: [
			"screenshots/crmplus.png",
			"screenshots/crmplus1.png"
		],
		year: 2022
	}
];