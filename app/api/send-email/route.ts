import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    try {
        const form = await req.json();

        const formattedDate = new Date(form.preferredDate).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
        });

        await resend.emails.send({
            from: "Govira <notifications@govira.tech>",
            to: "pardhusarathi39@gmail.com",
            cc: "support@govira.tech",
            subject: "New Contact Request",
            html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${form.name}</p>
        <p><b>Email:</b> ${form.email}</p>
        <p><b>Phone:</b> ${form.countryCode} ${form.phone}</p>
        <p><b>Company:</b> ${form.company}</p>
        <p><b>Website:</b> ${form.website}</p>
        <p><b>Business Type:</b> ${form.businessType}</p>
        <p><b>Turnover:</b> ${form.turnover}</p>
        <p><b>Services:</b> ${form.servicesArray.join(", ")}</p>
        ${form.otherService
                    ? `<p><b>Other Service:</b> ${form.otherService}</p>`
                    : ""
                }
        <p><b>Budget:</b> ${form.budget}</p>
        <p><b>Start Timeline:</b> ${form.start}</p>
        <p><b>Preferred Date:</b> ${formattedDate}</p>
        <p><b>Timezone:</b> ${form.timezone}</p>
        <p><b>Preferred Mode:</b> ${form.mode}</p>
        <p><b>Message:</b> ${form.message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
