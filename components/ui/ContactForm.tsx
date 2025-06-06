"use client";
import { useState, useRef } from "react";

const initialState = {
  name: "",
  email: "",
  service: "",
  message: "",
  contactMethod: "",
  file: null as File | null,
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const validate = () => {
    const newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Email válido requerido.";
    if (!form.service) newErrors.service = "Selecciona un servicio.";
    if (!form.message.trim()) newErrors.message = "Cuéntanos sobre tu proyecto.";
    if (!form.contactMethod) newErrors.contactMethod = "Elige cómo quieres ser contactado.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess(false);
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setLoading(true);
    // Simula envío
    setTimeout(() => {
      setSuccess(true);
      setForm(initialState);
      if (fileInput.current) fileInput.current.value = "";
      setLoading(false);
    }, 1200);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.name ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors`}
          placeholder="Tu nombre completo"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.email ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors`}
          placeholder="tu@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Servicio de interés
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.service ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors`}
        >
          <option value="">Selecciona un servicio</option>
          <option value="creacion">Asesoría en Creación de Proyectos</option>
          <option value="estrategica">Asesoría Estratégica para Negocios</option>
          <option value="digital">Consultoría en Transformación Digital</option>
        </select>
        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
      </div>
      <div>
        <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
          ¿Cómo prefieres ser contactado?
        </label>
        <select
          id="contactMethod"
          name="contactMethod"
          value={form.contactMethod}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.contactMethod ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors`}
        >
          <option value="">Selecciona una opción</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="email">Email</option>
          <option value="llamada">Llamada telefónica</option>
        </select>
        {errors.contactMethod && <p className="text-red-500 text-sm mt-1">{errors.contactMethod}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 border ${errors.message ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none`}
          placeholder="Cuéntanos sobre tu proyecto..."
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <div>
        <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
          Adjuntar archivo (opcional)
        </label>
        <input
          type="file"
          id="file"
          name="file"
          ref={fileInput}
          onChange={handleChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
          accept=".pdf,.doc,.docx,.jpg,.png,.jpeg"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 mt-4 text-center animate-fade-in">
          ¡Tu mensaje ha sido enviado exitosamente! Nos pondremos en contacto pronto.
        </div>
      )}
    </form>
  );
}
