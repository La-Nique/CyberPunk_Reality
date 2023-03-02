import './css/Basingriver-Ave.css';
import student from './img/cyberpunk-school-0.jpg'
import highschool from './img/cyberpunk-school-1.jpg'
import library from './img/cyberpunk-library-0.png'

function BasingriverAve() {
    return (
        <div >
            <h1>Educational Section</h1>
            <h3>See what the best of Bikini Bottom has to offer for your stay!</h3>

            <div className="content">

                <div className="highschool">
                    <img src={highschool} alt="cyber High School" />
                    <p>
                        Are you looking for a high school that prepares your children for the fast-paced world of tomorrow? Look no further than our state-of-the-art high school in Valognan City. Our school is at the forefront of advanced technology and cutting-edge educational practices. Our experienced teachers and staff are dedicated to providing a well-rounded education that prepares our students for the challenges of the future. From virtual reality classrooms to advanced robotics programs, our curriculum is tailored to meet the needs of every student. And with its sleek and stylish design, our high school is the perfect environment for learning and growth. So enroll your children today in the high school of the future, and give them the tools they need to succeed in the world of tomorrow.
                    </p>
                    <img src={student} alt="student at cyber High School" />
                </div>

                <div className="library">
                    <img src={library} alt="cyber Library" />
                    <p>
                        Are you tired of endless scrolling through endless feeds of irrelevant information? Let the library be your source of knowledge and escape from the chaos of the digital world. Our collection of books and virtual reality interfaces will transport you to a realm of timeless wisdom. Discover the secrets of the past and the solutions of the future. Find the answers you've been searching for, and immerse yourself in the world of imagination. Come visit us today and experience the power of knowledge. The library awaits.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default BasingriverAve;
