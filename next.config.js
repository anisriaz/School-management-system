/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_URI: "mongodb://localhost:27017/SchoolManagement-db"
    },
}

module.exports = nextConfig
