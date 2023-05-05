import React from "react";

export type CardType = React.FC<{
  item: { icon: string; title: string; value: string };
  className: string;
}>;

export type UserTagType = React.FC<{ className: string; type: string }>;

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
  prevData: {
    name: string;
    email: string;
    phone: string;
    date: string;
    status: string;
    organization: string;
  };
  toogleFilter: Function;
  setCurrentPage: Function;
}>;

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
};
