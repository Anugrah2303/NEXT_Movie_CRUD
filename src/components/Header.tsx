"use client"

import { useRouter } from "next/navigation"
import Button from "./Button"

const Header = () => {

    const navigation = useRouter()

  return (
    <>
        <header className="border-b border-r shadow-(--shadow-md) rounded-full flex justify-between items-center mb-10 mx-3">
            <div className="font-bold text-3xl py-7 px-7">NextMovies</div>
            <div className="pr-7">
                <Button content="Add Movie" variant="normal" onClick={() => navigation.push("/add-movie")} />
            </div>
        </header>
    </>
  )
}

export default Header