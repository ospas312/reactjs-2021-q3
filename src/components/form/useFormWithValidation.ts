import { useState, useCallback } from 'react';

export default function useFormWithValidation(setCustomValidity: any): any {
  const [values, setValues] = useState({
    name: '',
    date: '',
    country: '',
    gender: '',
    offer: false,
    type: 'card',
  });
  const [errors, setErrors] = useState({
    name: '',
    date: '',
    country: '',
    gender: '',
    offer: '',
  });
  const [isFormValid, setIsFormValid] = useState(false as boolean);

  function handleChange(evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
    const { target } = evt;
    const { name } = target;
    const { value } = target;
    const isCheckbox = target.type === 'checkbox';
    const isRadio = target.type === 'radio';

    setCustomValidity(target);

    setValues({
      ...values,
      // [name]: isCheckbox ? target.checked : isRadio ? target.checked : value,
      [name]: isCheckbox ? (<HTMLInputElement>evt.target).checked : value,
    });

    setErrors({
      ...errors,
      [name]: target.validationMessage,
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Object is possibly 'null'.
    setIsFormValid(target.closest('form').checkValidity());
  }

  const resetForm = useCallback(
    (
      newValues = {
        name: '',
        date: '',
        country: '',
        gender: '',
        offer: false,
        type: 'parent',
      },
      newErrors = {},
      newIsFormValid = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setValues, setErrors, setIsFormValid]
  );

  return {
    values,
    handleChange,
    errors,
    isFormValid,
    resetForm,
  };
}
