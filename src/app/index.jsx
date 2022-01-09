import { Box, Container, ContainerContent, GlobalStyles, Header, Nav, Section, Ul } from "../components/styles/styles";
import logo from "../assets/logo.svg";
import imgtow from "../assets/asset-two.svg";
import imgone from "../assets/asset-one.svg";
import { SectionContent } from "../components/section-one";


export const App = () => {
    return(
        <div>
            <GlobalStyles />
            <Container>
                <Header>
                    <Box>
                        <img src={logo} alt="logo-discord" />
                        <Nav>
                            <Ul>
                                {/* eslint-disable-next-line*/}
                                <li><a href="#">Baixar</a></li>
                                {/* eslint-disable-next-line*/}
                                <li><a href="#">Nitro</a></li>
                                {/* eslint-disable-next-line*/}
                                <li><a href="#">Segurança</a></li>
                                {/* eslint-disable-next-line*/}
                                <li><a href="#">Suporte</a></li>
                                {/* eslint-disable-next-line*/}
                                <li><a href="#">Blog</a></li>
                                {/* eslint-disable-next-line*/}
                                <li><a href="#">Carreiras</a></li>
                                
                            </Ul>
                        </Nav>
                        <div className="container-button">
                            {/* eslint-disable-next-line */}
                            <a href="#"><span>Entrar</span></a>
                        </div>
                    </Box>
                    <ContainerContent>
                        <img src={imgtow} alt=""/>
                        <div>
                            <h1>IMAGINE UM <br />LUGAR…</h1>
                            <p>…onde você possa pertencer a um clube escolar, um grupo de gamers, ou uma comunidade artística mundial. Onde você e alguns amigos possam passar um tempo juntos. Um lugar que torna fácil conversar todos os dias e socializar com mais frequência.</p>
                            <div className="button-down">
                                {/* eslint-disable-next-line */}
                                <span><a href="#">Baixar para linux</a></span>
                                {/* eslint-disable-next-line */}
                                <span><a href="#">Abra o discord no seu navagador</a></span>
                            </div>
                        </div>
                        <img src={imgone} alt="" />
                    </ContainerContent>
                </Header>
            </Container>
            <Section className="section-one">
                <SectionContent />
            </Section>
        </div>
    );
}