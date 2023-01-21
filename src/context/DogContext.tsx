import {
  createContext,
  useState,
  ReactNode,
  FC,
  useMemo,
  useEffect,
  useContext,
} from "react";
import { fetchBreeds, fetchImageUrlByBreed } from "../services/dogs";
import { getSimilarString } from "../utils/string";
import { AuthContext } from "./AuthContext";

interface DogContextProps {
  breeds: string[];
}

export const DogContext = createContext<DogContextProps>({
  breeds: [],
});

interface Props {
  children: ReactNode;
}

export const DogProvider: FC<Props> = ({ children }) => {
  const [breeds, setBreeds] = useState<string[]>([]);
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
      fetchImageUrlByBreed(breed).then((imageUrl) => {
        console.log(imageUrl);
      });
    }
  }, [user, breeds]);

  const providerValue = useMemo(
    () => ({
      breeds,
    }),
    [breeds]
  );

  return (
    <DogContext.Provider value={providerValue}>{children}</DogContext.Provider>
  );
};
