export const validateEmail = (email: string) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string) => {
  return phone.startsWith('+98');
};
