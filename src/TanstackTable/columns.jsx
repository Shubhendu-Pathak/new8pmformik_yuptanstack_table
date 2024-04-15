// {
//     "id": 100,
//     "first_name": "Ingrim",
//     "last_name": "Plunket",
//     "email": "iplunket2r@discovery.com",
//     "gender": "Male",
//     "dob": "2021-12-09T04:33:33Z"
//   }

import moment from "moment";


export const colDef =[
    {
        accessorKey:'id',
        header:'Header-Id'
    },
    {
        accessorKey:'first_name',
        header:'First Name'
    },
    {
        accessorKey:'last_name',
        header:'Last Name'
    },
    {
        accessorKey:'email',
        header:'EMAIL'
    },
    {
        accessorKey:'gender',
        header:'Gender'
    },
    {
        accessorKey:'dob',
        header:'Birth Date',
        cell:({getValue})=>moment(new Date(getValue())).format(`DD-MM-YYYY`)
    }
]