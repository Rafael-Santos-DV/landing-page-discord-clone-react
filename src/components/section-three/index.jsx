import imgchat3 from "../../assets/asset-chat-3.svg";

export const SectionThreeContent = () => {
    return(
        <article>
            <img src={imgchat3} alt="imagem chat 3 discord" />
            <div>
                <div className="container-text-three">
                    <h2>Para poucos e para muitos</h2>
                    <p>Organize qualquer comunidade com ferramentas de moderação e acesso personalizado a membros. Dê poderes especiais aos membros, monte canais privados e muito mais.</p>
                </div>
            </div>
        </article>
    );
}