const Collections = () => {
    return ( 
        <div className="flex collections gap-4 h-96">
            <div className="flex-1 flex gap-4 flex-col-reverse">
                <div className="flex-1 bg-blue-800"></div>
                <div className="flex-1 gap-2 flex">
                    <div className="flex-1 bg-green-500"></div>
                    <div className="flex-1 bg-red-400"></div>
                </div>
            </div>
            <div className="flex-1 flex gap-4 flex-col">
                <div className="flex-1 bg-blue-600"></div>
                <div className="flex-1 gap-2 flex">
                    <div className="flex-1 bg-slate-500"></div>
                    <div className="flex-1 bg-blue-500"></div>
                </div>
            </div>
        </div>
     );
}
 
export default Collections;