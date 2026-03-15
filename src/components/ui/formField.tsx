import { FieldError } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  error?: FieldError;
  children: React.ReactNode;
}

const FormField = ({ id, label, error, children }: Props) => (
  <div>
    <label
      htmlFor={id}
      className="block text-xs font-semibold uppercase tracking-widest mb-2 text-text-secondary"
    >
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 text-xs text-destructive">
        {error.message}
      </p>
    )}
  </div>
);

export default FormField;
