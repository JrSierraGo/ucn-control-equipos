import { Form, DatePicker, Select, Input } from "antd"
import Button from "antd/es/button"
import TextArea from "antd/es/input/TextArea"

const RegistrarIncidente = () =>{
return(
    <div>
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Dispositivo">
        <Select>
            <Select.Option value="demo">Portatil</Select.Option>
            <Select.Option value="demo">PC Escritorio</Select.Option>
            <Select.Option value="demo">Video Beam</Select.Option>
            <Select.Option value="demo">Televisor</Select.Option>
            <Select.Option value="demo">Impresora</Select.Option>
            <Select.Option value="demo">Scanner</Select.Option>
            <Select.Option value="demo">Sonido</Select.Option>
            <Select.Option value="demo">Xbox</Select.Option>
            <Select.Option value="demo">PlayStation</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Descripción">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Descripción">
          <Button type="primary">Enviar</Button>
        </Form.Item>
      </Form>
    </div>
)
}

export default RegistrarIncidente