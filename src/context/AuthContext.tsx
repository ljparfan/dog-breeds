import { createContext, useState, ReactNode, FC, useMemo } from "react";
import { User } from "../models/user";
import { validateEmail } from "../services/auth";

interface AuthContextProps {
  user: User | null;
  handleAuthentication: (user: User) => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  user: { name: "", email: "" },
  handleAuthentication: (user: User) => new Promise(() => {}),
  isAuthenticated: false,
});

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const handleAuthentication = async (user: User) => {
    return new Promise<void>(async (resolve, reject) => {
      const validationResponse = await validateEmail(user.email);
      if (validationResponse.deliverability === "UNDELIVERABLE") {
        reject("Email is not deliverable");
      }

      setUser(user);
      resolve();
    });
  };

  const providerValue = useMemo(
    () => ({
      user,
      handleAuthentication,
      isAuthenticated: !!user,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
