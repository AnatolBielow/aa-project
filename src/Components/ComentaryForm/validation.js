import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Imię musi zawierać conajmniej 3 znaki!')
      .max(50, 'Imię za długie!')
      .required('Imię jest obowiązkowe!'),
    email: Yup.string().email('Nieprawdłowy e-mail!').required('E-mail jest obowiązkowy'),
    message: Yup.string()
    .min(10, 'Wiadomość musi się składać z conajmniej 10 znaków')
    .required('Wpisz swoją wiadomość'),
 
  });

