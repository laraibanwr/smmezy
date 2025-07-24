import emailjs from 'emailjs-com';

export const sendEmail = async (
  formData: { name: string; email: string; phone: string; message: string }
) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    to_name: 'SMMEZY Team',
  };

  return await emailjs.send(serviceId, templateId, templateParams, publicKey);
};