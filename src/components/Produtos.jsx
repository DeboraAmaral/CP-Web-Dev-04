import iphone from '../assets/iphone-image.png'
import ipad from '../assets/ipad-image.png'
import appleWatch from '../assets/apple-watch-image.png'
import macbookPro from '../assets/macbook-pro.png'

export function Produtos() {
  return (
    <div>
      <img src={iphone} alt="image" />
      <h2>Iphone 14 Pro Max</h2>
      <img src={ipad} alt="ipad" width={300}/>
      <h2>Ipad Pro</h2>
      <img src={appleWatch} alt="apple watch" width={300} />
      <h2>Apple Watch Ultra</h2>
      <img src={macbookPro} alt="macbook pro" width={300} />
      <h2>Macbook Pro M2</h2>
    </div>
  )
}