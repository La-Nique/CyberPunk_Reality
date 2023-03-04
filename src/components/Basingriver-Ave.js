import student from './img/cyberpunk-school-0.jpg'
import highschool from './img/cyberpunk-school-1.jpg'
import library from './img/cyberpunk-library-0.png'

// Valognan City
function BasingriverAve() {
    return (
        <div >
            <div className="basingriver">
            <div className="outline">

            <district>Educational District</district>
            <description>Stimulate your mind and nourish your soul with an irresistible curriculum of knowledge and innovation in our captivating education district.</description>

                <div className="library">
                    <img src={library} alt="cyber library" />
                    <place>Neural Nexus Library</place>
                    <p>
                        Are you tired of scrolling through endless feeds of irrelevant information in augmented space? 
                        Let the Neural Nexus Library be your source of knowledge and escape from the chaos of our digital world. 
                        Our collection of books and virtual reality interfaces will transport you to a realm of timeless wisdom. 
                        Discover the secrets of the past and the solutions of the future. 
                        Find the answers you've been searching for, and immerse yourself in the world of imagination. 
                        What are you waiting for? Visit us! 
                        We are located at the brain of Valognan City, immerse yourself in the power of knowledge. 
                        Intellectual advancement awaits.
                    </p>
                </div>

                <sectional>• • •</sectional>

                <div className="highschool">
                    <img src={highschool} alt="cyber high school" />
                     <place>Ada Lovelace High School of Advanced Quantum Computing and Computation Theory</place>
                    <p>
                        Are you a parent? Are you looking for a high school that prepares your children for the fast-paced world of tomorrow? Yes? Search no further.
                        Ada Lovelace High School of Advanced Quantum Computing and Computation Theory is at the forefront of advanced technology and cutting-edge educational practices. 
                        Our experienced teachers and staff are dedicated to providing a well-rounded education that prepares our students for the challenges of the future. 
                        From 7th dimensional computational classrooms to advanced cybrog programs, our curriculum is tailored to meet the needs of every student. 
                        And with our sleek yet luminescent design, our high school is the perfect environment for learning and growth. 
                        So enroll your children today in Ada Lovelace High School of Advanced Quantum Computing and Computation Theory of Valognan City, and give them the tools they need to succeed in the world of tomorrow.
                    </p>
                    <img src={student} alt="student at cyber high school" />
                </div>

            </div>
            </div>

            <copyright>All Rights Reserved © Lanique Lynn Peterson
            <br />
            Website && Art && Graphics created by Lanique Lynn Peterson</copyright>

            {/* <Link style={copyright} to="/arcilla-blvd">All Rights Reserved © Lanique Lynn Peterson
            <br/>
            Website && Art && Graphics created by Lanique Lynn Peterson</Link> */}

        </div>
    );
}

export default BasingriverAve;
