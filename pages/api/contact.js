import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");
  const body = req.body || {};
  const name = body.name || (body.get && body.get('name'));
  const email = body.email || (body.get && body.get('email'));
  const message = body.message || (body.get && body.get('message'));
  if(!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL } = process.env;
  if(!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
    console.error('SMTP env missing');
    return res.status(500).json({ error: "Email not configured." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST, port: parseInt(SMTP_PORT||"587"), secure: SMTP_PORT=="465",
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });
    await transporter.sendMail({
      from: `"Website Contact" <${SMTP_USER}>`,
      to: TO_EMAIL,
      subject: `New message from ${name} <${email}>`,
      text: message,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g,'<br/>')}</p>`
    });
    return res.status(200).json({ ok: true });
  } catch(err){
    console.error(err);
    return res.status(500).json({ error: "Failed to send" });
  }
}
