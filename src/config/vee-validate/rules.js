import { defineRule } from 'vee-validate';


defineRule('required', value => {
  if (!value || !value.length) {
    return 'აუცილებელია შეავსოთ ველი';
  }
  return true;
});

defineRule('minLength', value => {
  if (value.length < 3) {
    return "აუცილებელია მინიმუმ 3 სიმბოლო";
  }
  return true;
});

defineRule('email', value => {
  if (!/^[A-Z0-9._%+-]+@.*redberry\.ge$/i.test(value)) {
    return 'გთხოვთ მიუთითოთ ვალიდური მეილის მისამართი';
  }
  return true;
});
defineRule('alphabet', value => {
  if (!/^[ა-ჰ]+$/gm.test(value)) {
    return 'გთხოვთ გამოიყენოთ ქართული ასოები';
  }
  return true;
});

