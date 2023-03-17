import { Button } from "antd"

interface Props {
    showForm: (form: string) => void
  }
  
  const Navbar = ({showForm}: Props) => { 
  
    return(
      <div>
        <Button onClick={() => showForm('one')}>Registrar Prestamo</Button>
        <Button onClick={() => showForm('two')}>Registrar Incidente</Button>
      </div>
    )
   }
  
  export default Navbar
  