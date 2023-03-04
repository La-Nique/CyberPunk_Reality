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
                    <img src={coffee} alt="cyber Coffee Shop" />
                    <place>Cyberbrew Cafe</place>
                    <p>
                        Welcome to our coffee shop in Valognan City, the perfect place to relax and unwind in the bustling cyberpunk metropolis. Whether you're looking for a quick and delicious cup of coffee, a small snack, or a place to enjoy some light reading— we have everything you need. Our expert baristas craft the finest coffee blends using the latest in high-tech brewing equipment, ensuring that every cup is a perfect balance of flavor and aroma. And with our selection of light snacks and comfortable seating, you can enjoy your coffee while browsing through our collection of cyberpunk literature. So come join us at our coffee shop, where you can escape the neon-lit chaos of Valognan City and enjoy a moment of peace and tranquility in the heart of the future.
                    </p>
                </div>

                <sectional>• • •</sectional>
                
                <div className="bar">
                    <img src={bar} alt="cyber Bar" />
                    <place>Electrifying Noir</place>
                    <p>
                        Escape the neon-lit chaos of Valognan City and step into a world of luxury and indulgence at our upscale bar. With its sleek and stylish decor, our bar is the perfect place to unwind and enjoy a cocktail after a long day in the bustling city. Our expert mixologists have crafted a menu of innovative and unique cocktails that are sure to tantalize your taste buds. From classic favorites to daring new concoctions, we have something for every discerning palate. So come relax, indulge, and enjoy the finer things in life at our luxury bar in Valognan City. Experience the perfect blend of sophistication and high-tech chic, only at our exclusive establishment.
                    </p>
                </div>
                
                <sectional>• • •</sectional>
                
                <div className="mcdonalds">
                    <img src={McDonalds} alt="cyber McDonalds" />
                        <place>McDigitize</place>
                    <p>
                        If you're looking for a quick and delicious bite, there's no better place than McDonald's. Our menu of cyberpunk-inspired meals and classic favorites will satisfy your hunger and delight your taste buds. Whether you're looking for a juicy burger or a crispy chicken sandwich, we've got you covered. Plus, with our high-tech ordering system and futuristic decor, your dining experience will be out of this world. So come visit us at McDonald's in Valognan City and enjoy a meal that's just as bold and daring as the world around you.
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
