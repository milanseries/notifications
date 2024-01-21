import { useFormContext } from "react-hook-form";

export const Form = ({ onSubmit = () => {}, children }: any) => {
  const { handleSubmit } = useFormContext(); // retrieve all hook methods

  return (
    <form id="form" onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
};
