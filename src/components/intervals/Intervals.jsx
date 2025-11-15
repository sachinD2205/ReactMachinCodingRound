import react from "react";
import ChildInterval from "./ChildInterval";

function Intervals() {

    const [showChild, setShowChild] = react.useState(true);
    
 

    return (
        <div>
            <h2>Interval </h2>
            <button onClick={() => setShowChild((prev) => !prev)}>
                {showChild ? "Hide" : "Show"} Child Interval
            </button>
            {showChild && <ChildInterval />}
        </div>
    );
}
 
export default Intervals;