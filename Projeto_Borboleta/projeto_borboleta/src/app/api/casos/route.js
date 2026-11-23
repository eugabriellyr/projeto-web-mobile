import { NextResponse } from "next/server";
import casos from "@/data/casos.json";

export async function GET() {
    return NextResponse.json(casos);
}