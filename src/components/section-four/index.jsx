import imgfull from "../../assets/asset-full-image.svg";
import { BiArrowToBottom } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

export const SectionFourContent = () => {
    return(
        <article>
            <div className="container-text-four">
                <div>
                    <h1>TECNOLOGIA DE CONEXÃO CONFIÁVEL</h1>
                </div>
                <p>Voz e vídeo de baixa latência, para você conversar como se estivesse na mesma sala. Dê um joinha por vídeo, veja amigos transmitirem a jogatina do dia ou junte uma galera pra desenhar na tela compartilhada.</p>
            </div>
            <img className="image-full" src={imgfull} alt="imagem full discord" />
            <div className="background-star">
                <div className="box-text-background">
                    <h2>Vamos começar sua jornada?</h2>
                    <div className="button-download">
                        <IconContext.Provider value={{ className: "icon-downl" }}>
                            <BiArrowToBottom />
                        </IconContext.Provider>
                        <span>Baixar para Linux</span>
                    </div>
                </div>
            </div>
        </article>
    );
};