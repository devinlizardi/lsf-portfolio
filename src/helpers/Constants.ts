import works from "../assets/works"

export const Filters = ["freelance", "commercial"]

export const NonMusicWorkList = works.filter((w) => w.type != "music")

export const DefaultItem = {
  title: "#########",
  type: "#########",
  filter: "",
  date: "#########",
  url: "",
}

export const Months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
