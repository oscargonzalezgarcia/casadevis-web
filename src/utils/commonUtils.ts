export function validateName(name: string) {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
  return nameRegex.test(name);
}

export function validateSurname(surname: string) {
  const surnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+( [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
  return surnameRegex.test(surname);
}

export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex =
    /^(\+?\d{1,4}[\s.-]?)?(\(\d{1,}\)|\d{1,})[\s.-]?\d{1,}[\s.-]?\d{1,}$/;
  return phoneRegex.test(phone);
}

export function validateText(text: string) {
  const textRegex = /^[A-Za-z]+$/;
  return textRegex.test(text);
}

export function validateNumber(number: string) {
  const numberRegex = /^\d{1,10}$/;
  return numberRegex.test(number);
}


