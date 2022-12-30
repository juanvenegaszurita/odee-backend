import { type } from "os"

export interface Users {
  id          :number
  name        :string
  clave       :string
  createdAt   :Date
  roles_id    :number
}

export interface Roles {
  id          :number
  description :string
}

export interface Business {
  id          :number
  name        :string
  rut         :string
  users_id    :number
}

export interface Clients {
  id          :number
  name        :string
  rut         :string 
  address     :string
  business_id :number
}

export interface Quotes {
  id          :number
  title       :string
  detail      :string
  dateQuote   :string
  clients_id  :number
  file_id     :number
}

export interface ProdServ {
  id        :number
  detail    :string
  price     :number
  type      :string
}

export interface ItemsQuotes {
  id            :number
  cant          :number
  total         :number
  quotes_id     :number
  prodServ_id   :number
}

export interface File {
  id            :number
  url           :string
  mimeType      :string
  typeFile_id   :number
}

export interface TypeFile {
  id    :number
  name  :string
}