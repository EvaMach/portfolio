import { FormValues } from "./ContactForm";

const EmailTemplate = ({ formValues }: { formValues: FormValues; }) => (
  <div>
    {formValues.name && <p>Name: {formValues.name}</p>}
    {formValues.email && <p>Email: {formValues.email}</p>}
    {formValues.message && <p>Message: {formValues.message}</p>}
  </div>
);

export default EmailTemplate;