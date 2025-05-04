import Table from "@/components/table/Table"
import FirstSlideLayout from "@/layout/common/firstSlideLayout"


function FirstSlideUsers() {
  return (
    <FirstSlideLayout Heading={'Users'} Btn={'Add Uers'} BtnFn={'add-user'}>
      <Table
       Theader={["ID", "Name", "Contact", "Designation"]}
       Trow={[]}
      /> 
    </FirstSlideLayout>
  )
}

export default FirstSlideUsers