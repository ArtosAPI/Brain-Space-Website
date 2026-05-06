import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [status, setStatus] = useState('');

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		setStatus('sending');
		// Замени параметры на свои из EmailJS
		emailjs.send('service_irategm', 'template_ytxx9zd', formData, 'LCv10UElIV85ZgqpR')
			.then(() => {
				setStatus('success');
				setFormData({ name: '', email: '', message: '' });
			})
			.catch(() => setStatus('error'));
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div>
				<input type="text" name="name" placeholder="Ваше имя" required value={formData.name} onChange={handleChange}
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]" />
			</div>
			<div>
				<input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange}
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]" />
			</div>
			<div>
				<textarea name="message" rows="5" placeholder="Ваше сообщение" required value={formData.message} onChange={handleChange}
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6600]" />
			</div>
			<button type="submit" disabled={status === 'sending'}
				className="bg-[#FF6600] text-white px-8 py-3 rounded-md hover:bg-orange-600 transition disabled:opacity-50">
				{status === 'sending' ? 'Отправка...' : 'Отправить'}
			</button>
			{status === 'success' && <p className="text-green-600">✅ Сообщение отправлено!</p>}
			{status === 'error' && <p className="text-red-600">❌ Ошибка отправки. Попробуйте позже.</p>}
		</form>
	);
}