/**
 * Where the static export is served from. GitHub Pages hosts the project at
 * /the-wind-keeps-her-songs; Vercel serves at the root, so it sets
 * NEXT_PUBLIC_BASE_PATH to an empty string in its project settings.
 */
export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/the-wind-keeps-her-songs';

/** Public image directory under the base path. */
export const imagesBasePath = `${siteBasePath}/images`;
