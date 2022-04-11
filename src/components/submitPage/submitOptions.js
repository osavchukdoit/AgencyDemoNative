import StdSvg from "../../assets/icons/plans/std.svg";
import CiSvg from "../../assets/icons/plans/ci.svg";
import TermSvg from "../../assets/icons/plans/term.svg";

export const submitOptions = [
  {
    id: 1,
    title: "Short Time Disability 7-7-25",
    subTitle: "Employee and Family",
    price: "23.00",
    icon: <StdSvg />,
  },
  {
    id: 2,
    title: "Critical Illness $20,000",
    subTitle: "Employee and Family",
    price: "23.00",
    icon: <CiSvg />,
  },
  {
    id: 3,
    title: "Group Voluntary Term Life",
    subTitle: "Employee and Spouse",
    price: "8.31",
    icon: <TermSvg />,
  },
];

export const disclaimersPoints = [
  {
    id: 1,
    text: "By clicking the “Submit” button below, I agree to accept the elected and waived coverages, beneficiary designations if applicable by electronic means.",
  },

  {
    id: 2,
    text: "I understand that the terms and conditions of each Benefit Plan are governed as per the official plan design and administration document.",
  },

  {
    id: 3,
    text: "I agree that all the information I have provided here is accurate and correct.",
  },

  {
    id: 4,
    text: "I understand that all benefits are contingent upon successful enrollment completion and acceptance by the respective insurance carriers or benefit administrators.",
  },
];
