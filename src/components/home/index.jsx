import presentationImage from '../../assets/images/presentation.png'
import { Header } from '../header'
import { Section } from './style'

export function Home() {
    return (
        <>
            <Header />

            <Section>
                <div className='container'>
                    <div className='title'>
                        <h2>Create notes easily and access when you wants on the clound</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, itaque eveniet minus modi est laudantium.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button>Register for free Now</button>
                    </div>
                    <div className='image'>
                        <img src={presentationImage} alt="apresentacao" />
                    </div>
                </div>
            </Section>
        </>
    )
}