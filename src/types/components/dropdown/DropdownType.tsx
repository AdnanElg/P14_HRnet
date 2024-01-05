export type StateOptionsType = {
  options: { label: string; value: string }[];
};

export type DepartmenOptionType = {
  options: { label: string }[];
};

export type DropdownOptionType = StateOptionsType | DepartmenOptionType;
