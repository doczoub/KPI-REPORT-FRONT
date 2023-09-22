import React from 'react'

const Resume1 = () => {
    const an = new Date();
    const annee= an.getFullYear();

    const anneePre = annee -1;
  return (
    <div>
      <table>
        <thead className='bg-slate-800 border'>
            <tr className='  '>
                <th className='text-right text-sm py-2 text-white px-6'>periode</th>
                <th className='text-right text-sm py-2 text-white px-6'>cible</th>
                <th className='text-right text-sm py-2 text-white px-6'>resultats annee:  {anneePre} </th>
                <th className='text-right text-sm py-2 text-white px-6'>resultats actuel:  {annee} </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='px-6 py-6  '>  mars  </td>
                <td className='px-6 py-6  '>    100%</td>
                <td className='px-6 py-6  '>  96%</td>
                <td className='px-6 py-6  '>  100%</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Resume1
