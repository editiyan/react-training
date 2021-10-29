import React, {Fragment, useState, useEffect} from 'react'
import TitleComponent from '../inline/TitleComponent'
import ButtonKlik from './Button'

export default function TransferApp() {
  const [balance, setBalance] = useState(0)
  const [users, setUsers] = useState([{}])

  const getUser = async () => {
    try {
      const raw = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await raw.json()
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // getUser()
  }, [])

  const save1000 = (value) => {
    setBalance(balance + value)
    setTimeout(() => {
      alert(`Terima kasih, saldo anda bertambah ${value}, menjadi ${balance+value}`)
    }, 1200)
  }

  const save5000 = (value) => {
    setBalance(balance + value)
    setTimeout(() => {
      alert(`Terima kasih, saldo anda bertambah ${value}, menjadi ${balance+value}`)  
    }, 1500);
  }

  const withdrw1000 = (value) => {
    const confirmation = window.confirm('apakah anda yakin?')
    if(balance > 0 ){
      if(confirmation){
        setBalance(balance - value)
        alert(`Saldo anda berkurang ${value}, sekarang jadi ${balance-value}`)
      } else {
        alert('OK, gajadi')
      }
    } else {
      alert('Saldo ndak Cukup')
    }
  }

  return (
    <div className="mt-4">
      <TitleComponent className="rounded-lg" text={`Saldo anda adalah : Rp. ${balance}`} />
      <br />
      <hr />
      <div className="mt-4">Apakah mau tambah saldo?</div>
      <br />
      <button className="rounded-lg bg-green-500 border-green-500 mx-4 my-2 mb-4 py-2 px-2 text-white font-bold" onClick={() => save1000(1000)}>Tambah Rp.1000</button>
      <button className="rounded-lg bg-green-500 border-green-500 mx-4 my-2 mb-4 py-2 px-2 text-white font-bold" onClick={() => save5000(5000)}>Tambah Rp.5000</button>
      <hr />
      <div className="mt-4">Apakah mau tarik saldo?</div>
      <br/>
      <ButtonKlik klik={() => withdrw1000(1000)} text={"Tarik Rp. 1000"}/>

      <ul class="list-inside bg-rose-200 ...">
        {users.map(user => (
          <li>{user.name}</li>
        ))}
        
      </ul>

    </div>
  )
}
