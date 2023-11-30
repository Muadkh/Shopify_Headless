/** @type {import('next').NextConfig} */
const nextConfig = {

images:{
    domains:["cdn.shopify.com"]
},
reactStrictMode:true,
experimental: {
    serverActions: true,
  },


}

export default nextConfig