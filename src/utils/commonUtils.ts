export function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(name);
}

export function validateSurname(surname: string): boolean {
  const surnameRegex = /^[a-zA-Z]+$/;
  return surnameRegex.test(surname);
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex =
    /^(\+?\d{1,4}[\s.-]?)?(\(\d{1,}\)|\d{1,})[\s.-]?\d{1,}[\s.-]?\d{1,}$/;
  return phoneRegex.test(phone);
}
