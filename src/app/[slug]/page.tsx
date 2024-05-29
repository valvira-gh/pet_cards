// ./src/app/[slug]/page.tsx
"use client";
// deps
import { useFormState } from "react-dom";
import { useState } from "react";
import { useRouter } from "next/router";

// shadcn-ui + my components
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
import React from "react";

// DYNCAMIC ROUTES //
const initialState = {
  email: "",
  password: "",
};

const handleAction = async (formState = initialState) => {
  console.log(formState);
  return formState;
};

const LogForm = ({ children }: { children: React.ReactNode }) => {
  const [formState, formAction] = useFormState(handleAction, initialState);

  return (
    <form action={formAction}>
      <CardHeader>
        <CardTitle>
          {children === "register-user"
            ? "Luo uusi käyttäjätili."
            : "Kirjaudu sisään käyttäjälläsi."}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </form>
  );
};

const LogSlugPage = ({ params }: { params: { slug: React.ReactNode } }) => {
  return (
    <Card className="m-4">
      <LogForm>{params.slug}</LogForm>
    </Card>
  );
};

export default LogSlugPage;
