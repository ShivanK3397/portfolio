const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000"),
);
