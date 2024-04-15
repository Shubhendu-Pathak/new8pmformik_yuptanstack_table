import React, { useMemo, useState } from 'react'
import tabledata from './data.json'
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { colDef } from './columns'

function Main2() {
let[txt,setxt] = useState('')
let[alldata,setAlldata]=useState([])

let mydata = useMemo(()=>tabledata,[])
let colSchema =   useMemo(()=>colDef,[])

let tableInstance = useReactTable({
    columns:colSchema,
    data:mydata,
    getCoreRowModel:getCoreRowModel(),
    getFilteredRowModel:getFilteredRowModel(),
    getSortedRowModel:getSortedRowModel(),
    getPaginationRowModel:getPaginationRowModel(),
    state:{
        // for filtered data
        globalFilter:txt,
        //gor sorting
        sorting:alldata
    },
    onGlobalFilterChange:setxt,
    onSortingChange:setAlldata
})

console.log(tableInstance);
// console.log(tableInstance.getPageCount());
// console.log(tableInstance.getHeaderGroups());
// console.log(tableInstance.getRowModel());

  return (
    <div>
        <input type="text" name="" id="" 
        placeholder='Search data .........'
        className='form-control w-75 my-3 m-auto'
        value={txt}
        onChange={e=>setxt(e.target.value)}
        />
        <hr />
{/* 
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table> */}
<table className='table table-bordered table-success  '>
<thead>
{
tableInstance.getHeaderGroups().map(ele1=>(
    <tr key={ele1.id}>
      {
        ele1.headers.map((ele2)=>(
            <th 
            key={ele2.id} 
            colSpan={ele2.colSpan}
            onClick={ele2.column.getToggleSortingHandler()}
            >
{
    flexRender(
        ele2.column.columnDef.header,
        ele2.getContext()
    )
}
{/* sorting */}
{
    {asc:`👆`,desc:'👇'}[ele2.column.getIsSorted() ?? null]
}
{/* sorting */}
            </th>
        ))
      }
    </tr>
))
    }
</thead>
<tbody>
    {
tableInstance.getRowModel().rows.map(ele1=>(
    <tr key={ele1.id}>
        {
            ele1.getVisibleCells().map(ele2=>(
                <td key={ele2.id}>
                    {
                        flexRender(
                            ele2.column.columnDef.cell,
                            ele2.getContext()
                        )
                    }
                </td>
            ))
        }
    </tr>
))
    }
</tbody>
</table>
{/* pagination */}
<div className="my-3 p-3 border border-4  border-success ">
<button className="btn btn-info m-3"
onClick={()=>tableInstance.setPageIndex(0)}
>First Page
</button>
<button className="btn btn-warning m-3"
onClick={()=>tableInstance.setPageIndex(tableInstance.getPageCount()-1)}
>Last Page
</button>
<button className="btn btn-secondary text-light m-3"
onClick={()=>tableInstance.previousPage()}
disabled={!tableInstance.getCanPreviousPage()}
>
Previous Page
</button>
<button className="btn btn-success text-light m-3"
onClick={()=>tableInstance.nextPage()}
disabled={!tableInstance.getCanNextPage()}
>
NExt Page
</button>
</div>

<div className="p-3 my-3 border border-3">
    <ul className="my-2">
        <li>Total page = {tableInstance.getPageCount()}</li>
        <li>Current page = {tableInstance.options.state.pagination.pageIndex}</li>
    </ul>
    <input type="number" name="" id=""
    defaultValue={tableInstance.options.state.pagination.pageIndex}
    onChange={(event)=>tableInstance.setPageIndex(event.target.value)}
    />
    <br /><br />
    <select name="" id="" 
    value={tableInstance.options.state.pagination.pageIndex}
    onChange={(e)=>tableInstance.setPageIndex(e.target.value)}
    >
{
    [2,4,7].map(ele=>{
        return <option key={ele} value={ele}>{ele}</option>
    })
}
    </select>
    <br /><br />
</div>

{/* pagination */}
    </div>
  )
}

export default Main2