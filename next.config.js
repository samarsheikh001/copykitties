/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");
const path = require("path");
const nextConfig = {
  images: {
    domains: ["i.pravatar.cc"],
  },
  reactStrictMode: true,
};

module.exports = withSvgr(nextConfig);
