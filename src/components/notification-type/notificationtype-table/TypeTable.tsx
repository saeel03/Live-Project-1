import { Button, Space, Switch, Table, type TableProps } from "antd";


interface ITypeTable {
    id: string;
    title: string;
    enabled?: boolean;
}

const data: ITypeTable[] =[
    { id: "1", title: "Contact Form Email" },
  { id: "2", title: "Create Xtend Account" },
  { id: "3", title: "Creating a new account" },]

const TypeTable = () => {

    const columns: TableProps<ITypeTable>["columns"]=[
        {
            title: "Title",
            key:"title",
            render:(_, record) =>(
                <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <span>{record.title}</span>

            <Space>
                <Switch 
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                />
                <Button type="link">Edit</Button>
                <Button type="link" danger>Delete</Button>
            </Space>

          </div>
            ),
        }
    ]
  return (
    <div>

        <Table<ITypeTable> 
            columns={columns}
            rowKey="id"
            pagination={false}
            dataSource={data}
        />
      
    </div>
  )
}

export default TypeTable
