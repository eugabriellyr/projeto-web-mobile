import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contato() {
    return (
        <>
            <Header />

            <section className="hero_contato w-full h-[350px] md:h-[485px] relative overflow-hidden flex items-center justify-center text-center">
                <Image
                    src="/img/background-contato.png"
                    alt="Livros e símbolo da justiça"
                    fill
                    priority
                    className="object-cover object-center absolute z-0"
                />
                <div className="absolute inset-0 bg-[#281711]/[0.48] z-1" />
                <div className="hero_conteudo relative z-2 text-white px-5 mt-0 md:-mt-[50px]">
                    <h1 className="font-['Source_Serif_4'] text-[38px] md:text-[58px] font-bold mb-[15px]">Entre em contato!</h1>
                    <p className="max-w-[750px] text-[14px] md:text-[16px] font-medium leading-[1.6] mx-auto">
                        Entre em contato e agende uma conversa para entender seus direitos e encontrar o melhor caminho para o seu caso.
                    </p>
                </div>
            </section>

            <main>
                <section className="area-contato bg-[#FFF2D2] pb-[100px]">
                    <div className="container-contato w-[90%] md:w-[78%] max-w-[1100px] min-h-[620px] -mt-[70px] md:-mt-[110px] mx-auto relative z-3 bg-[#fff1cf] rounded-[14px] shadow-[0_3px_8px_rgba(0,0,0,0.20)] grid grid-cols-1 md:grid-cols-[1fr_1.25fr] p-[35px_25px] md:p-[52px_50px]">

                        <div className="informacoes pr-0 md:pr-[45px] pb-[35px] md:pb-0 border-b md:border-b-0 md:border-r border-[#8a6257]">
                            <h2 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[24px] md:text-[28px] font-bold leading-[1.25] mb-[14px]">Informações de contato</h2>
                            <p className="descricao text-[13px] leading-[1.5] mb-[30px]">
                                Precisa de orientação? Estamos prontas para ouvir você.
                            </p>

                            <div className="informacao flex items-center gap-[15px] mb-[27px]">
                                <Link href="#"><Image src="/img/Telefone.png" alt="Telefone" width={48} height={48} className="w-[48px] h-[48px] object-contain" /></Link>
                                <div className="texto-informacao">
                                    <h3 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[17px] font-normal mb-[3px]">Telefone</h3>
                                    <p className="text-[13px]">(11) 9999-9999</p>
                                </div>
                            </div>

                            <div className="informacao flex items-center gap-[15px] mb-[27px]">
                                <Link href="#"><Image src="/img/E-mail.png" alt="E-mail" width={48} height={48} className="w-[48px] h-[48px] object-contain" /></Link>
                                <div className="texto-informacao">
                                    <h3 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[17px] font-normal mb-[3px]">Email</h3>
                                    <p className="text-[13px]">exemplo@contato.com</p>
                                </div>
                            </div>

                            <div className="informacao flex items-center gap-[15px] mb-[27px]">
                                <Link href="#"><Image src="/img/Localização.png" alt="Endereço" width={48} height={48} className="w-[48px] h-[48px] object-contain" /></Link>
                                <div className="texto-informacao">
                                    <h3 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[17px] font-normal mb-[3px]">Endereço</h3>
                                    <p className="text-[13px]">Rua Exemplo, Nº 123</p>
                                </div>
                            </div>

                            <div className="redes mt-[32px]">
                                <h3 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[16px] mb-[12px]">Siga minhas redes sociais</h3>
                                <div className="redes-icons flex gap-[20px]">
                                    <Link href="#" className="w-[31px] h-[31px] flex items-center justify-center rounded-full bg-[#6F1D1B] text-white hover:bg-[#5a1715] hover:-translate-y-0.5 transition-all"><Image src="/img/Instagram.png" alt="Instagram" width={31} height={31} className="w-[31px] h-[31px] object-contain" /></Link>
                                    <Link href="#" className="w-[31px] h-[31px] flex items-center justify-center rounded-full bg-[#6F1D1B] text-white hover:bg-[#5a1715] hover:-translate-y-0.5 transition-all"><Image src="/img/Twitter.png" alt="Twitter" width={31} height={31} className="w-[31px] h-[31px] object-contain" /></Link>
                                    <Link href="#" className="w-[31px] h-[31px] flex items-center justify-center rounded-full bg-[#6F1D1B] text-white hover:bg-[#5a1715] hover:-translate-y-0.5 transition-all"><Image src="/img/Facebook (1).png" alt="Facebook" width={31} height={31} className="w-[31px] h-[31px] object-contain" /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="formulario pl-0 md:pl-[50px] pt-[35px] md:pt-0">
                            <h2 className="font-['Source_Serif_4'] text-[#6F1D1B] text-[24px] md:text-[28px] font-bold mb-[28px]">Agende uma consulta</h2>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="campo w-full h-[43px] flex items-center gap-[13px] px-[17px] mb-[23px] bg-white rounded-[4px]">
                                    <i className="fa-regular fa-user text-[15px] text-[#222] shrink-0"></i>
                                    <input type="text" name="nome" placeholder="Nome" required className="w-full h-full border-none outline-none bg-transparent font-['Poppins'] text-[13px] text-[#333] placeholder:text-[#333]" />
                                </div>

                                <div className="campo w-full h-[43px] flex items-center gap-[13px] px-[17px] mb-[23px] bg-white rounded-[4px]">
                                    <i className="fa-regular fa-envelope text-[15px] text-[#222] shrink-0"></i>
                                    <input type="email" name="email" placeholder="Email" required className="w-full h-full border-none outline-none bg-transparent font-['Poppins'] text-[13px] text-[#333] placeholder:text-[#333]" />
                                </div>

                                <div className="campo w-full h-[43px] flex items-center gap-[13px] px-[17px] mb-[23px] bg-white rounded-[4px]">
                                    <i className="fa-solid fa-phone text-[15px] text-[#222] shrink-0"></i>
                                    <input type="tel" name="telefone" placeholder="Telefone" className="w-full h-full border-none outline-none bg-transparent font-['Poppins'] text-[13px] text-[#333] placeholder:text-[#333]" />
                                </div>

                                <div className="campo w-full h-[43px] flex items-center gap-[13px] px-[17px] mb-[23px] bg-white rounded-[4px]">
                                    <i className="fa-regular fa-calendar text-[15px] text-[#222] shrink-0"></i>
                                    <input type="date" name="data" className="w-full h-full border-none outline-none bg-transparent font-['Poppins'] text-[13px] text-[#333] placeholder:text-[#333]" />
                                </div>

                                <div className="campo mensagem w-full h-[100px] flex items-start gap-[13px] px-[17px] pt-[14px] mb-[23px] bg-white rounded-[4px]">
                                    <i className="fa-regular fa-comment text-[15px] text-[#222] shrink-0"></i>
                                    <textarea name="mensagem" placeholder="Mensagem" className="w-full h-[75px] border-none outline-none resize-none font-['Poppins'] text-[13px] bg-transparent text-[#333] placeholder:text-[#333]"></textarea>
                                </div>

                                <div className="area-botao flex justify-center md:justify-end">
                                    <button type="submit" className="border-none bg-[#6F1D1B] text-white py-[11px] px-[22px] rounded-[5px] font-['Source_Serif_4'] font-bold cursor-pointer transition-all hover:bg-[#5a1715]">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
