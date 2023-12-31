import { getLinkTag } from "@enhance/arc-plugin-styles/get-styles";

export default function Head() {
  const siteUrl = process.env.SITE_URL || "http://localhost:3333";
  const me = "https://linkedin.com/in/benjaminapatton";
  return `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <title>Ben Patton Site</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${getLinkTag()}
        <link rel='stylesheet' href='/_public/css/global.css' />
        <link rel='stylesheet' href='/_public/css/a11y-dark.min.css' />
        <link rel="webmention" href="${siteUrl}/webmention">
        <link rel="icon" type="image/jpg" href="/_public/favicon.ico"/>
        ${me ? `<link href="${me}" rel="me">` : ""}
      </head>
  `;
}
