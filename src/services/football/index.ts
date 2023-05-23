import api from "../api";

// Service para buscar dados da api-football
export const footballApi = {
  getTeams: (id: string) => {
    return api.get('/teams', {
      params: {
        id: id,
      }
    }
  )}
}