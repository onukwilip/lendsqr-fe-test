import React from "react";

export type CardType = React.FC<{
  item: { icon: string; title: string; value: string | number };
  className: string;
}>;

export type UserTagType = React.FC<{ className?: string; type: string }>;

export type PaginationType = React.FC<{
  totalData: number;
  dataPerPage: number;
  paginate: Function;
  currentPage: number;
  currentData: number;
}>;

export type OnSelectBoxChangeType = (
  e: any,
  data: { [x: string]: any; value: string }
) => void;

export type FilterType = React.FC<{
  setData: Function;
  allData: UserType[];
  persistData: Function;
  prevData: PersistedDataType;
  toogleFilter: Function;
  setCurrentPage: Function;
}>;

export type PersistedDataType = {
  name: string;
  email: string;
  phone: string;
  date: string;
  status: string;
  organization: string;
};

export type UserType = {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: string;
  tag?: string;
};

export type MappedUsertype = {
  ["personal information"]: {
    ["full name"]: string;
    ["phone number"]: string;
    ["email address"]: string;
    ["bvn"]: string;
    ["gender"]: string;
    ["marital status"]: string;
    ["children"]: string;
    ["type of residence"]: string;
  };
  ["education and employment"]: {
    ["level of education"]: string;
    ["employment status"]: string;
    ["sector of employment"]: string;
    ["duration of employment"]: string;
    ["office email"]: string;
    ["monthly income"]: string;
    ["loan repayment"]: string;
  };
  ["Socials"]: {
    ["twitter"]: string;
    ["facebook"]: string;
    ["instagram"]: string;
  };
  ["guarantor"]: {
    ["full name"]: string;
    ["phone number"]: string;
    ["email address"]: string;
    ["relationship"]: string;
  };
};

export type UserOptionsType = React.FC<{
  user: UserType;
}>;

export type ProfileSectionType = React.FC<{
  header?: string;
  profileDetails: any;
}>;

export type MobileMenuType = React.FC<{ toogleMenu: Function }>;

export type LoginFormType = React.FC<{
  onSubmit?: Function;
  tooglePasswordType?: Function;
}>;

export type PasswordInputType = React.FC<{
  passwordType: string;
  tooglePassword: Function;
}>;

export type MockLoginFormType = React.FC<{
  onSubmit: Function;
  tooglePasswordType: Function;
}>;
