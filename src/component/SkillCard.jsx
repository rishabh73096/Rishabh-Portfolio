
const SkillCard=({tilte,value})=>{
    return (<>
     <div className="flex justify-between items-center mt-5 backdrop-blur-xl shadow-xl p-3 border-2 mr-2 rounded-lg border-gray-400">
        <h1 className="font-bold text-white text-xl"> {tilte}</h1>
        <progress max="100" value={value} className="progress-bar"/>
    </div>
    
    </>)
}
 export default SkillCard;