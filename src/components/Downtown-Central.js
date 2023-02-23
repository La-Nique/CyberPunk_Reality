import './css/Downtown-Central.css';
// import mall from './img/xxx.png'
import museum0 from './img/cyberpunk-museum-0.png'
// import museum1 from './img/cyberpunk-museum-1.png'

// Lodging 
function DowntownCentral() {
    return (
        <div >
            <h1>Fun District</h1>
            <h3>See what the best of Bikini Bottom has to offer for your stay!</h3>

            <div className="content">

                <div className="mall">
                    {/* <img src={mall} alt="cyber Shopping Mall" /> */}
                    <p>
                        Enter the neon-lit world of the cyberpunk shopping mall, where technology and fashion collide. Discover the latest in cyberwear, from sleek and stylish cybernetic implants to cutting-edge fashion. Immerse yourself in a virtual reality shopping experience, where you can try on the latest fashions and styles before you buy. Whether you're looking for cutting-edge fashion, the latest in high-tech gadgets, or just a day of shopping, the cyberpunk shopping mall has it all. So come visit us today and be a part of the future!
                    </p>
                </div>

                <div className="museum">
                    <img src={museum0} alt="cyber Art History Museum" />
                    <p>
                        Step into the future of art history at the cyberpunk art museum. Immerse yourself in a world of neon lights and cutting-edge technology as you explore the past and present of art. Discover the works of classic masters and contemporary visionaries, all brought to life through virtual reality interfaces and interactive exhibitions. Marvel at the timeless beauty of the classics and be inspired by the bold and daring vision of the cyberpunk artists. Whether you're an art lover or just looking for a unique cultural experience, the cyberpunk art museum is the place to be. Visit us today and be transported to a world of beauty and innovation.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default DowntownCentral;
