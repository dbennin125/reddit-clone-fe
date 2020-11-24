import React from "react";
import { Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Button,
} from "@chakra-ui/react";
import { valueScaleCorrection } from "framer-motion/types/render/dom/layout/scale-correction";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useMutation } from "urql";

interface registerProps {}

const REGISTER_MUTATION = `
mutation Register($username: String!, $email: String!, $password: String!) {
    register(userInput: {
      username: $username,  
      email: $email,
      password: $password
    }) {
      errors{
        field
        message
      }
      user {
        id
      }
    }
  }
`;

export const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useMutation(REGISTER_MUTATION);
  return (
    <Wrapper size="small">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          return register(values);
        }}
      >
        {({ isSubmitting }): JSX.Element => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={8} mb={8}>
              <InputField name="email" placeholder="email" label="Email" />
            </Box>

            <InputField
              name="password"
              placeholder="password"
              label="Password"
            />
            <Button
              mt={6}
              type="submit"
              isLoading={isSubmitting}
              colorScheme="green"
            >
              Smash that button
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
