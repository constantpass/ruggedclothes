import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react';
import {json} from '@remix-run/node';

import {Layout} from './components/Layout';
import styles from './styles/app.css';
import tailwindStyles from './styles/tailwind.css';

// Export CSS modules for Remix 
export function links() {
  return [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: styles }
  ];
}

export const loader = async () => {
  return json({
    publicStoreDomain: 'mockshop.myshopify.com',
  });
};

export default function App() {
  return (
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