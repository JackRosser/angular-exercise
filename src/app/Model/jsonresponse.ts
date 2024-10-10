import { iPost } from "./i-post"

export interface iJSONresponse {
  //INCOLLO QUI I DATI DERIVATI DA ROOT IN JSON TO TS
  posts: iPost[]
  total: number
  skip: number
  limit: number
}
