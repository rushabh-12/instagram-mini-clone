import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, login } = useLogin();

  return (
    <>
      <Input
        placeholder="Email"
        value={email}
        type="email"
        fontSize={15}
        size={"sm"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        type="password"
        fontSize={15}
        size={"sm"}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={15}
        isLoading={loading}
        onClick={() => login(email, password)}
      >
        Log In
      </Button>
    </>
  );
};

export default Login;
