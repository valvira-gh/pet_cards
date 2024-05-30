// ./src/components/log-page.tsx
"use client";
// dependencies
import { useState } from "react";
import { useFormState } from "react-dom";
import { createUser } from "@/lib/actions";

import Link from "next/link";
// shadcn-ui components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// DYNCAMIC ROUTES //
const initialState = {
  message: "",
};

type FormState = typeof initialState;

const handleAction = async (formState = initialState) => {};

export const LogForm = ({ children }: { children: React.ReactNode }) => {
  const [formState, formAction] = useFormState(createUser, initialState);

  return (
    <form action={formAction}>
      <CardHeader>
        <CardTitle>
          {children === "register-user"
            ? "Luo uusi käyttäjätili"
            : "Kirjaudu sisään käyttäjälläsi"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Input name="email" placeholder="Email" />
        <Input name="password" placeholder="Password" />
      </CardContent>
      <CardFooter>
        {formState.message && (
          <CardDescription>{formState.message}</CardDescription>
        )}
        <Button>Submit</Button>
      </CardFooter>
    </form>
  );
};

type LinkComponentProps = {
  href: string;
  children: React.ReactNode;
};

const LinkComponent: React.FC<LinkComponentProps> = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

const LogComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[370px] h-full border-2 p-4 rounded">
      <p className="text-lg">
        Et ole vielä kirjautunut. Käyttääksesi sovelluksen toimintoja tulee
        sinun olla luonut oma käyttäjä ja sisäänkirjautunut.
      </p>
      <h2 className="text-2xl font-bold flex justify-between items-center">
        <LinkComponent href={`/login-user`}>Kirjaudu</LinkComponent>
        <div className="m-2"> | </div>
        <LinkComponent href={`/register-user`}>Rekisteröidy</LinkComponent>
      </h2>
    </div>
  );
};

export default LogComponent;
