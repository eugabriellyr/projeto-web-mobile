import { NextResponse } from "next/server";
import casos from "@/data/casos.json";

export async function GET(request, { params }) {
    const { slug } = await params; // no Next 16 params é uma Promise

    const caso = casos.find((c) => c.slug === slug);

    if (!caso) {
        return NextResponse.json(
            { erro: "Caso não encontrado" },
            { status: 404 }
        );
    }

    return NextResponse.json(caso);
}