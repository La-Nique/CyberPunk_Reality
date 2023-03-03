import McDonalds from './img/cyberpunk-mcdonalds.jpg'
import coffee from './img/cyberpunk-coffee-shop-1.jpg'
import bar from './img/cyberpunk-bar-1.jpg'

function ArcillaBlvd() {
    return (
        <div >
            <div className="arcilla">
            <div className="outline">

            <district>Food District</district>
            <description>Indulge in an alluring gastronomic affair at our culinary playground of delectable delights.</description>

                <div className="coffee">
                    <img src={coffee} alt="cyber coffee shop" />
                    <place>Cyberbrew Cafe</place>
                    <p>
                        Stop by Cyberbrew Cafe in Valognan City, the perfect place to relax and unwind in the bustling vibrant metropolis. 
                        Whether you're looking for a quick and delicious cup of coffee, a small snack, or a place to enjoy some light reading— we take pride in cultativing just the cozy and inviting environment you're looking for.
                        Our expert baristas craft the finest coffee blends using the latest in high-tech brewing equipment, ensuring that every cup is a perfect balance of flavor and aroma.
                        And with our selection of light snacks and comfortable seating, you can enjoy your coffee while browsing through our collection of literature. 
                        So come join us at our coffee shop, where you can escape the neon-lit chaos of Valognan City and enjoy a moment of peace and tranquility.
                    </p>
                </div>

                <sectional>• • •</sectional>
                
                <div className="bar">
                    <img src={bar} alt="cyber bar" />
                    <place>Electrifying Noir</place>
                    <p>
                        Valognanian, are you ready to step into a world of luxury and indulgence?
                        At Electrifying Noir we take pride in our sleek and stylish decor; our bar is the perfect place to unwind and enjoy a cocktail after a long day in the bustling city. 
                        Our expert mixologists have crafted a menu of innovative and unique cocktails that are sure to tantalize and electrify your taste buds. 
                        From classic favorites to daring new concoctions, we have something for every discerning palate. 
                        So come relax, indulge, and enjoy the finer things in life at our upscale bar in Valognan City. 
                        Experience the perfect blend of sophistication and high-tech chic, only at our exclusive establishment.
                    </p>
                </div>
                
                <sectional>• • •</sectional>
                
                <div className="mcdonalds">
                    <img src={McDonalds} alt="cyber McDonalds" />
                        <place>McDigitize</place>
                    <p>
                        If you're looking for a quick and delicious bite, there's no better place than McDigitize. 
                        Our menu of classic American favorites will satisfy your hunger and delight your taste buds. 
                        Whether you're looking for a juicy burger or a crispy chicken sandwich, we've got you covered. 
                        Plus, with our cybrog-fueled ordering system and incandescent decor, your dining experience will be out of this world. 
                        So come visit us at McDigitize in Valognan City and enjoy a meal that's just as bold and daring as the world around you.
                    </p>
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

export default ArcillaBlvd;
