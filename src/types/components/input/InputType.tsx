export type RegisterType = {
  name: string;
};

export type InputProps = {
  type: string;
  name: string;
  label: string;
  error?: string;
  register: RegisterType;
};
