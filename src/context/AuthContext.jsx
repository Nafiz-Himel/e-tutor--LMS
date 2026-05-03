import { createContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("e-tutor-user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("e-tutor-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("e-tutor-user");
    }
  }, [user]);

  const login = (_email) => {
    const mockUser = { name: _email.split("@")[0], email: _email, avatar: "https://picsum.photos/seed/user1/100/100" };
    setUser(mockUser);
    return mockUser;
  };

  const signup = (_name, _email) => {
    const mockUser = { name: _name, email: _email, avatar: "https://picsum.photos/seed/user1/100/100" };
    setUser(mockUser);
    return mockUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
