import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Links } from "./ui/links";
import { FaInstagram, FaYelp } from 'react-icons/fa'

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
            <div className="flex flex-col md:pl-4 text-center md:text-left">
              <a className={'mb-6'} href="tel:+17608445270"><h3>(760) 844-5270</h3></a>
              <div className="flex flex-row">
                <a href="https://instagram.com/delvillalgardening" target="blank"><FaInstagram className="text-4xl mr-4" /></a>
                <a href="https://www.yelp.com/biz/del-villal-gardening-cathedral-city" target="blank"><FaYelp className="text-4xl" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={"text-center mt-12 pb-10"}>
        &copy; {new Date().getFullYear()}{" "}Del Villal Gardening
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
