import { Header } from "../../header";
import * as C from "./style"
import LogoImage from '../../../assets/images/logo.png';


export function Register() {
    return (
        <>
            <Header />
            <C.Container>
                <div className="card">
                    <div className="image">
                        <img src={LogoImage} alt="logo" />
                    </div>
                    <h3>Your notes on the clound</h3>
                </div>
            </C.Container>
        </>
    );
}