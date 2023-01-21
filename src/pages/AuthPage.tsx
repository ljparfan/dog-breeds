import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardTitle } from "../components/Card";
import { FormContainer } from "../components/FormContainer";
import { TextField } from "../components/TextFieldInput";
import { User, UserSchema } from "../models/user";
import { Container } from "../components/Container";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthCard = styled(Card)`
  max-width: 600px;
`;

export function AuthPage() {
  const { handleAuthentication } = useContext(AuthContext);
  const navigate = useNavigate();
  const formik = useFormik<User>({
    initialValues: {
      name: "",
      email: "",
    },

    async onSubmit(user) {
      await handleAuthentication(user);
      navigate("/");
    },
    validationSchema: toFormikValidationSchema(UserSchema),
    validateOnMount: true,
  });

  return (
    <Container>
      <AuthCard>
        <CardTitle>Create an account</CardTitle>
        <FormContainer onSubmit={formik.handleSubmit}>
          <TextField
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <TextField
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Button
            type="submit"
            isLoading={formik.isSubmitting}
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </Button>
        </FormContainer>
      </AuthCard>
    </Container>
  );
}
