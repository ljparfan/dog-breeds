import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardTitle } from "../components/Card";
import { FormContainer } from "../components/FormContainer";
import { TextField } from "../components/TextField";
import { User, UserSchema } from "../models/user";
import { Container } from "../components/Container";
import { ChangeEvent, useCallback, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Alert } from "../components/Alert";

const AuthCard = styled(Card)`
  max-width: 600px;
`;

const AuthAlert = styled(Alert)`
  max-width: 600px;
`;

export function AuthPage() {
  const { handleAuthentication, error, resetError } = useContext(AuthContext);
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

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldTouched(event.target.name, true);
    formik.handleChange(event);
    resetError();
  }, []);

  return (
    <Container>
      {error && <AuthAlert type="error" message={error} />}
      <AuthCard>
        <CardTitle>Create an account</CardTitle>
        <FormContainer onSubmit={formik.handleSubmit}>
          <TextField
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={handleChange}
            error={formik.touched.name ? formik.errors.name : undefined}
          />
          <TextField
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={handleChange}
            error={formik.touched.email ? formik.errors.email : undefined}
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
