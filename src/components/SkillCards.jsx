import React from "react";

const SkillCards = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    };

    return (
        <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}
            className="relative h-[8rem] w-[8rem] rounded-xl p-px bg-gray-900 backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer hover:scale-106 hover:shadow-md shadow-white/20 transition-all duration-75"
        >
                <div className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ top: position.y - 120, left: position.x - 120, }}
                />


            <div className="relative bg-gray-900/75 p-6 h-full w-full rounded-[11px] flex flex-col items-center justify-center text-center ">

                <img src={props.image} alt={props.skillname} />
                
                <p className="text-sm text-white font-sans font-medium mb-4">{props.skillname}</p>
                
            
            </div>
        </div>
    );
}

export default SkillCards;