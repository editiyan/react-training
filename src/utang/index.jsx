import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TitleComponent from '../day2-practice/inline/TitleComponent'
import ButtonKlik from '../day2-practice/components/Button'

export default function Utang() {
    const utang = useSelector(state => state.utang);
    const dispatch = useDispatch()

    return (
        <div className="mt-4">
            <TitleComponent className="rounded-lg" text={`Utang anda adalah : Rp. ${utang}`} />
            <br />
            <hr />
            <div className="mt-4">Apakah mau ngutang?</div>
            <br />
            <button className="rounded-lg bg-green-500 border-green-500 mx-4 my-2 mb-4 py-2 px-2 text-white font-bold" onClick={() => dispatch({type: "TAMBAH"})}>Tambah Utang Rp. 1000</button>
            <button className="rounded-lg bg-yellow-500 border-yellow-500 mx-4 my-2 mb-4 py-2 px-2 text-white font-bold" onClick={() => dispatch({type: "BAYAR"})}>Bayar Utang Rp. 1000</button>
            <hr />
            <div className="mt-4">Apakah Anda mau ngelunasin?</div>
            <br/>
            <ButtonKlik klik={() => dispatch({type: "LUNASI"})} text={"LUNASI DONG"}/>

            {/* <ul class="list-inside bg-rose-200 ...">
                {users.map(user => (
                <li>{user.name}</li>
                ))}
                
            </ul> */}

        </div>
    )
}
