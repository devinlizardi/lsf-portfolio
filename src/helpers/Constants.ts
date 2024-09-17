import works from "../assets/works"

export const DefaultWorksList = works.filter((w) => !w.disabled)

export const DefaultItem = {
  title: "#########",
  type: "#########",
  filter: "",
  date: "#########",
  url: "",
}

export const Months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
