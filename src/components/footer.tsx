import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Links } from "./ui/links";

export const Footer = () => {
  return (
    <footer
      className={
        "footer component-container bg-primary text-primary-foreground"
      }
    >
      <div className={"flex flex-col sm:flex-row"}>
        <div className={"sm:pl-0 w-full md:w-1/2 pt-14 pb-10 align-center flex justify-center md:inline md:justify-left"}>
          <Image
            src="/logo-white.png"
            alt="Del Villal Gardening Logo"
            width={300}
            height={150}
            className="rounded-full"
          />
        </div>
        <div className={`sm:w-1/2 pt-14`}>
          <div className={"flex flex-col sm:flex-row"}>
            <div
              className={
                "links sm:border-r-2 border-white sm:pl-0 sm:pr-4 md:pr-20"
              }
            >
              <Links orientation='vertical' size={"large"} />
            </div>
            <a href="tel:+17608445270"><h3 className="md:pl-4 text-center md:text-left">(760) 844-5270</h3></a>
          </div>
        </div>
      </div>
      <p className={"text-center mt-12 pb-10"}>
        &copy; {new Date().getFullYear()}{" "}Del Villal Gardening
        <br />
        <br />
        68090 Tortuga Rd, Cathedral City, CA, 92234
        <br />
        <br />
        Website design by <Link
          className={"font-bold"}
          href='https://palmspringswebdesign.net'
          target='_blank'
        >
          Palm Springs Web Design
        </Link>
      </p>
    </footer>
  );
};
