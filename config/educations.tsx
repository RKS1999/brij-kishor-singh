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
    roles: [
      <>
        I completed my Metric from Bihar School Examination Board, Patna in
        1998.
      </>,
    ],
  },
}

export const EducationsList = [Educations.BSEBP]
