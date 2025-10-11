/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "my.alfred.edu",
            },
        ],
    },
};

export default nextConfig;
