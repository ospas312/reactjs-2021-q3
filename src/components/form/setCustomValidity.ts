// Кастомизация ошибок для валидации формы
export default function setCustomValidity(target: any): void {
  target.setCustomValidity('');

  if (!target.validity.valid) {
    if (target.validity.valueMissing) {
      target.setCustomValidity('Это поле обязательно');
    } else if (target.name === 'name' && target.validity.patternMismatch) {
      target.setCustomValidity('Имя и фамилия могут содержать только буквы');
    } else if (target.validity.tooShort) {
      target.setCustomValidity(`Введенное значение должно быть длинее ${target.minLength} символов`);
    } else if (target.validity.tooLong) {
      target.setCustomValidity(`Введенное значение должно быть короче ${target.maxLength} символов`);
    } else if ((target.name === 'gender1' || target.name === 'gender2') && target.validity.patternMismatch) {
      target.setCustomValidity('Пожалуйста, не забудьте выбрать пол');
    }
  }
}
