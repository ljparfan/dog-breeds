import { createContext, ReactNode, FC, useMemo, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { SelectedBreed } from "../models/selectedBreed";
import { fetchBreeds, fetchImageUrlByBreed } from "../services/dogs";
import { getSimilarString } from "../utils/string";
import { AuthContext } from "./AuthContext";

interface DogContextProps {
  breeds: string[];
  selectedBreed?: SelectedBreed;
  loading: boolean;
}

export const DogContext = createContext<DogContextProps>({
  breeds: [],
  selectedBreed: undefined,
  loading: false,
});

interface Props {
  children: ReactNode;
}

export const DogProvider: FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useContext(AuthContext);
  const { data: breeds, isLoading: breedsLoading } = useQuery({
    queryFn: fetchBreeds,
    queryKey: ["breeds"],
    initialData: [],
    refetchOnWindowFocus: false,
    onError() {
      navigate("/unexpected-error");
    },
  });

  const breed = useMemo(() => {
    if (user && breeds.length) {
      return getSimilarString(user.name, breeds);
    }
  }, [user]);

  const { data: selectedBreed, isLoading: selectedBreedLoading } = useQuery({
    enabled: breeds && breeds.length > 0 && isAuthenticated,
    queryFn: () => fetchImageUrlByBreed(getSimilarString(user!.name, breeds)),
    queryKey: ["breeds", breed, "imageUrl"],
    refetchOnWindowFocus: false,
    onError() {
      navigate("/unexpected-error");
    },
  });

  const providerValue = useMemo(
    () => ({
      breeds,
      selectedBreed,
      loading: breedsLoading || selectedBreedLoading,
    }),
    [breeds, selectedBreed]
  );

  return (
    <DogContext.Provider value={providerValue}>{children}</DogContext.Provider>
  );
};
