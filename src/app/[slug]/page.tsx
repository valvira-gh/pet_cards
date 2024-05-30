// ./src/app/[slug]/page.tsx
"use client";
// deps
import { LogForm } from "@/components/log-page";

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

const LogSlugPage = ({ params }: { params: { slug: React.ReactNode } }) => {
  return (
    <Card className="m-4">
      <LogForm>{params.slug}</LogForm>
    </Card>
  );
};

export default LogSlugPage;
