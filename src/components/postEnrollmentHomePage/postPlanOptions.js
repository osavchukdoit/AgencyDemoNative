import StdSvg from "../../assets/icons/plans/std.svg";
import CiSvg from "../../assets/icons/plans/ci.svg";
import TermSvg from "../../assets/icons/plans/term.svg";

export const personDependants = [
  {
    name: "Mary Smith",
    value: "Spouse - Dependant",
    id: 1,
  },
  {
    name: "Josh Doe",
    value: "Child - Dependant",
    id: 2,
  },
];

export const postPlanOptions = [
  {
    id: 1,
    title: "Short Time Disability 7-7-25",
    effectiveDate: "Effective 03/03/2023",
    cost: "23.00",
    icon: <StdSvg />,
  },

  {
    id: 2,
    title: "Critical Illness $20,000",
    effectiveDate: "Effective 03/03/2023",
    cost: "23.00",
    icon: <CiSvg />,
  },

  {
    id: 3,
    title: "Group Voluntary Term Life",
    effectiveDate: "Effective 03/03/2023",
    cost: "8.31",
    icon: <TermSvg />,
  },
];

export const planInformation = [
  {
    id: 1,
    title: "Type of Benefit Coverage",
    value: "Non Occupational",
  },

  {
    id: 2,
    title: "Elimination Period",
    value: "7 days injury/ 7 days illness",
  },

  {
    id: 3,
    title: "Benefit Duration in Weeks",
    value: "25 weeks",
  },

  {
    id: 4,
    title: "Weekly Benefit Maximumas a Percentage of Salary",
    value: "60.00%",
  },

  {
    id: 5,
    title: "Employee and Family",
    value: "$8.58",
  },
];
