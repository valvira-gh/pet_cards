// ./src/components/log-page.tsx
"use client";
// dependencies
import { useState } from "react";
import Link from "next/link";

type LinkComponentProps = {
  href: string;
  children: React.ReactNode;
};

const LinkComponent: React.FC<LinkComponentProps> = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

const LogPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[370px] h-full border-2 p-4 rounded">
      <h2 className="text-2xl font-bold w-full flex justify-between items-center">
        <LinkComponent href={`/login-user`}>Kirjaudu</LinkComponent>
        <div className="m-2"> | </div>
        <LinkComponent href={`/register-user`}>Rekisteröidy</LinkComponent>
      </h2>
    </div>
  );
};

export default LogPage;
