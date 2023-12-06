import { MusicalNoteIcon } from "@heroicons/react/24/outline";

export default function SKRMite(){
    return(
        <>
        <div style={{display: 'flex', flexDirection: 'row'}}>
                <MusicalNoteIcon 

                    width={36}
                    height={36}
                    className="font-bold"            
                />
                <h3 className="font-bold font-size-300">SKRMite</h3>
            </div>
        </>
    );
}