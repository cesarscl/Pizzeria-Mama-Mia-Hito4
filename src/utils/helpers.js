import { pizzas } from "../pizzas"

// URL base del backend. En local usa el puerto 5000; en Vercel se define VITE_API_URL.
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

// Formatea un número como precio en pesos chilenos, con separador de miles.
// ej: formatPrice(25000) -> "25.000"
export const formatPrice = (price) => price.toLocaleString("es-CL")

// Imagen local de respaldo para una pizza, por id ("p001" o "P001").
// Las imágenes que entrega el backend (Firebase) responden error 402.
export const getFallbackImg = (id = "") =>
  pizzas.find((pizza) => pizza.id.toLowerCase() === id.toLowerCase())?.img

// Para usar en onError de un <img>: cambia a la imagen de respaldo una sola vez.
export const handleImgError = (id) => (e) => {
  const fallback = getFallbackImg(id)
  if (fallback && e.currentTarget.src !== fallback) e.currentTarget.src = fallback
}
