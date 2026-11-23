import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const arquivo = path.join(process.cwd(), "src", "data", "mensagens.json");

export async function POST(request) {
    const { nome, email, telefone, data, mensagem } = await request.json();

    if (!nome || !email) {
        return NextResponse.json(
            { erro: "Nome e e-mail são obrigatórios" },
            { status: 400 }
        );
    }

    const conteudo = await fs.readFile(arquivo, "utf-8");
    const mensagens = JSON.parse(conteudo);

    mensagens.push({
        id: Date.now(),
        nome,
        email,
        telefone,
        data,
        mensagem,
        criadoEm: new Date().toISOString(),
    });

    await fs.writeFile(arquivo, JSON.stringify(mensagens, null, 2));

    return NextResponse.json({ ok: true }, { status: 201 });
}