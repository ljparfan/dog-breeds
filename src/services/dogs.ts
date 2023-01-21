import { DogBreedImageResponse } from "../models/dogBreedImageResponse";
import { DogListBreedResponse } from "../models/dogBreedListResponse";
import { dogCeoApiHttpClient } from "./http";

export function fetchBreeds(): Promise<string[]> {
  return dogCeoApiHttpClient
    .get<DogListBreedResponse>("/breeds/list/all")
    .then(({ data: { message } }) =>
      Object.entries(message)
        .map(([breed, subBreed]) =>
          subBreed.length > 0 ? subBreed.map((sb) => `${sb} ${breed}`) : [breed]
        )
        .flatMap((item) => item)
    );
}

export function fetchImageUrlByBreed(breed: string) {
  return dogCeoApiHttpClient
    .get<DogBreedImageResponse>(`/breed/${breed}/images/random`)
    .then((response) => ({
      name: breed,
      imageUrl: response.data.message,
    }));
}
