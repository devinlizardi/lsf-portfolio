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
