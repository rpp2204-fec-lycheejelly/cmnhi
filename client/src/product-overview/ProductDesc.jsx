let ProductDesc = ({slogan, description, features}) => {
  return  <div className='description-container'>
            <div className='product-description'>
              <h3>{slogan}</h3>
              <p>{description}</p>
            </div>
            <div className='features'>
              {features && features.map((item, i) => {
                return <p key={i}><b>&#10003;</b> {item.value} {item.feature}</p>
              })}
            </div>
          </div>
}

export default ProductDesc;