import { ReactNode } from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";

type FormProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
};

export const Form = <T extends FieldValues>({ onSubmit, children }: FormProps<T>) => {
  const { handleSubmit } = useFormContext<T>();

  return (
    <form id="form" onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
};
