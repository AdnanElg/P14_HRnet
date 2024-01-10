import { Control, FieldValues, FieldPath } from "react-hook-form";

export type DatePickerPropsType<TFieldValues extends FieldValues> = {
  label: string;
  name: FieldPath<TFieldValues>;
  error?: string;
  control: Control<TFieldValues>;
  resetKey?: string;
};
