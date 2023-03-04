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
                    <img src={mall0} alt="cyber shopping mall view 1" />
                        <place>La Poincare Conjecture Shopping Centre</place>
                    <p>
                        Discover the latest in gear, from sleek and stylish cybernetic implants to cutting-edge fashion at La Poincare Conjecture Shopping Centre. 
                        Immerse yourself in an array of updated extended reality shopping experiences, where you can try on the latest fashions in an style and occasion before you buy. 
                        Whether you're looking for cutting-edge fashion, the latest in high-tech gadgets, or just a day of browsing, La Poincare Conjecture has it all. So come visit us today, illuminate your bytes, and be the envy of all Valognanians!
                    </p>
                    <img src={mall1} alt="cyber shopping mall view 2" />
                </div>

                <sectional>• • •</sectional>

                <div className="museum">
                    <img src={museum0} alt="cyber art history museum view 1" />
                    <place>The Isomorphism Art History Museum</place>
                    <p>
                        Come visit The Isomorphism Art History Museum and explore the past and present of art. 
                        Discover the works of classic masters and contemporary visionaries, all brought to life through virtual reality interfaces and interactive exhibitions. 
                        Marvel at the timeless beauty of the classics and be inspired by the bold and daring vision of legendary engineers and mathematicians. 
                        Whether you're a hiistory lover or just looking for a unique cultural experience, The Isomorphism Art History Museum is the place to be. 
                        Visit us today in Valognan City and be transported to a world of beauty and history. 
                        We host couples night every Saturday!
                    </p>
                    <img src={museum1} alt="cyber art history museum view 2" />
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
