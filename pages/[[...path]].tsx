import React from "react";
import { NextPageContext } from "next";
import { userLanguage } from "../utils";

const Page = () => <div>redirecting</div>;

Page.getInitialProps = (ctx: NextPageContext) => {
  const { asPath } = ctx;
  const acceptLanguage = ctx.req?.headers["accept-language"] || "";
  const browserLanguage = acceptLanguage.split(/;|,/);
  const language = userLanguage(browserLanguage);

  const rootUrl = `https://${language}.zoonk.org`;
  const redirectUrl = rootUrl + asPath;

  ctx.res?.writeHead(307, { Location: redirectUrl });
  ctx.res?.end();

  return {};
};

export default Page;
