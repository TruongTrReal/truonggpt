import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
 
const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setloading] = useState(false);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setform({...form, [name]: value})
  }
  const hanldeSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs.send(
      'service_l5aykht', 
      'template_bhgb5xp',
      {
        from_name:form.name,
        to_name:'Truong',
        from_email:form.email,
        to_email:'truongbodoi821@gmail.com',
        message: form.message,
      },
      'yhgyt6JMovm5FJPlM'
      )
      .then(() => {
        setloading(false);
        alert('Gửi mail thành công! Trường sẽ liên hệ bạn sớm nhất có thể.');
        setform({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setloading(false);
        console.log(error);
        alert('Gửi mail không thành công, vui lòng thử lại.');
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden h-[180vh] sm:h-[120vh]">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Khách hàng có yêu cầu riêng, khách hàng doanh nghiệp vui lòng gửi mail qua Form này. Trường sẽ liên hệ lại sớm nhất có thể!</p>
        <h3 className={styles.sectionHeadText}>Liên hệ.</h3>
        <form
          ref={formRef}
          onSubmit={hanldeSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Tên</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={hanldeChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={hanldeChange}
              placeholder="Địa chỉ email..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Nội dung</span>
            <textarea 
              row="7"
              name="message"
              value={form.message}
              onChange={hanldeChange}
              placeholder="Để liên lạc sớm nhất, bạn vui lòng gửi số điện thoại, nội dung yêu cầu vào đây.."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary"
            type="submit">
            {loading ? '/Sending.../' : 'Send.'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h[540px] h-[350px] sm:w-[550px] sm:w-[350px]">
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')