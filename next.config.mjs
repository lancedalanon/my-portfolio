/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
            source: '/(.*)',
            headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'index, follow',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
