export type Company = "BSEBP"

export type CompanyDetail = {
  name: string
  longName: string
  duration: string
  roles?: JSX.Element[]
}

export const Educations: {
  [key in Company]: CompanyDetail
} = {
  BSEBP: {
    name: "BIHAR SCHOOL EXAMINATION BOARD, PATNA",
    longName: "BIHAR SCHOOL EXAMINATION BOARD, PATNA",
    duration: "Matric Pass at 1998",
    roles: [<>I completed my 8th, Bihar in 1996.</>],
  },
}

export const EducationsList = [Educations.BSEBP]
