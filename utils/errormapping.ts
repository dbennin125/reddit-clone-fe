import { Field } from "formik";
import { UserFieldError } from "../src/generated/graphql";

export const errorMapping = (errors: UserFieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });
  return errorMap;
};
