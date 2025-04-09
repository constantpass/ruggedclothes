import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react';
import {ShopifyProvider} from '@shopify/hydrogen-react';
import {defer} from '@shopify/remix-oxygen';
import {type LoaderFunctionArgs} from '@remix-run/node';

import './styles/tailwind.css';
import './styles/app.css';
import {Layout} from './components/Layout';

export const loader = async ({context}: LoaderFunctionArgs) => {
  const {storefront} = context;
  const publicStoreDomain = context.env.PUBLIC_STORE_DOMAIN;

  return defer({
    publicStoreDomain,
  });
};

export default function App() {
  const {publicStoreDomain} = useLoaderData<typeof loader>();

  return (
    <ShopifyProvider storeDomain={`https://${publicStoreDomain}`}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="theme-color" content="#0f0f13" />
          <link rel="icon" href="/favicon.ico" />
          <Meta />
          <Links />
        </head>
        <body className="min-h-screen bg-gradient-to-b from-[#0f0f13] to-[#1a1a27] text-white">
          <Layout>
            <Outlet />
          </Layout>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ShopifyProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.data.toString();
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#0f0f13" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-[#0f0f13] to-[#1a1a27] text-white">
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 neon-text">
            {errorStatus}
          </h1>
          <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
          <p className="text-gray-400 mb-8 text-lg">{errorMessage}</p>
          <a 
            href="/"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg"
          >
            Back to Homepage
          </a>
        </div>
        <Scripts />
      </body>
    </html>
  );
}