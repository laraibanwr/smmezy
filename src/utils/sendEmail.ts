import emailjs from 'emailjs-com';

export const sendEmail = async (
  formData: { name: string; email: string; phone: string; message: string }
) => {
  const serviceId = 'service_g3dspks';
  const templateId = 'template_9r95aao';
  const publicKey = 'Z56jfjAXZQDdnWokj';

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
    to_name: 'SMMEZY Team',
  };

  return await emailjs.send(serviceId, templateId, templateParams, publicKey);
};