export interface ArticleRequest {
  titre: string;
  contenu: string;
  date_publi: string;
  image_url: string;
  category: {
    id: number;
    nom: string;
  };
  utilisateur?: {
    id: number;
    nom: string;
    prenom: string;
    email: string;
  };
  id?: number;
}
