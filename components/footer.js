import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    "Inicio",
    "Assistência Técnica",
    "Sistema de Automação",
    "Sites",
    "Blog",
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <Image
                      src="/img/logo1.svg"
                      alt="N"
                      width="32"
                      height="32"
                      className="w-8"
                    />
                  <span>SystemTec</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              SystemTec Solução em Informática para Você Empreendedor que busca
              qualidade e excelente custo benefício.
            </div>

            <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44">
                <Image
                  src="/img/vercel.svg"
                  alt="Hospedado na Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">                 
                    {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">      
                    {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div>Nos Sigam</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://twitter.com/web3templates"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a
                href="https://instagram.com/web3templates"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a
            href="https://systemtec.vercel.app/"
            target="_blank"
            rel="noopener">
            SystemTec
          </a>{" "}
          Illustrations from{" "}
          <a
            href="https://github.com/AndersonLML"
            target="_blank"
            rel="noopener ">
            Anderson Leonardo
          </a>
        </div>
      </Container>
      {/* Do not remove this */}
      <Backlink />
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const Backlink = () => {
  return (
    <a
      href="https://systemtec.vercel.app/"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300">
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          width="30"
          height="29.5385"
          rx="2.76923"
          fill="#362F78"
        />
        <path
          d="M0 2500 l0 -2500 2500 0 2500 0 0 2500 0 2500 -2500 0 -2500 0 0
          -2500z m1625 1316 c33 -2 67 -6 75 -9 8 -3 47 -11 85 -17 79 -13 145 -30 255
          -67 87 -29 221 -83 233 -93 4 -4 -18 -70 -49 -146 -31 -76 -72 -177 -91 -224
          -19 -47 -38 -89 -42 -93 -5 -5 -35 3 -67 16 -252 105 -503 157 -661 137 -206
          -26 -319 -187 -255 -361 37 -102 103 -149 450 -323 140 -70 266 -135 280 -145
          15 -10 53 -36 86 -57 92 -61 199 -157 221 -197 11 -20 23 -37 28 -37 7 0 78
          -140 83 -165 1 -5 9 -38 18 -71 20 -79 21 -283 1 -378 -39 -184 -127 -319
          -285 -439 -128 -97 -341 -165 -582 -188 -223 -20 -556 17 -743 85 -38 13 -98
          35 -133 48 l-62 23 0 286 0 286 49 -24 c85 -40 306 -122 414 -152 255 -73 473
          -79 607 -18 92 42 140 101 160 199 13 67 2 122 -37 182 -59 90 -111 125 -412
          276 -230 115 -347 183 -441 255 -66 51 -146 134 -162 170 -6 14 -14 25 -18 25
          -7 0 -83 145 -86 165 -1 6 -10 39 -19 75 -33 125 -19 394 25 479 5 9 14 31 21
          49 17 46 82 145 127 193 98 107 279 199 458 235 74 15 344 34 389 27 11 -1 47
          -5 80 -7z m1984 -36 l1026 0 0 -242 0 -243 -380 -5 -380 -5 -3 -1144 c-1 -663
          -6 -1147 -11 -1150 -5 -3 -138 -5 -295 -3 l-286 3 0 1149 0 1150 -382 0 -383
          0 2 243 c1 133 2 246 3 251 0 5 14 6 31 2 17 -3 493 -6 1058 -6z m-2439 -594
          c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z
          m-666 -342 c3 -8 2 -12 -4 -9 -6 3 -10 10 -10 16 0 14 7 11 14 -7z m776 -34
          c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m105
          -750 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z"
          fill="#F7FAFC"
        />
      </svg>

      <span>SystemTec</span>
    </a>
  );
};
