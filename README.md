# T-Shirt Pump - Shopify Hydrogen

This is a Shopify Hydrogen implementation of the T-Shirt Pump website, featuring a casino-like aesthetic for t-shirt marketplace.

## Features

- Interactive casino-style UI with animations, lights, and dynamic elements
- Trending T-shirts showcase with filtering options
- T-shirt browsing by categories
- Integration with Shopify's product data and checkout
- Responsive design for mobile and desktop

## Tech Stack

- React with TypeScript
- Shopify Hydrogen & Oxygen
- Tailwind CSS for styling
- Framer Motion for animations

## Getting Started

### Prerequisites

- Node.js version 18 or higher
- npm or yarn package manager
- Shopify store with Storefront API access

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/tshirt-pump-hydrogen.git
cd tshirt-pump-hydrogen
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Set up environment variables in `.env` file

```
PUBLIC_STORE_DOMAIN=your-store.myshopify.com
PUBLIC_STOREFRONT_API_TOKEN=your-storefront-api-token
```

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Environment Setup

Before deploying to production, make sure to:

1. Set up products in your Shopify store
2. Create collections to match categories (pumping, rugged, new-drops, classics)
3. Configure metafields for custom data like growth percentages and creator info
4. Update any placeholder content with real data

## Deployment

The application is configured for deployment with Oxygen (Shopify's hosting service).

## Customization

### Metafields

Set up the following metafields for products to fully utilize the UI features:

- `growth` - Number (for growth percentage display)
- `creator_name` - Single line text
- `creator_address` - Single line text
- `creator_share` - Number (royalty percentage)
- `total_sales` - Number
- `holders` - Number

## License

MIT