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

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper size="small">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
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
