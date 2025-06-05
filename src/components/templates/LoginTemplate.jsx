import styled from "styled-components";
import { Btnsave } from "../../index.js";

export function LoginTemplate() {
    return (<Container>

        <div>
            <span>versión 1.0</span>
            <div>
                <img />
            </div>
            <Titulo>Monetix</Titulo>
            <p>Toma el control de tu dinero 💸 y alcanza tus metas 🎯</p>
            <ContainerBtn>
                <Btnsave titulo="Iniciar con Google" />
            </ContainerBtn>
        </div>
    </Container>);
}


const Container = styled.div`

`
const Titulo = styled.span`
    font-size: 5rem;
    font-weight: 700;

`
const ContainerBtn = styled.div`
    display: flex;
justify-content: center;
`