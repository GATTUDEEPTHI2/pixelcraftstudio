import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pixelcraftstudio91@gmail.com",
        pass: "zbbrspytbgwhpzbp",
      },
    });

    const info = await transporter.sendMail({
      from: "pixelcraftstudio91@gmail.com",
      to: "pixelcraftstudio91@gmail.com",
      replyTo: email,
      subject: "New Website Inquiry",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Mail sent:", info.response);

    return Response.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return Response.json(
      { message: "Error sending email." },
      { status: 500 }
    );
  }
}