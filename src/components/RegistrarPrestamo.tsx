import { Form, Input, Select, DatePicker, Button } from "antd"
import TextArea from "antd/es/input/TextArea"

const RegistrarPrestamo = () =>{
return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Fecha Inicio">
          <DatePicker/>
        </Form.Item>
        <Form.Item label="Fecha Fin">
        <DatePicker/>
        </Form.Item>
        <Form.Item label="Dispositivo">
        <Select>
            <Select.Option value="portatil">Portatil</Select.Option>
            <Select.Option value="pc">PC Escritorio</Select.Option>
            <Select.Option value="videoBean">Video Beam</Select.Option>
            <Select.Option value="televisor">Televisor</Select.Option>
            <Select.Option value="impresora">Impresora</Select.Option>
            <Select.Option value="scanner">Scanner</Select.Option>
            <Select.Option value="sonido">Sonido</Select.Option>
            <Select.Option value="xbox">Xbox</Select.Option>
            <Select.Option value="play">PlayStation</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Dirección">
          <Input/>
        </Form.Item>
        <Form.Item label="Observaciones">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Enviar</Button>
        </Form.Item>
      </Form>
    </>
)
}

export default RegistrarPrestamo