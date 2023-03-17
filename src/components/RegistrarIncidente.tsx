import { Form, Select } from "antd"
import Button from "antd/es/button"
import TextArea from "antd/es/input/TextArea"

const RegistrarIncidente = () =>{
return(
    <>
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Dispositivo">
        <Select>
        <Select.Option value="portatil">Portatil</Select.Option>
            <Select.Option value="impresora">Impresora</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Descripción">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Enviar</Button>
        </Form.Item>
      </Form>
    </>
)
}

export default RegistrarIncidente