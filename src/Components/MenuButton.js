export default function MenuButton({name}){
    return(
        <>
        <button class="bg-white border-2 border-white px-4 py-2 border-solid hover:bg-black hover:border-white hover:text-white my-2 w-48" 
        onClick={() => console.log(name)}>
            {name}
        </button>
        </>
    )

}