" use server";
import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormState = {
  message: string;
};

export const createUser = async (formState: FormState, formData: FormData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    const result = createUserSchema.safeParse({
      email: email,
      password: password,
    });

    if (result.success) {
      console.log("After safe parsing: ", result);
      formState.message = "User created";
      return formState.message;
    } else {
      console.log("After safe parsing: ", result);
      formState.message = "User not created";
      return formState;
    }
  } catch (err: unknown) {
    console.error(err);
    formState.message = "User not created";
    return formState;
  }
};
