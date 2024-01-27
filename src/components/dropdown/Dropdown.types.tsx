// Import module :
import { Control, FieldValues, FieldPath } from "react-hook-form";

export type DropdownOptionType = {
  options: { label: string; value: string }[];
};

export type DropDownPropsType<TFieldValues extends FieldValues> = {
  label: string;
  name: FieldPath<TFieldValues>;
  options: DropdownOptionType["options"];
  error?: string;
  control: Control<TFieldValues>;
  resetKey?: string;
  dataTestId: string;
};
