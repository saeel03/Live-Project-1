import { Button, Table, type TableProps } from 'antd';
interface Iusers {
  key: string;
  name: string;
  email: string;
  

}
  
const UserTable = () => {


    const columns: TableProps<Iusers>['columns']=[

        {
            title: 'Name',
            dataIndex: 'name',
            key:'name',
            
        },

        {
            title: 'Email',
            dataIndex: 'email',
            key:'email',
            
        },

        {
            title:'Action',
            key: 'action',
            render:()=>(<Button>Edit</Button>)

            


        }
    ]

    const data: Iusers[]=[
        
            {
    key: '1',
    name: 'Saeel Sakhalkar',
    email: 'saeel@gmail.com'
    
  },
   {
    key: '2',
    name: 'John Doe ',
    email: 'John@gmail.com'
    
  }
        
    ]
  return (
    <div>

        <Table<Iusers> columns={columns}  dataSource={data}/>


      
    </div>
  )
}

export default UserTable
