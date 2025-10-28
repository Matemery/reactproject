import { useState } from 'react'


function Admin(){
  const [couponCode, setCouponCode] = useState("")
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [coupons, setCoupons] = useState([]) 
  


  function saveCoupon(){
    console.log("Executing saveCoupon function")
    console.log(couponCode)
    console.log(couponDiscount)

    const newCoupon = {
      code: couponCode, 
      discount: couponDiscount
    }

    setCoupons([...coupons, newCoupon])
    setCouponCode("")
    setCouponDiscount(0)
  }

  return (
    <div className='container'>
      <h1 className='text-center my-4'>Store Administration</h1>

      <div className='d-flex gap-4'>
        <section className='w-50'>
          <h3>Add Products</h3>

          <div className="card">
            <div className="card-body">
              <div>
                <label className='form-label'>Title</label>
                <input type="text" className='form-control' />
              </div>

              <div>
                <label className='form-label'>Category</label>
                <input type="text" className='form-control' />
              </div>

              <div>
                <label className='form-label'>Image</label>
                <input type="text" className='form-control' />
              </div>

              <div>
                <label className='form-label'>Price</label>
                <input type="number" className='form-control' />
              </div>

              <div>
                <button className='btn '>Save Products</button>
              </div>
            </div>
          </div>
        </section>

        <section className='w-50'>
          <h3>Add Coupons</h3>

          <div className="card">
            <div className="card-body">
              <div>
                <label className='form-label'>Code</label>
                <input 
                  type="text" 
                  className='form-control' 
                  value={couponCode} 
                  onChange={(e) => setCouponCode(e.target.value)} 
                />
              </div>

              <div>
                <label className='form-label'>Discount</label>
                <input 
                  type="number" 
                  className='form-control' 
                  value={couponDiscount}
                  onChange={(e) => setCouponDiscount(e.target.value)}
                />
              </div>

              <div>
                <button onClick={saveCoupon} className='btn '>Save Coupon</button>
              </div>
            </div>
          </div>

          {coupons.map((coupon, index) => (
            <p key={index}>{coupon.code} - {coupon.discount}</p>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Admin