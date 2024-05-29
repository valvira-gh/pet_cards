"use client";
// dependencies
import { useState } from "react";
import Link from "next/link";

type LinkComponentProps = {
  href: string;
  children: React.ReactNode;
};

const LinkComponent: React.FC<LinkComponentProps> = ({ href, children }) => {
  return (
    <Link key={href} href={href} className="text-blue-500">
      {children}
    </Link>
  );
};

const LogPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full border-2 p-4 rounded">
      <h2 className="text-2xl font-bold">
        {/* You can use one of React.FC's default attribute, 'children',
                    either as a 'prop' from self-closing <Link />-component
                     or you can also do it more 'old skool-ish' and so you
                     might destruct <LinkComponent> and use its 'tag'  */}
        */
        <LinkComponent href={"/login-user"} children={"Kirjaudu sisään"} />
        <LinkComponent href={"/register-user"}>Rekisteröidy</LinkComponent>
      </h2>
    </div>
  );
};

export default LogPage;
