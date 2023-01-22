import { createContext, useState, ReactNode, FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../models/user";
import { validateEmail } from "../services/auth";

interface AuthContextProps {
  user: User | null;
  handleAuthentication: (user: User) => Promise<void>;
  isAuthenticated: boolean;
  error?: string;
  resetError: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: { name: "", email: "" },
  handleAuthentication: (user: User) => new Promise(() => {}),
  isAuthenticated: false,
  error: undefined,
  resetError: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleAuthentication = async (user: User) => {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const validationResponse = await validateEmail(user.email);
        if (validationResponse.deliverability === "UNDELIVERABLE") {
          const errorMessage = "Email is not deliverable";
          setError(errorMessage);
          reject(errorMessage);
        }

        setUser(user);
        resolve();
      } catch (error) {
        /**Not expecting any errors from API so any errors coming from API are unexpected */
        const errorMessage = "An unexpected error occurred";

        setError(errorMessage);
        reject(errorMessage);
        navigate("/unexpected-error");
      }
    });
  };

  const resetError = () => {
    setError(undefined);
  };

  const providerValue = useMemo(
    () => ({
      user,
      handleAuthentication,
      isAuthenticated: !!user,
      error,
      resetError,
    }),
    [user, error]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
