import { Button, Space } from "antd"

interface Props {
    showForm: (form: string) => void
  }
  
  const Navbar = ({showForm}: Props) => {
    
    const buttonNavbarStyle = {
        background: "#0c3e6e",
        borderColor: "#0c3e6e",
        color: "white"
    };

  
    return(
      <Space size="large">
        <Button size="large" style={buttonNavbarStyle} onClick={() => showForm('prestamo')}>Registrar Préstamo</Button>
        <Button size="large" style={buttonNavbarStyle} onClick={() => showForm('incidente')}>Registrar Incidente</Button>
      </Space>
    )
   }
  
  export default Navbar
  