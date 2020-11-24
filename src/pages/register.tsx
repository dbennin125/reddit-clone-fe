import React from "react";
import { Form, Formik, setErrors } from "formik";
import { Box, Button } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useMutation } from "urql";
import { useRegisterMutation } from "../generated/graphql";
import { errorMapping } from "../../utils/errormapping";

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useRegisterMutation();
  return (
    <Wrapper size="small">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register(values);
          if (response.data?.register.errors) {
            setErrors(errorMapping(response.data.register.errors));
          } else if (response.data?.register.user) {
            //push to next page
            //work on this tomorrow. too tired.
          }
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
