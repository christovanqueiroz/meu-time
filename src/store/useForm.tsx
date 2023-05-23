import {create} from "zustand";
import api from "../services/api";

type FormState = {
  apiKey: string
  setApiKey: (newApiKey: string) => void
}


// Cria uma store para armazenar o estado do formulário
export const useForm = create<FormState>((set) => ({
  apiKey: '',
  setApiKey: (newApiKey: string) => {
    // Realiza uma interceptação na requisição para adicionar o header com a api key
    api.interceptors.request.use(config => {
      config.headers["X-RapidAPI-Key"] = newApiKey
      return config
    })
    // Atualiza o estado de apiKey com o novo valor adicionado
    set({apiKey: newApiKey})
  }
}));