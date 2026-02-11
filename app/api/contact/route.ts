import { NextResponse } from "next/server";

// Re-using the same Google Form URL as Reviews
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSejBS1pA4ddRU_2DMPv1LsJmbzCF9md-CidHUaHOF87ERAK0w/formResponse";

const FIELD_MAPPING = {
    name: "entry.1283266528",
    role: "entry.122595403",
    rating: "entry.1197868331",
    review: "entry.287233578"
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Construct Form Data for Google Forms
        // We reuse the existing Review Form fields:
        // Name -> Name
        // Role -> "Contact Inquiry"
        // Rating -> 5 (Dummy placeholder)
        // Review -> Message + Email appended
        const formData = new URLSearchParams();
        formData.append(FIELD_MAPPING.name, name);
        formData.append(FIELD_MAPPING.role, "Contact Inquiry");
        formData.append(FIELD_MAPPING.rating, "5");
        formData.append(FIELD_MAPPING.review, `${message}\n\n---\nContact Email: ${email}`);

        // Submit to Google Forms
        const response = await fetch(GOOGLE_FORM_ACTION_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
        });

        if (response.ok) {
            return NextResponse.json({ success: true });
        } else {
            console.error("Contact Form Submission Failed:", response.status, response.statusText);
            return NextResponse.json({ error: "Failed to submit to Google Form" }, { status: 500 });
        }

    } catch (error: any) {
        console.error("Contact API Route Error:", error);
        return NextResponse.json(
            { error: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
