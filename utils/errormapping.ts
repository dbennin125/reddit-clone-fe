import { Field } from "formik";
import { UserFieldError } from "../src/generated/graphql";

export const errorMapping = (errors: UserFieldError[]) => {
  return errors.map(({ field, message }) => {
    return { [field]: message };
  });
};
