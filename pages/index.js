import styles from '../styles/Home.module.css'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import {
   LockOutlined,
   

} from '@ant-design/icons';

export default function Home() {
  
  return (
    <div className={styles.container}>
     
     <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
     <br></br>
     <Input placeholder="Password" prefix={<LockOutlined />} />
     <br></br>
     <Button type="second">Login</Button>
    
    </div>
  )
}
