import './css/cyberpunk.css';
import mall0 from './img/cyberpunk-mall-0.jpg'
import mall1 from './img/cyberpunk-mall-1.png'
import museum0 from './img/cyberpunk-museum-0.png'
import museum1 from './img/cyberpunk-museum-1.png'

function DowntownCentral() {
    return (
        <div >
            <div className="downtown">
            <div className="outline">

            <district>Entertainment District</district>
            <description>Unwind in a seductive oasis of dopamine and leisure, where the possibilities are as endless as the night sky.</description>

                <div className="mall">
                    <img src={mall0} alt="cyber Shopping Mall" />
                        <place>La Poincare Conjecture Shopping Centre</place>
                    <p>
                        Enter the neon-lit world of the cyberpunk shopping mall, where technology and fashion collide. Discover the latest in cyberwear, from sleek and stylish cybernetic implants to cutting-edge fashion. Immerse yourself in a virtual reality shopping experience, where you can try on the latest fashions and styles before you buy. Whether you're looking for cutting-edge fashion, the latest in high-tech gadgets, or just a day of shopping, the cyberpunk shopping mall has it all. So come visit us today and be a part of the future!
                    </p>
                    <img src={mall1} alt="cyber Shopping Mall" />
                </div>

                <sectional>• • •</sectional>

                <div className="museum">
                    <img src={museum0} alt="cyber Art History Museum" />
                    <place>The Isomorphism Art History Museum</place>
                    <p>
                        Step into the future of art history at the cyberpunk art museum. Immerse yourself in a world of neon lights and cutting-edge technology as you explore the past and present of art. Discover the works of classic masters and contemporary visionaries, all brought to life through virtual reality interfaces and interactive exhibitions. Marvel at the timeless beauty of the classics and be inspired by the bold and daring vision of the cyberpunk artists. Whether you're an art lover or just looking for a unique cultural experience, the cyberpunk art museum is the place to be. Visit us today and be transported to a world of beauty and history.
                    </p>
                    <img src={museum1} alt="cyber Art History Museum" />
                </div>

            </div>
            </div>

            <copyright>All Rights Reserved © Lanique Lynn Peterson
            <br/>
            Website && Art && Graphics created by Lanique Lynn Peterson</copyright>

            {/* <Link style={copyright} to="/arcilla-blvd">All Rights Reserved © Lanique Lynn Peterson
            <br/>
            Website && Art && Graphics created by Lanique Lynn Peterson</Link> */}

        </div>
    );
}

export default DowntownCentral;
