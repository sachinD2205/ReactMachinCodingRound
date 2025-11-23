import { lazy, Suspense } from "react";
import TabList from "./components/TabList";

const ComponentA = lazy(() => import("./components/ComponentA"));
const ComponentB = lazy(() => import("./components/ComponentB"));
const ComponentC = lazy(() => import("./components/ComponentC"));


const Tab = () => {

    const TabConfig = [
        {
            id:"componentA",
            name:"Component A",
            component:<Suspense fallback={<div>Loading...</div>}><ComponentA/></Suspense>
        },
         {
            id:"componentB",
            name:"Component B",
            component:<Suspense fallback={<div>Loading...</div>}><ComponentB/></Suspense>
        },
         {
            id:"componentC",
            name:"Component C",
            component:<Suspense fallback={<div>Loading...</div>}><ComponentC/></Suspense>
        },
];


    return (
        <div>
            <TabList  tabList={TabConfig}/>

        </div>
    )

}

export default Tab;