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
    <Link
      className="m-2 border-2"
      key={href}
      href={href}
      className="text-blue-500"
    >
      {children}
    </Link>
  );
};

const LogPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[370px] h-full border-2 p-4 rounded">
      <h2 className="text-2xl font-bold w-full flex justify-between items-center">
        {/* You can use one of React.FC's default attribute, 'children',
                    either as a 'prop' from self-closing <Link />-component
                     or you can also do it more 'old skool-ish' and so you
                     might destruct <LinkComponent> and use its 'tag'  */}

        <LinkComponent href={"/login-user"} children={"Kirjaudu sisään"} />

        <div className="m-2" children={" | "} />
        <LinkComponent href={"/register-user"}>Rekisteröidy</LinkComponent>
      </h2>
    </div>
  );
};

export default LogPage;
