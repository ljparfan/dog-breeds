export interface DogListBreedResponse {
  status: string;
  message: {
    [key: string]: string[];
  };
}
