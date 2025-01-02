import {HobbyData} from "../data/HobbyData";
import {HobbiesStruct} from "../structure/HobbiesStruct";
import "./hobbies.css";

export default function Hobbies() {
    return (
<div className="hobby">
    <main>
        <section id="hobbies">
            <ul>
                <HobbiesStruct {...HobbyData[0]} />
                <HobbiesStruct {...HobbyData[1]} />
                <HobbiesStruct {...HobbyData[2]} />
                <HobbiesStruct {...HobbyData[3]} />
            </ul>
        </section>
    </main>
</div>
    )
};
