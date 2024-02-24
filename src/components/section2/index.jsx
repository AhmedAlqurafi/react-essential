import { coreConcepts } from "@/data";
import { Concept } from "@/shared/core-concepts";

export const Section2 = () => {
    return (
        <section className="w-full h-[45vh] mt-10">
<div className="w-full h-full bg-purple_dark rounded-lg py-5">
    <h2 className="text-sativa opacity-60 py-2 pb-2 text-2xl font-semibold">Core Concepts</h2>
<div className="flex justify-center gap-7 px-5" >{coreConcepts.map((concept) => (
    <Concept key={concept.id} title={concept.title} image={concept.image} description={concept.description}/>

))}</div>
</div>
        </section>
    )
}

export default Section2;