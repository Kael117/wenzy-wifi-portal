import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end("Only POST allowed");

  const voucher = req.body.voucher;
  if (!voucher) return res.status(400).send("Missing voucher");

  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: {
        rejectUnauthorized: true
      }
    });

    await conn.execute(
      "INSERT INTO voucher_logs (voucher_code, used_at) VALUES (?, NOW())",
      [voucher]
    );

    await conn.end();

    const omadaUrl = "http://192.168.1.1:8088/portal-login?voucher=" + encodeURIComponent(voucher);
    res.writeHead(302, { Location: omadaUrl }).end();
  } catch (err) {
    res.status(500).send("Database error: " + err.message);
  }
}
