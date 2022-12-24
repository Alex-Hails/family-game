import MenuButton from "./MenuButton";

export default function Hero(){
    return(
        <>
        <div class="bg-slate-700 h-screen w-screen flex justify-center items-center">
            <div class="flex flex-col">
                <MenuButton name="Host a Game"/>
                <MenuButton name="Join a Game"/>
            </div>            
        </div>
        </>
    )

}