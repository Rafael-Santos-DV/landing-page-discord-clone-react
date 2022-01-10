import imgcaht2 from "../../assets/asset-chat-2.svg";

export const SectionTwoContent = () => {
    return(
        <article className="container-section-two">
            <div>
                <h2>Aqui é fácil se encontrar</h2>
                <p>Entre no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver e entrar imediatamente, sem nem ter que fazer a chamada.</p>
            </div>
            <img src={imgcaht2} alt="discord chat" />
        </article>
    );
};