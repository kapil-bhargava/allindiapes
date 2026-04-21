import emailjs from "@emailjs/browser";

export const sendEmail = async (data) => {
  try {
    const res = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      data,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );

    return { success: true };
  } catch (err) {
    return { success: false, error: err };
  }
};