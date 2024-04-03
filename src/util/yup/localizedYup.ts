import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    default: 'yup.field_invalid'
  },
});

export { Yup as localizedYup };
