import {
  createContext,
  useState,
  ReactNode,
  FC,
  useMemo,
  useEffect,
  useContext,
} from "react";
import { SelectedBreed } from "../models/selectedBreed";
import { fetchBreeds, fetchImageUrlByBreed } from "../services/dogs";
import { getSimilarString } from "../utils/string";
import { AuthContext } from "./AuthContext";

interface DogContextProps {
  breeds: string[];
  selectedBreed: SelectedBreed | null;
}

export const DogContext = createContext<DogContextProps>({
  breeds: [],
  selectedBreed: null,
});

interface Props {
  children: ReactNode;
}

export const DogProvider: FC<Props> = ({ children }) => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<SelectedBreed | null>(
    null
  );
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadBreeds = async () => {
      const breeds = await fetchBreeds();
      setBreeds(breeds);
    };

    loadBreeds();
  }, []);

  useEffect(() => {
    if (user && breeds.length > 0) {
      const breed = getSimilarString(user.name, breeds);
      const loadBreedImage = async () => {
        const { imageUrl, name } = await fetchImageUrlByBreed(breed);
        setSelectedBreed({
          imageUrl,
          name,
        });
      };
      loadBreedImage();
    }
  }, [user, breeds]);

  const providerValue = useMemo(
    () => ({
      breeds,
      selectedBreed,
    }),
    [breeds, selectedBreed]
  );

  return (
    <DogContext.Provider value={providerValue}>{children}</DogContext.Provider>
  );
};
